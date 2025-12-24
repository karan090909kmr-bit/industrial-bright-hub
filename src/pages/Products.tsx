import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Disc, ScrollText, HardHat, Package, Shirt, Factory, ArrowRight, CheckCircle, Sparkles, Wind, Paintbrush, Wrench, CircleDot, Shield } from 'lucide-react';

const categories = [
  {
    id: 'abrasives',
    name: 'Abrasives',
    description: 'High-performance grinding and sanding materials for surface preparation and finishing.',
    icon: Disc,
    color: 'bg-red-500/10 text-red-600 border-red-500/20',
    features: ['Aluminium Oxide / Silicon Carbide Sandpapers', 'Sanding Discs (paper, cloth, film backings)', 'Coated Grinding & Finishing Belts', 'Waterproof Sandpaper Sheets (wide grit range up to 7000+)', 'Cloth-backed Sanding Cloths', 'Flap Discs', 'PSA Disc', 'Rolloc Disc'],
  },
  {
    id: 'tapes',
    name: 'Self Adhesive Tapes',
    description: 'Industrial-strength self adhesive tapes for packaging, masking, and bonding applications.',
    icon: ScrollText,
    color: 'bg-green-500/10 text-green-600 border-green-500/20',
    features: ['BOPP / Packaging Tapes', 'Masking Tapes', 'D/S Polyester Tape', 'D/S Tissue Tape', 'D/S Cloth Tape', 'D/S Foam Tape', 'D/S Red Polyester Tape (Filmic Liner)', 'Floor Marking Tape', 'Aluminium Foil Tape', 'Duct Tape', 'Filament Tape (Mono & Cross)', 'Blue Door Holding Tape', 'Surface Protection Tape', 'Single Side Foam Tape', 'Acrylic Foam Tape (VHB Tape)', 'Paint Adhesion Testing Tape', 'Kapton® / Polyimide Tapes', 'High Temperature Masking Tapes'],
  },
  {
    id: 'workwear',
    name: 'Workwear',
    description: 'Custom-manufactured workwear including lint-free garments, ESD clothing, and corporate uniforms.',
    icon: Shirt,
    color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    features: ['Lint Free Pant & Shirt', 'Lint Free Apron', 'Lint Free Coverall', 'Lab Coats', 'ESD Coverall (With/Without Hood)', 'ESD Apron (With/Without Hood)', 'Lint Free Pant & Shirt (With Hood)', 'Lint Free Coverall (With Hood)', 'Non Woven Apron', 'Non Woven Coverall', 'Scrub Suit', 'Corporate Uniforms', 'Custom Workwear and Work Uniforms'],
  },
  {
    id: 'polishing-pads',
    name: 'Polishing Pads',
    description: 'High-quality polishing pads for automotive refinishing and surface finishing applications.',
    icon: CircleDot,
    color: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
    features: ['Orange Foam Pad', 'Natural Wool Buffing Pad'],
  },
  {
    id: 'wipes',
    name: 'Wipes',
    description: 'Industrial wipes for cleaning, surface preparation, and contamination control.',
    icon: ScrollText,
    color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    features: ['Microfibre Blue Wipe', 'Non-woven White Wipe', 'Lint Free Polyester Wipe', 'Lint Free Microfibre Wipe'],
  },
  {
    id: 'backup-pad',
    name: 'Backup Pad',
    description: 'Professional backup pads and sanding blocks for polishing and surface finishing applications.',
    icon: Disc,
    color: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
    features: ['Velcro Backup Pad', 'PSA Backup Pad', 'Sumo Backup Pad', 'Sanding Blocks'],
  },
  {
    id: 'spray-gun',
    name: 'Spray Gun',
    description: 'Professional spray guns for paint application and coating systems.',
    icon: Paintbrush,
    color: 'bg-sky-500/10 text-sky-600 border-sky-500/20',
    features: ['Paint Spray Gun', 'Conventional Gun', 'Paint Cup Gun', 'Air Less Gun'],
  },
  {
    id: 'polishing-compound',
    name: 'Polishing Compound',
    description: 'Professional polishing and rubbing compounds for surface finishing and paint correction.',
    icon: Sparkles,
    color: 'bg-pink-500/10 text-pink-600 border-pink-500/20',
    features: ['Heavy Cut / Rubbing Compounds', 'Medium Cut / Polishing Compounds', 'Finishing / Fine Polishing Compounds', 'All-In-One (AIO) or One-Step Compounds'],
  },
  {
    id: 'filters',
    name: 'Filters',
    description: 'Industrial-grade filters for paint booths, HVAC systems, and various filtration applications.',
    icon: Wind,
    color: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
    features: ['Pocket Filter', 'Pre Filter', 'Oven Filter', 'Nylon Mesh Filter', 'PP Cartridge Filter', 'Bag Filter', 'Paint Booth Ceiling Filter'],
  },
  {
    id: 'paint-booth-chemicals',
    name: 'Paint Booth Chemicals',
    description: 'Specialized chemicals for paint booth maintenance, coating protection, and surface preparation.',
    icon: Factory,
    color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    features: ['Paint Denaturant', 'Tacky Coat (Water / Solvent Base)', 'Oven Coat', 'Tacky Peeable'],
  },
  {
    id: 'pneumatic-tools',
    name: 'Pneumatic Tools',
    description: 'Professional pneumatic tools for automotive refinishing, metalworking, and industrial applications.',
    icon: Wrench,
    color: 'bg-slate-500/10 text-slate-600 border-slate-500/20',
    features: ['Angle Polisher', 'Nib Sander / Detail Sander', 'Die Grinder', 'Orbital Sander', 'Pop-Rivet Gun'],
  },
  {
    id: 'fabrics',
    name: 'Industrial Fabrics',
    description: 'High-quality fabric materials and textile solutions for industrial and commercial applications.',
    icon: Factory,
    color: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    features: ['Cotton Waste Fabrics', 'Protective Fabrics', 'Woven Fabrics', 'Cotton Fabrics (In Lumps)', 'Polyester Fabrics (In Lumps)', 'PV Fabrics (In Lumps)'],
  },
  {
    id: 'consumables',
    name: 'Industrial Consumables',
    description: 'Essential industrial consumables including lubricants, cleaning supplies, and maintenance materials.',
    icon: Package,
    color: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
    features: ['Industrial Lubricants', 'Cleaning Supplies', 'Maintenance Supplies'],
  },
  {
    id: 'safety',
    name: 'Safety Products',
    description: 'Comprehensive personal protective equipment and workplace safety solutions.',
    icon: HardHat,
    color: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    features: ['Safety Helmets', 'Safety Glasses & Goggles', 'Gloves & Hand Protection', 'Respiratory Protection', 'High-Visibility Clothing', 'Safety Shoes', 'Toe Guard', 'Gum Boot'],
  },
  {
    id: 'cleanroom-products',
    name: 'Cleanroom Products',
    description: 'Specialized cleanroom products for contamination control and ESD protection.',
    icon: Shield,
    color: 'bg-violet-500/10 text-violet-600 border-violet-500/20',
    features: ['Sticky Mat', 'ESD Shoes', 'ESD Slippers'],
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
                        <Link to={`/contact?product=${encodeURIComponent(category.name)}`} className="flex items-center gap-2">
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
                          <Link
                            key={idx}
                            to={`/contact?product=${encodeURIComponent(feature)}`}
                            className="flex items-center gap-3 hover:text-primary transition-colors group"
                          >
                            <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                            <span className="text-muted-foreground group-hover:text-primary transition-colors underline-offset-2 hover:underline">{feature}</span>
                          </Link>
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