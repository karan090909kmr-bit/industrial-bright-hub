import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProductsSlider } from '@/components/home/FeaturedProductsSlider';
import { ProductDescriptions } from '@/components/home/ProductDescriptions';
import { ProductCategories } from '@/components/home/ProductCategories';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProductsSlider />
      <ProductDescriptions />
      <ProductCategories />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
};

export default Index;
