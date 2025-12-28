import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { featuredProducts } from '@/data/featuredProducts';
import { ArrowLeft, CheckCircle, MessageSquareQuote } from 'lucide-react';

const FeaturedProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = featuredProducts.find(p => p.id === productId);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-muted/30 py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <button 
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Product Details
          </h1>
          <p className="text-lg text-muted-foreground">
            Learn more about our featured industrial products
          </p>
        </div>
      </section>

      {/* Product Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-2/5 relative">
                <div className="aspect-square lg:aspect-auto lg:h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  Featured
                </Badge>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-6 lg:p-10 flex flex-col">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {product.name}
                </h2>
                
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Specifications */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Specifications
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Applications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Get a Quote Button */}
                <div className="mt-auto pt-4 border-t border-border">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto gap-2"
                    onClick={() => navigate(`/contact?product=${encodeURIComponent(product.name)}`)}
                  >
                    <MessageSquareQuote className="w-5 h-5" />
                    Get a Quote for {product.name}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeaturedProductDetail;
