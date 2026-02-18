import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/SEOHead';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProductsSlider } from '@/components/home/FeaturedProductsSlider';
import { ProductCategories } from '@/components/home/ProductCategories';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { CTASection } from '@/components/home/CTASection';

const homeLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Civadale Enterprise",
    "alternateName": "TAQIRA",
    "url": "https://taqira.com/",
    "logo": "https://taqira.com/logo.png",
    "sameAs": ["https://civadale.com/"],
    "description": "Industrial supply company specializing in fire extinguishers, PPE, pneumatic tools, abrasives, packaging materials, and custom workwear across India.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nai Sadak Chowk, Patna City",
      "addressLocality": "Patna",
      "postalCode": "800008",
      "addressRegion": "Bihar",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-97520-97656",
      "contactType": "sales",
      "email": "info.civadale@gmail.com",
      "availableLanguage": ["English", "Hindi"]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Civadale Enterprise",
    "alternateName": "TAQIRA",
    "image": "https://taqira.com/og-image.jpg",
    "url": "https://taqira.com/",
    "telephone": "+91-97520-97656",
    "email": "info.civadale@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nai Sadak Chowk, Patna City",
      "addressLocality": "Patna",
      "postalCode": "800008",
      "addressRegion": "Bihar",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.6093",
      "longitude": "85.1376"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TAQIRA by Civadale Enterprise",
    "url": "https://taqira.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://taqira.com/products?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What products does Civadale Enterprise supply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Civadale Enterprise supplies 300+ industrial products including fire extinguishers, PPE (helmets, gloves, safety shoes), pneumatic tools, abrasives, BOPP tapes, masking tapes, stretch films, polishing pads, spray guns, filters, industrial workwear, and custom ESD/cleanroom garments under the TAQIRA brand."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer bulk pricing and pan-India delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer competitive bulk pricing on all products with no minimum order requirement. We deliver across all states in India with reliable logistics and typically respond to quote requests within 24 hours."
        }
      },
      {
        "@type": "Question",
        "name": "What is TAQIRA workwear?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TAQIRA is the dedicated industrial workwear brand of Civadale Enterprise, specializing in lint-free garments, ESD coveralls and aprons, lab coats, cleanroom apparel, and custom corporate uniforms designed for demanding industrial environments."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide fire extinguisher refilling services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide fire extinguisher refilling, testing, and AMC (Annual Maintenance Contract) services for all types of fire extinguishers including ABC, CO2, Clean Agent, and Water Type extinguishers across Bihar and other states."
        }
      }
    ]
  }
];

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="TAQIRA by Civadale Enterprise | Fire Safety, PPE & Industrial Products India"
        description="Buy fire extinguishers, PPE, pneumatic tools, abrasives, BOPP tapes, masking tapes, stretch films & industrial workwear. Bulk pricing & pan-India delivery from Patna, Bihar."
        canonical="/"
        jsonLd={homeLd}
      />
      <HeroSection />
      <FeaturedProductsSlider />
      <ProductCategories />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
};

export default Index;
