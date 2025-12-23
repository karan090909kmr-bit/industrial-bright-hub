import { Link } from 'react-router-dom';
import { Disc, ScrollText, HardHat, Package, Shirt, Factory, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'abrasives',
    name: 'Abrasives',
    description: 'Grinding wheels, cutting discs, sandpaper, and high-performance abrasive materials.',
    icon: Disc,
    color: 'bg-red-500/10 text-red-600',
  },
  {
    id: 'tapes',
    name: 'Self Adhesive Tapes',
    description: 'Industrial-strength self adhesive tapes for packaging, masking, and bonding applications.',
    icon: ScrollText,
    color: 'bg-green-500/10 text-green-600',
  },
  {
    id: 'safety',
    name: 'Safety Products',
    description: 'Personal protective equipment, safety gear, and workplace safety solutions.',
    icon: HardHat,
    color: 'bg-amber-500/10 text-amber-600',
  },
  {
    id: 'consumables',
    name: 'Industrial Consumables',
    description: 'Welding supplies, lubricants, cleaners, and essential industrial consumables.',
    icon: Package,
    color: 'bg-teal-500/10 text-teal-600',
  },
  {
    id: 'workwear',
    name: 'Custom Workwear',
    description: 'Coveralls, lab coats, scrub suits, and corporate uniforms manufactured to your specifications.',
    icon: Shirt,
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    id: 'fabrics',
    name: 'Industrial Fabrics',
    description: 'High-quality fabric materials and textile solutions for industrial applications.',
    icon: Factory,
    color: 'bg-purple-500/10 text-purple-600',
  },
];

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
              to={`/products#${category.id}`}
              className="card-industrial group p-8 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                <category.icon className="h-7 w-7" />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {category.description}
              </p>
              
              <div className="flex items-center gap-2 text-primary font-medium text-sm">
                <span>View Products</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
