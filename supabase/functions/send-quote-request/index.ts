import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const ALLOWED_ORIGIN = Deno.env.get("ALLOWED_ORIGIN") || "https://industrial-bright-hub.lovable.app";

const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  productName: string;
  requiredQuantity: string;
  message: string;
  pageSource: string;
  submissionDate: string;
  honeypot?: string; // Spam protection - should be empty
}

// HTML escape function to prevent XSS in email clients
function escapeHtml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Validate URL to prevent javascript: or data: URIs
function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch {
    return false;
  }
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: QuoteRequest = await req.json();

    // Honeypot check - bots fill this hidden field
    if (data.honeypot) {
      console.log("Honeypot triggered - likely spam");
      // Return success to not tip off the bot, but don't send email
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate required fields
    if (!data.name || !data.email || !data.productName || !data.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Input length limits to prevent abuse
    const limits = {
      name: 100,
      email: 255,
      phone: 30,
      company: 200,
      productName: 200,
      requiredQuantity: 100,
      message: 5000,
    };

    for (const [field, maxLength] of Object.entries(limits)) {
      const value = data[field as keyof typeof limits];
      if (value && value.length > maxLength) {
        return new Response(
          JSON.stringify({ error: `${field} is too long (max ${maxLength} characters)` }),
          {
            status: 400,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate pageSource URL
    const safePageSource = isValidUrl(data.pageSource) ? data.pageSource : 'Invalid URL';

    // Escape all user inputs for safe HTML rendering
    const safeName = escapeHtml(data.name);
    const safeEmail = escapeHtml(data.email);
    const safePhone = escapeHtml(data.phone);
    const safeCompany = escapeHtml(data.company);
    const safeProductName = escapeHtml(data.productName);
    const safeRequiredQuantity = escapeHtml(data.requiredQuantity);
    const safeMessage = escapeHtml(data.message);
    const safeSubmissionDate = escapeHtml(data.submissionDate);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #333; border-bottom: 2px solid #e67e22; padding-bottom: 10px;">
          New Quote Request – Civadale Website
        </h1>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 35%;">Full Name</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email Address</td>
            <td style="padding: 12px; border: 1px solid #ddd;">
              <a href="mailto:${safeEmail}" style="color: #e67e22;">${safeEmail}</a>
            </td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone Number</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${safePhone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Company Name</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${safeCompany || 'Not provided'}</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Product Name</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${safeProductName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Required Quantity</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${safeRequiredQuantity || 'Not specified'}</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Message</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${safeMessage}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Submission Date</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${safeSubmissionDate}</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Page Source</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${escapeHtml(safePageSource)}</td>
          </tr>
        </table>
        
        <p style="margin-top: 20px; color: #666; font-size: 14px;">
          This enquiry was submitted through the Civadale website contact form.
        </p>
      </div>
    `;

    // Send email using Resend API directly
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Civadale Website <onboarding@resend.dev>",
        to: ["info.civadale@gmail.com"],
        reply_to: data.email,
        subject: "New Quote Request – Civadale Website",
        html: emailHtml,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", result);
      throw new Error(result.message || "Failed to send email");
    }

    console.log("Quote request email sent successfully:", result);

    return new Response(JSON.stringify({ success: true, id: result.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-quote-request function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
