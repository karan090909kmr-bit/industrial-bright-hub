import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const industries = [
  { name: 'Suzuki', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Suzuki_logo_2.svg' },
  { name: 'Honda', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Honda.svg' },
  { name: 'Tata Motors', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg' },
  { name: 'Motherson', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Samvardhana_Motherson_logo.svg/512px-Samvardhana_Motherson_logo.svg.png' },
  { name: 'Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Mahindra_Rise_Logo.svg' },
  { name: 'Maruti Suzuki', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Maruti_Suzuki_Logo.svg' },
];

export function IndustriesServed() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll);
      return () => ref.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-background border-y border-border/50">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
            Trusted Across Leading Industries
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Supplying industrial consumables and workwear to automotive, manufacturing, 
            fabrication, and paint industries across India.
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          {/* Scroll Buttons - Desktop */}
          <Button
            variant="outline"
            size="icon"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-10 w-10 rounded-full bg-background shadow-md border-border ${!canScrollLeft ? 'opacity-0 pointer-events-none' : ''}`}
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-10 w-10 rounded-full bg-background shadow-md border-border ${!canScrollRight ? 'opacity-0 pointer-events-none' : ''}`}
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Logos Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide px-2 md:px-12 py-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center flex items-center justify-center w-28 h-16 sm:w-36 sm:h-20 lg:w-44 lg:h-24 p-4 bg-muted/30 rounded-lg border border-border/30 hover:border-border/60 transition-all duration-300"
              >
                <img
                  src={industry.logo}
                  alt={`${industry.name} - Industry served`}
                  className="max-w-full max-h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-muted-foreground text-xs mt-6 max-w-xl mx-auto">
          Logos are used to indicate industries served. No direct endorsement is implied.
        </p>
      </div>
    </section>
  );
}
