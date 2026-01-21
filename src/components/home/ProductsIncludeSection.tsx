import { Link } from 'react-router-dom';
import { 
  Shirt, 
  Shield, 
  Layers, 
  Disc, 
  HardHat, 
  Sparkles, 
  Wrench 
} from 'lucide-react';

const productRanges = [
  {
    icon: Shirt,
    title: 'Industrial & Custom Workwear',
    items: ['Coveralls', 'Aprons', 'Lab Coats', 'Boiler Suits'],
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: Shield,
    title: 'ESD Workwear',
    items: ['ESD Coveralls', 'ESD Aprons', 'ESD Caps', 'ESD Pant & Shirt'],
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    icon: Layers,
    title: 'Self-Adhesive Tapes',
    items: ['Masking Tape', 'BOPP Tape', 'Foam Tape', 'Filament Tape'],
    color: 'bg-orange-500/10 text-orange-600',
  },
  {
    icon: Disc,
    title: 'Abrasives',
    items: ['Sanding Papers', 'Velcro Discs', 'Sanding Belts', 'Flap Discs'],
    color: 'bg-red-500/10 text-red-600',
  },
  {
    icon: HardHat,
    title: 'Safety Equipment',
    items: ['Safety Helmets', 'Gloves', 'Safety Shoes', 'PPE'],
    color: 'bg-yellow-500/10 text-yellow-600',
  },
  {
    icon: Sparkles,
    title: 'Cleanroom Products',
    items: ['Sticky Mats', 'Microfiber Wipes', 'Lint-Free Wipes', 'Finger Cots'],
    color: 'bg-teal-500/10 text-teal-600',
  },
  {
    icon: Wrench,
    title: 'Pneumatic Tools',
    items: ['Rivet Guns', 'Screwdrivers', 'Angle Polishers', 'Sanders'],
    color: 'bg-gray-500/10 text-gray-600',
  },
];

export function ProductsIncludeSection() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Product Ranges
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Products Include
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive range of industrial solutions under the TAQIRA brand - 
            from custom workwear to specialized consumables and safety equipment.
          </p>
        </div>

        {/* Product ranges grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productRanges.map((range, index) => (
            <Link
              key={index}
              to="/products"
              className="group bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-12 h-12 rounded-lg ${range.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <range.icon className="h-6 w-6" />
              </div>
              
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {range.title}
              </h3>
              
              <ul className="space-y-1.5">
                {range.items.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
