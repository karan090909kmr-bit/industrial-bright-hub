import { featuredProducts } from '@/data/featuredProducts';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ProductDescriptions = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Product Details
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Product Description Sections */}
        <div className="space-y-16 md:space-y-24">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              id={product.id}
              className="scroll-mt-24"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                {/* Product Image */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg bg-card border border-border shadow-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Product Description */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {product.name}
                    </h3>
                    <div className="w-16 h-1 bg-primary mb-6" />
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Product description content will be added here.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="default" asChild>
                        <a href="/contact">Request Quote</a>
                      </Button>
                      <Button variant="outline" onClick={scrollToTop}>
                        <ArrowUp className="mr-2 h-4 w-4" />
                        Back to Top
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index < featuredProducts.length - 1 && (
                <div className="mt-16 md:mt-24">
                  <div className="border-t border-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
