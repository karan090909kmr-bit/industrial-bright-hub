import { Link } from 'react-router-dom';
import { Check, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { categories } from '@/data/categories';
import { Button } from '@/components/ui/button';

export const ProductsIncludeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCategory = categories[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-muted/30 rounded-2xl border border-border/50 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Category Image Card */}
            <div className="relative h-64 lg:h-auto lg:min-h-[400px]">
              <img
                src={currentCategory.image}
                alt={currentCategory.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Navigation Dots */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Previous category"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Next category"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Category Indicator */}
              <div className="absolute left-6 top-6">
                <div className="w-8 h-8 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
              </div>

              {/* Category Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                  {currentCategory.name}
                </h3>
                <p className="text-white/80 text-sm md:text-base line-clamp-2">
                  {currentCategory.description}
                </p>
              </div>

              {/* Pagination Dots */}
              <div className="absolute bottom-6 right-6 flex gap-1.5">
                {categories.slice(0, 5).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentIndex ? 'bg-primary' : 'bg-white/50'
                    }`}
                    aria-label={`Go to category ${idx + 1}`}
                  />
                ))}
                {categories.length > 5 && (
                  <span className="text-white/50 text-xs ml-1">+{categories.length - 5}</span>
                )}
              </div>
            </div>

            {/* Right: Products Include List */}
            <div className="p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-display font-semibold text-foreground">
                  Products Include:
                </h4>
                <Link to={`/products/${currentCategory.id}`}>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    View All
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                {currentCategory.features.slice(0, 8).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {currentCategory.features.length > 8 && (
                <p className="text-muted-foreground text-sm mt-4">
                  +{currentCategory.features.length - 8} more products
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Category Quick Nav */}
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                idx === currentIndex
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
