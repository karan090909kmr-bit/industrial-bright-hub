import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { featuredProducts } from '@/data/featuredProducts';

export const FeaturedProductsSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

  const autoPlay = useCallback(() => {
    if (!api || isPaused) return;
    api.scrollNext();
  }, [api, isPaused]);

  useEffect(() => {
    const interval = setInterval(autoPlay, 4000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section className="py-16 lg:py-20 bg-muted/40">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
            Best Sellers
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Popular Industrial Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Trusted by 100+ manufacturers. Bulk pricing available on all items.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {featuredProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-all duration-300 h-full flex flex-col group">
                    <Link
                      to={`/featured/${product.id}`}
                      className="relative aspect-square overflow-hidden cursor-pointer"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Bulk pricing badge */}
                      <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                        Bulk Pricing
                      </div>
                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                    <div className="p-5 flex flex-col flex-1">
                      <Link
                        to={`/featured/${product.id}`}
                        className="text-lg font-semibold text-foreground hover:text-primary transition-colors text-left mb-4 line-clamp-2 leading-snug"
                      >
                        {product.name}
                      </Link>
                      <div className="mt-auto">
                        <Button
                          variant="outline"
                          size="default"
                          className="w-full font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                          asChild
                        >
                          <Link to={`/featured/${product.id}`}>
                            View Details & Pricing
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-3 lg:-left-5 h-10 w-10 shadow-md" />
            <CarouselNext className="hidden md:flex -right-3 lg:-right-5 h-10 w-10 shadow-md" />
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link to="/contact">
            <Button size="lg" className="font-semibold">
              Request Bulk Quote for All Products
            </Button>
          </Link>
          <p className="text-muted-foreground text-sm mt-3">
            Get competitive rates on large orders
          </p>
        </div>
      </div>
    </section>
  );
};
