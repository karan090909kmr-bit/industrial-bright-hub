import { Layout } from '@/components/layout/Layout';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { ProductDescriptions } from '@/components/home/ProductDescriptions';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <FeaturedProducts />
      <ProductDescriptions />
      <CTASection />
    </Layout>
  );
};

export default Index;
