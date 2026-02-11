import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/SEOHead';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProductsSlider } from '@/components/home/FeaturedProductsSlider';
import { ProductCategories } from '@/components/home/ProductCategories';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { CTASection } from '@/components/home/CTASection';

const homeLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Civadale Enterprise",
  "alternateName": "TAQIRA",
  "url": "https://civadale.com/",
  "logo": "https://civadale.com/logo.png",
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
};

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="TAQIRA by Civadale Enterprise | Fire Safety, PPE & Industrial Products"
        description="Trusted manufacturer & supplier of fire extinguishers, PPE, pneumatic tools, abrasives, packaging materials & custom industrial workwear. Bulk pricing across India."
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
