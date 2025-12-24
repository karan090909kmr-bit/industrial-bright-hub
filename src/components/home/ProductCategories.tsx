import { Link } from 'react-router-dom';
import { Disc, ScrollText, HardHat, Package, Shirt, Factory, ArrowRight, Sparkles, Wind, Paintbrush, Wrench, CircleDot, Shield } from 'lucide-react';

const categories = [
  {
    id: 'abrasives',
    name: 'Abrasives',
    description: 'Sandpapers, sanding discs, grinding belts, flap discs, and PSA/Rolloc discs.',
    icon: Disc,
    color: 'bg-red-500/10 text-red-600',
  },
  {
    id: 'tapes',
    name: 'Self Adhesive Tapes',
    description: 'Packaging, masking, double-sided, floor marking, and specialty industrial tapes.',
    icon: ScrollText,
    color: 'bg-green-500/10 text-green-600',
  },
  {
    id: 'workwear',
    name: 'Workwear',
    description: 'Lint-free garments, ESD clothing, lab coats, coveralls, and corporate uniforms.',
    icon: Shirt,
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    id: 'polishing-pads',
    name: 'Polishing Pads',
    description: 'High-quality orange foam pads and natural wool buffing pads for surface finishing.',
    icon: CircleDot,
    color: 'bg-orange-500/10 text-orange-600',
  },
  {
    id: 'wipes',
    name: 'Wipes',
    description: 'Industrial microfibre, non-woven, and lint-free wipes for cleaning and preparation.',
    icon: ScrollText,
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    id: 'backup-pad',
    name: 'Backup Pad',
    description: 'Velcro, PSA, and Sumo backup pads with sanding blocks for polishing applications.',
    icon: Disc,
    color: 'bg-indigo-500/10 text-indigo-600',
  },
  {
    id: 'spray-gun',
    name: 'Spray Gun',
    description: 'Paint spray guns, conventional guns, paint cup guns, and airless gun systems.',
    icon: Paintbrush,
    color: 'bg-sky-500/10 text-sky-600',
  },
  {
    id: 'polishing-compound',
    name: 'Polishing Compound',
    description: 'Heavy cut, medium cut, finishing compounds, and all-in-one polishing solutions.',
    icon: Sparkles,
    color: 'bg-pink-500/10 text-pink-600',
  },
  {
    id: 'filters',
    name: 'Filters',
    description: 'Pocket, pre, oven, nylon mesh, cartridge, bag, and paint booth ceiling filters.',
    icon: Wind,
    color: 'bg-cyan-500/10 text-cyan-600',
  },
  {
    id: 'paint-booth-chemicals',
    name: 'Paint Booth Chemicals',
    description: 'Paint denaturant, tacky coat, oven coat, and tacky peeable chemicals.',
    icon: Factory,
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    id: 'pneumatic-tools',
    name: 'Pneumatic Tools',
    description: 'Angle polishers, sanders, die grinders, and pop-rivet guns for industrial use.',
    icon: Wrench,
    color: 'bg-slate-500/10 text-slate-600',
  },
  {
    id: 'fabrics',
    name: 'Industrial Fabrics',
    description: 'Cotton waste, protective, woven, and polyester fabrics for industrial applications.',
    icon: Factory,
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    id: 'consumables',
    name: 'Industrial Consumables',
    description: 'Industrial lubricants, cleaning supplies, and maintenance materials.',
    icon: Package,
    color: 'bg-teal-500/10 text-teal-600',
  },
  {
    id: 'safety',
    name: 'Safety Products',
    description: 'Helmets, goggles, gloves, respiratory protection, and safety footwear.',
    icon: HardHat,
    color: 'bg-amber-500/10 text-amber-600',
  },
  {
    id: 'cleanroom-products',
    name: 'Cleanroom Products',
    description: 'Sticky mats, ESD shoes, and ESD slippers for contamination control.',
    icon: Shield,
    color: 'bg-violet-500/10 text-violet-600',
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