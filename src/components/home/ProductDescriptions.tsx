import { Link } from 'react-router-dom';
import { featuredProducts } from '@/data/featuredProducts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquareQuote, CheckCircle } from 'lucide-react';

export const ProductDescriptions = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Product Details
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about our featured industrial products
          </p>
        </div>

        <div className="space-y-16">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              id={product.id}
              className="scroll-mt-24 bg-card rounded-2xl shadow-xl border border-border overflow-hidden"
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
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
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specifications */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Specifications
                    </h4>
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
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Applications
                    </h4>
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
                    <Link to={`/contact?product=${encodeURIComponent(product.name)}`}>
                      <Button size="lg" className="w-full sm:w-auto gap-2">
                        <MessageSquareQuote className="w-5 h-5" />
                        Get a Quote for {product.name}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
