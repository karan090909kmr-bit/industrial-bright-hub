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
    <section className="section-padding bg-muted">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner for Industrial Consumables & Custom Workwear
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              As manufacturers and suppliers of quality industrial consumables, safety products, 
              and custom workwear, our commitment to excellence and competitive pricing 
              sets us apart from the competition.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.slice(0, 4).map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-industrial border border-border">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-muted rounded-xl">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">8+</div>
                  <div className="text-muted-foreground text-sm">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-xl">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">300+</div>
                  <div className="text-muted-foreground text-sm">Products</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-xl">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">100+</div>
                  <div className="text-muted-foreground text-sm">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-xl">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">99%</div>
                  <div className="text-muted-foreground text-sm">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-accent/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
