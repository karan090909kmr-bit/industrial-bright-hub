import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Disc, ScrollText, HardHat, Package, Shirt, Factory, ArrowRight, CheckCircle } from 'lucide-react';

const categories = [
  {
    id: 'abrasives',
    name: 'Abrasives',
    description: 'High-performance grinding wheels, cutting discs, sandpaper, and abrasive materials for surface preparation and finishing.',
    icon: Disc,
    color: 'bg-red-500/10 text-red-600 border-red-500/20',
    features: ['Grinding Wheels', 'Cutting Discs', 'Sandpaper & Sheets', 'Flap Discs', 'Wire Brushes'],
  },
  {
    id: 'tapes',
    name: 'Self Adhesive Tapes',
    description: 'Industrial-strength self adhesive tapes for packaging, masking, electrical, and bonding applications.',
    icon: ScrollText,
    color: 'bg-green-500/10 text-green-600 border-green-500/20',
    features: ['Packaging Tapes', 'Masking Tapes', 'Electrical Tape', 'Double-Sided Tape', 'Specialty Tapes'],
  },
  {
    id: 'safety',
    name: 'Safety Products',
    description: 'Comprehensive personal protective equipment and workplace safety solutions to keep your team protected.',
    icon: HardHat,
    color: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    features: ['Hard Hats & Helmets', 'Safety Glasses & Goggles', 'Gloves & Hand Protection', 'Respiratory Protection', 'High-Visibility Clothing'],
  },
  {
    id: 'consumables',
    name: 'Industrial Consumables',
    description: 'Essential welding supplies, lubricants, cleaners, and industrial consumables to keep operations running smoothly.',
    icon: Package,
    color: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
    features: ['Welding Rods & Wire', 'Industrial Lubricants', 'Cleaning Supplies', 'Fasteners & Hardware', 'Maintenance Supplies'],
  },
  {
    id: 'workwear',
    name: 'Custom Workwear',
    description: 'Custom-manufactured coveralls, lab coats, scrub suits, and corporate uniforms tailored to your specifications.',
    icon: Shirt,
    color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    features: ['Coveralls', 'Lab Coats', 'Scrub Suits', 'Corporate Uniforms', 'Custom Embroidery'],
  },
  {
    id: 'fabrics',
    name: 'Industrial Fabrics',
    description: 'High-quality fabric materials and textile solutions for industrial and commercial applications.',
    icon: Factory,
    color: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    features: ['Woven Fabrics', 'Non-Woven Materials', 'Technical Textiles', 'Protective Fabrics', 'Custom Fabric Solutions'],
  },
  {
    id: 'filters',
    name: 'Filters',
    description: 'Industrial-grade filters for paint booths, HVAC systems, and various filtration applications.',
    icon: Package,
    color: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
    features: ['Pocket Filter, Pre Filter, Oven Filter', 'Cartridge Filter, Bag Filter (Liquid Filter)', 'Nylon Mesh Filter', 'Paint Booth Ceiling Filter & Etc'],
  },
  {
    id: 'paint-booth-chemicals',
    name: 'Paint Booth Chemicals',
    description: 'Specialized chemicals for paint booth maintenance, coating protection, and surface preparation.',
    icon: Factory,
    color: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
    features: ['Paint Denaturant', 'Tacky Coat (Water & Solvent Base)', 'Oven Coat', 'Tacky Peeable & Etc'],
  },
  {
    id: 'paint-repairing-system',
    name: 'Paint Repairing System',
    description: 'Complete paint repair solutions including pads, compounds, cloths, and spray equipment.',
    icon: Disc,
    color: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
    features: ['Orange Foam Pad, Natural Wool Buffing Pad', 'Polishing & Rubbing Compound', 'IP Wipes, Lint Free Cloth, Microfiber Cloth', 'Paint Spray Gun, Conventional & Air Less Gun', 'Lint Free Hand Gloves, Paint Cup Gun & Etc'],
  },
  {
    id: 'backup-pad',
    name: 'Backup Pad',
    description: 'Professional backup pads and sanding blocks for polishing and surface finishing applications.',
    icon: Disc,
    color: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
    features: ['Velcro Backup Pad (Size: 1"/2"/3"/5"/6")', 'PSA Backup Pad (Size: 5")', 'Sumo Backup Pad (Size: 3")', 'Sanding Blocks & Etc'],
  },
  {
    id: 'tack-rag',
    name: 'Tack Rag',
    description: 'High-quality tack rags for dust removal and surface preparation before painting.',
    icon: ScrollText,
    color: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
    features: ['Cotton Tack Rag', 'Lint Free Tack Rag'],
  },
  {
    id: 'pneumatic-tools',
    name: 'Pneumatic Tools',
    description: 'Professional pneumatic tools for automotive refinishing, metalworking, and industrial applications.',
    icon: HardHat,
    color: 'bg-slate-500/10 text-slate-600 border-slate-500/20',
    features: ['Angle Polisher', 'Orbital Sander', 'Nib Sander / Detail Sander', 'Pop-Rivet Gun', 'Die Grinder & Etc'],
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Our Products
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of industrial consumables, safety products, 
            custom workwear, and fabric solutions manufactured to meet your exact requirements.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="space-y-16">
            {categories.map((category, index) => (
              <div
                key={category.id}
                id={category.id}
                className="scroll-mt-24 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Category Info */}
                    <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center">
                      <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center mb-6 border`}>
                        <category.icon className="h-8 w-8" />
                      </div>
                      <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {category.name}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      <Button variant="accent" className="w-fit" asChild>
                        <Link to="/contact" className="flex items-center gap-2">
                          Request Quote
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    
                    {/* Features List */}
                    <div className="lg:col-span-3 bg-muted p-8 lg:p-10">
                      <h3 className="font-semibold text-foreground mb-6">Products Include:</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {category.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Need Custom Manufacturing?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We specialize in custom manufacturing of workwear and fabric products. 
            Contact us with your specific requirements and we'll deliver to your exact specifications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="default" size="xl" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Get a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="tel:+1234567890">Call: +1 (234) 567-890</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;