import { CheckCircle, Truck, HeadphonesIcon, BadgeCheck, Clock, DollarSign } from 'lucide-react';

const features = [
  {
    icon: BadgeCheck,
    title: 'Premium Quality',
    description: 'We source only from trusted manufacturers ensuring top-tier products that meet industry standards.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Bulk purchasing power allows us to offer the best prices without compromising on quality.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Efficient logistics network ensures your orders reach you quickly, minimizing downtime.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Support',
    description: 'Our knowledgeable team provides technical guidance and product recommendations.',
  },
  {
    icon: CheckCircle,
    title: 'Wide Selection',
    description: 'Comprehensive inventory covering all major categories of industrial supplies.',
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    description: '28+ years of experience serving businesses with consistent, dependable service.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
              Your Trusted Partner for Industrial Solutions
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              As manufacturers and suppliers of quality industrial consumables, safety products, 
              and custom workwear, our commitment to excellence sets us apart.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-5">
              {features.slice(0, 4).map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border/50 animate-fade-up hover:shadow-sm transition-shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1.5">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-lg border border-border">
              <div className="text-center mb-6">
                <h3 className="font-display text-xl font-bold text-foreground">Our Track Record</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-5 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-1">300+</div>
                  <div className="text-muted-foreground text-sm font-medium">Products Available</div>
                </div>
                <div className="text-center p-5 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-1">8+</div>
                  <div className="text-muted-foreground text-sm font-medium">Years Experience</div>
                </div>
                <div className="text-center p-5 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-1">100+</div>
                  <div className="text-muted-foreground text-sm font-medium">Happy Clients</div>
                </div>
                <div className="text-center p-5 bg-accent/10 rounded-xl border border-accent/20">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-accent mb-1">24/7</div>
                  <div className="text-muted-foreground text-sm font-medium">Support Available</div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -top-3 -right-3 w-full h-full bg-accent/15 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
