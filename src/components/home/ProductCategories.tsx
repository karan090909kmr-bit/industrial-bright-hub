import { Link } from 'react-router-dom';
import { categories } from '@/data/categories';

export function ProductCategories() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
            Our Products
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
            Industrial Consumables & Custom Workwear
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From industrial consumables to custom-manufactured workwear, we provide everything your 
            business needs with reliable quality and competitive pricing.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] animate-fade-up shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Background image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark overlay - stronger for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30 group-hover:from-black/80 group-hover:via-black/50 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-5 drop-shadow-lg leading-snug">
                  {category.name}
                </h3>
                
                <span className="inline-block px-6 py-2.5 border-2 border-white text-white text-sm font-semibold rounded-md transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground">
                  View Products
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
