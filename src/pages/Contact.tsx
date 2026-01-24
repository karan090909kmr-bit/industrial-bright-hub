import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '+91 97520 97656',
    link: 'tel:+919752097656',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info.civadale@gmail.com',
    link: 'mailto:info.civadale@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: 'Nai Sadak Chowk, Patna City,\nPatna - 800008, Bihar, India',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Mon - Sat: 9:00 AM - 6:00 PM',
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productName: '',
    requiredQuantity: '',
    message: '',
  });

  useEffect(() => {
    const product = searchParams.get('product');
    if (product) {
      setFormData(prev => ({ ...prev, productName: product }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent duplicate submissions
    if (isSubmitting) return;
    
    setIsSubmitting(true);

    try {
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        productName: formData.productName.trim(),
        requiredQuantity: formData.requiredQuantity.trim(),
        message: formData.message.trim(),
        pageSource: window.location.origin + location.pathname + location.search,
        submissionDate: new Date().toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'short'
        }),
      };

      const { data, error } = await supabase.functions.invoke('send-quote-request', {
        body: submissionData,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Request Sent Successfully!",
        description: "Thank you! Your request has been sent successfully. Our team will contact you shortly.",
      });

      // Reset form after short delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          productName: '',
          requiredQuantity: '',
          message: '',
        });
        setIsSubmitted(false);
      }, 3000);

    } catch (error: any) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Have questions or need a quote? Reach out to our team and we'll 
            respond within 24 business hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Request a Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (234) 567-890"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="productName">Product Name *</Label>
                      <Input
                        id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        placeholder="Enter product name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="requiredQuantity">Required Quantity</Label>
                      <Input
                        id="requiredQuantity"
                        name="requiredQuantity"
                        value={formData.requiredQuantity}
                        onChange={handleChange}
                        placeholder="Enter Required Qty."
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      required
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Request Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  {isSubmitted && (
                    <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <p className="text-green-700 dark:text-green-400 font-medium flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Thank you! Your request has been sent successfully. Our team will contact you shortly.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground">
                    We're here to help with all your industrial supply needs.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-6 border border-border shadow-card"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                            >
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-muted-foreground whitespace-pre-line">{info.details}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Why Contact Us */}
                <div className="bg-muted rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-4">Why Contact Us?</h3>
                  <ul className="space-y-3">
                    {[
                      'Get personalized product recommendations',
                      'Request bulk pricing and quotes',
                      'Technical support and guidance',
                      'Schedule a consultation',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground text-sm">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
