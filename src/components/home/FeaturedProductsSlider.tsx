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
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Industrial Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium Industrial Consumables, Fabric Materials & Custom Workwear
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
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <Link
                      to={`/featured/${product.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-square overflow-hidden cursor-pointer group"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    <div className="p-4 flex flex-col flex-1">
                      <Link
                        to={`/featured/${product.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-foreground hover:text-primary transition-colors text-left mb-3"
                      >
                        {product.name}
                      </Link>
                      <div className="mt-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          asChild
                        >
                          <Link
                            to={`/featured/${product.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Description
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
