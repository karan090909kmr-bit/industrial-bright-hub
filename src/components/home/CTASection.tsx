import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
          Start Saving Today
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-5 max-w-3xl mx-auto leading-tight">
          Get Bulk Pricing for Your Industrial Needs
        </h2>
        <p className="text-primary-foreground/85 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
          Reduce costs with competitive bulk rates. Our team will respond within 24 hours 
          with a customized quote tailored to your requirements.
        </p>
        
        {/* Trust microcopy */}
        <p className="text-accent text-sm font-medium mb-8">
          ✓ No minimum order · ✓ Pan-India delivery · ✓ Custom manufacturing available
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" asChild className="text-base font-bold px-8 shadow-lg">
            <Link to="/contact" className="flex items-center gap-2">
              Get Your Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild className="text-base font-semibold px-8">
            <a href="tel:+919752097656" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Speak to an Expert
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
