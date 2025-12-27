import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { HeroSlider } from '@/components/home/HeroSlider';
import { ProductCategories } from '@/components/home/ProductCategories';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HeroSlider />
      <ProductCategories />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
};

export default Index;
