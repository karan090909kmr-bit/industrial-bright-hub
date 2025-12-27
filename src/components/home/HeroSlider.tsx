import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import fabricsImg from '@/assets/categories/fabrics.jpg';
import consumablesImg from '@/assets/categories/consumables.jpg';
import workwearImg from '@/assets/categories/workwear.jpg';

const slides = [
  {
    image: fabricsImg,
    title: 'Industrial Cotton Fabric – 120 GSM',
  },
  {
    image: consumablesImg,
    title: 'Premium Non-Woven Fabric',
  },
  {
    image: workwearImg,
    title: 'Heavy Duty Packaging Material',
  },
];

export function HeroSlider() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Link
                  to="/contact"
                  className="block group relative overflow-hidden rounded-xl aspect-[4/3]"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="font-display text-xl font-bold text-primary-foreground">
                      {slide.title}
                    </h2>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
}
