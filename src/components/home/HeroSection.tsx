import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Truck, Award } from 'lucide-react';

const features = [
  { icon: Shield, text: 'Quality Guaranteed' },
  { icon: Truck, text: 'Fast Delivery' },
  { icon: Award, text: 'Custom Manufacturing' },
];

export function HeroSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Manufacturers & Suppliers of Custom Workwear
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Premium Industrial Consumables,
              <span className="block text-accent">Fabric Materials & Custom Workwear</span>
            </h1>
            
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Equip your business with high-quality industrial consumables, safety wear, and customized fabric products—manufactured to meet your exact requirements with reliable quality and competitive pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Get a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-primary-foreground/80">
                  <feature.icon className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="hidden lg:block relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-industrial-light/30 rounded-full blur-2xl" />
              
              {/* Stats cards */}
              <div className="relative grid grid-cols-2 gap-4">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                  <div className="text-4xl font-display font-bold text-accent mb-2">500+</div>
                  <div className="text-primary-foreground/80 text-sm">Products Available</div>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 mt-8">
                  <div className="text-4xl font-display font-bold text-accent mb-2">28+</div>
                  <div className="text-primary-foreground/80 text-sm">Years Experience</div>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                  <div className="text-4xl font-display font-bold text-accent mb-2">1000+</div>
                  <div className="text-primary-foreground/80 text-sm">Happy Clients</div>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 mt-8">
                  <div className="text-4xl font-display font-bold text-accent mb-2">24/7</div>
                  <div className="text-primary-foreground/80 text-sm">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
