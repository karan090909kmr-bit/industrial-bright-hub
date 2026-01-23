import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Truck, HeadphonesIcon, BadgeCheck, Clock, DollarSign, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: BadgeCheck,
    title: 'Industrial-Grade Quality',
    description: 'Every product meets strict industry standards. Trusted by manufacturers across India.',
  },
  {
    icon: DollarSign,
    title: 'Bulk Pricing Advantage',
    description: 'Save more on large orders. Competitive rates without compromising on quality.',
  },
  {
    icon: Truck,
    title: 'Fast Pan-India Delivery',
    description: 'Reliable logistics ensure your orders arrive on time, every time.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: 'Expert guidance on product selection. We help you find the right fit.',
  },
  {
    icon: CheckCircle,
    title: '300+ Products Ready',
    description: 'Comprehensive inventory covering all major industrial supply categories.',
  },
  {
    icon: Clock,
    title: '8+ Years Experience',
    description: 'Proven track record serving 100+ industrial clients with reliable service.',
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
              Why Industrial Buyers Choose TAQIRA
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
              Your Reliable Partner for Industrial Supply
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              From ESD workwear to abrasives and safety equipment — we supply what your 
              business needs, when you need it, at prices that work for your budget.
            </p>

            {/* CTA in Why Choose Us section */}
            <div className="mb-10">
              <Button size="lg" asChild className="font-semibold">
                <Link to="/contact" className="flex items-center gap-2">
                  Request Bulk Pricing
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <p className="text-muted-foreground text-sm mt-3">
                Quick response guaranteed within 24 hours
              </p>
            </div>
            
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
                <h3 className="font-display text-xl font-bold text-foreground">Trusted by Industrial Buyers</h3>
                <p className="text-muted-foreground text-sm mt-1">Serving businesses across India</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-5 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-1">300+</div>
                  <div className="text-muted-foreground text-sm font-medium">Products in Stock</div>
                </div>
                <div className="text-center p-5 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-1">8+</div>
                  <div className="text-muted-foreground text-sm font-medium">Years Trusted</div>
                </div>
                <div className="text-center p-5 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-1">100+</div>
                  <div className="text-muted-foreground text-sm font-medium">Industrial Clients</div>
                </div>
                <div className="text-center p-5 bg-accent/10 rounded-xl border border-accent/20">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-accent mb-1">24/7</div>
                  <div className="text-muted-foreground text-sm font-medium">Enquiry Support</div>
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
