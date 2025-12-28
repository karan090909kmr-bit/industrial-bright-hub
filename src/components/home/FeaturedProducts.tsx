import { featuredProducts } from '@/data/featuredProducts';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const FeaturedProducts = () => {
  const scrollToProduct = (productId: string) => {
    const element = document.getElementById(productId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Industrial Products
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium Industrial Consumables, Fabric Materials & Custom Workwear
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => scrollToProduct(product.id)}
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Product Info */}
              <div className="p-3 md:p-4">
                <h3 
                  className="font-semibold text-sm md:text-base text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToProduct(product.id);
                  }}
                >
                  {product.name}
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs md:text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToProduct(product.id);
                  }}
                >
                  View Description
                  <ArrowDown className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
