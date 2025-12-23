import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Wrench, HardHat, Disc, ScrollText, Wind, Package, ArrowRight, CheckCircle } from 'lucide-react';

const categories = [
  {
    id: 'tools',
    name: 'Industrial Tools',
    description: 'Professional-grade hand tools, power tools, and precision instruments designed for demanding industrial applications.',
    icon: Wrench,
    color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    features: ['Hand Tools & Wrenches', 'Power Tools', 'Measuring Instruments', 'Cutting Tools', 'Specialty Tools'],
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
    id: 'abrasives',
    name: 'Abrasives',
    description: 'High-performance grinding wheels, cutting discs, sandpaper, and abrasive materials for surface preparation.',
    icon: Disc,
    color: 'bg-red-500/10 text-red-600 border-red-500/20',
    features: ['Grinding Wheels', 'Cutting Discs', 'Sandpaper & Sheets', 'Flap Discs', 'Wire Brushes'],
  },
  {
    id: 'tapes',
    name: 'Tapes & Adhesives',
    description: 'Industrial-strength tapes, adhesives, sealants, and bonding solutions for every application.',
    icon: ScrollText,
    color: 'bg-green-500/10 text-green-600 border-green-500/20',
    features: ['Electrical Tape', 'Duct & Packaging Tape', 'Double-Sided Tape', 'Industrial Adhesives', 'Sealants'],
  },
  {
    id: 'pneumatic',
    name: 'Pneumatic Tools',
    description: 'Reliable air-powered tools, compressors, and pneumatic accessories for efficient operations.',
    icon: Wind,
    color: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    features: ['Air Impact Wrenches', 'Air Drills & Grinders', 'Air Compressors', 'Pneumatic Staplers', 'Air Hoses & Fittings'],
  },
  {
    id: 'consumables',
    name: 'Consumables',
    description: 'Essential welding supplies, lubricants, cleaners, and industrial consumables to keep operations running.',
    icon: Package,
    color: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
    features: ['Welding Rods & Wire', 'Industrial Lubricants', 'Cleaning Supplies', 'Fasteners & Hardware', 'Maintenance Supplies'],
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
            Explore our comprehensive range of industrial supplies, from essential tools 
            to specialized equipment for every industry.
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
            Can't Find What You Need?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Our catalog extends beyond what's listed here. Contact us with your 
            specific requirements and we'll source it for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="default" size="xl" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us
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
