import { Link } from 'react-router-dom';
import { categories } from '@/data/categories';

// Category benefit highlights for conversion
const categoryBenefits: Record<string, string> = {
  'abrasives': 'Industrial-Grade Durability',
  'tapes': 'Heavy-Duty Adhesion',
  'workwear': 'Custom Manufacturing',
  'polishing-pads': 'Professional Finish',
  'wipes': 'Lint-Free Quality',
  'backup-pad': 'Long-Lasting Performance',
  'spray-gun': 'Precision Application',
  'polishing-compound': 'Mirror-Like Results',
  'filters': 'Maximum Filtration',
  'paint-booth-chemicals': 'Safety Compliant',
  'pneumatic-tools': 'Heavy-Duty Power',
  'fabrics': 'Industrial Strength',
  'consumables': 'Bulk Supply Ready',
  'safety': 'Certified Protection',
  'cleanroom-products': 'Contamination-Free',
  'tack-cloth': 'Dust-Free Surface',
  'packaging': 'Secure Packaging',
  'safety-hand-gloves': 'Maximum Grip & Safety',
  'fire-safety': 'Industrial Fire Protection',
};

export function ProductCategories() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
            300+ Products Available
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
            Industrial Consumables & Custom Workwear
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Bulk pricing on quality industrial supplies. From consumables to custom-manufactured 
            workwear — everything your business needs with reliable delivery across India.
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
                alt={`${category.name} — Buy industrial ${category.name.toLowerCase()} online from Civadale Enterprise, Patna India. Bulk orders & pan-India delivery.`}
                loading="lazy"
                width={400}
                height={300}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark overlay - stronger for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30 group-hover:from-black/80 group-hover:via-black/50 transition-colors duration-300" />
              
              {/* Benefit badge */}
              {categoryBenefits[category.id] && (
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {categoryBenefits[category.id]}
                </div>
              )}
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-5 drop-shadow-lg leading-snug">
                  {category.name}
                </h3>
                
                <span className="inline-block px-6 py-2.5 border-2 border-white text-white text-sm font-semibold rounded-md transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground">
                  Explore Range →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for? We source custom industrial supplies.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Request Custom Quote →
          </Link>
        </div>
      </div>
    </section>
  );
}
