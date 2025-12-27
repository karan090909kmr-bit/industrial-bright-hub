import { Link } from 'react-router-dom';
import { categories } from '@/data/categories';

export function ProductCategories() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Products
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Industrial Consumables & Custom Workwear
          </h2>
          <p className="text-muted-foreground text-lg">
            From industrial consumables to custom-manufactured workwear, we provide everything your 
            business needs with reliable quality and competitive pricing.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 drop-shadow-lg">
                  {category.name}
                </h3>
                
                <span className="inline-block px-6 py-2 border-2 border-white text-white text-sm font-medium transition-all duration-300 group-hover:bg-white group-hover:text-black">
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
