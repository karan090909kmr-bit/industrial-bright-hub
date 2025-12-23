import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: CheckCircle,
    title: 'Quality First',
    description: 'We never compromise on the quality of our products, ensuring every item meets rigorous standards.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Your success is our priority. We work closely with clients to understand and meet their needs.',
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'Honest dealings and transparent practices form the foundation of all our business relationships.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            About Our Company
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            For over 28 years, we've been the trusted partner for businesses 
            seeking quality industrial supplies and exceptional service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Story
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Building Trust Through Quality Since 1995
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1995, Industrial Supply Co. began as a small family-owned 
                  business with a simple mission: provide businesses with reliable, 
                  high-quality industrial products at fair prices.
                </p>
                <p>
                  Over the years, we've grown from a local supplier to a trusted 
                  partner serving businesses nationwide. Our success is built on 
                  strong relationships, industry expertise, and an unwavering 
                  commitment to customer satisfaction.
                </p>
                <p>
                  Today, we offer a comprehensive range of industrial tools, safety 
                  equipment, abrasives, tapes, pneumatic tools, and consumables. 
                  Our team of experts is dedicated to helping you find the right 
                  products for your specific needs.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-muted rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-card rounded-xl shadow-card">
                    <div className="font-display text-4xl font-bold text-primary mb-2">1995</div>
                    <div className="text-muted-foreground text-sm">Year Founded</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl shadow-card">
                    <div className="font-display text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-muted-foreground text-sm">Team Members</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl shadow-card">
                    <div className="font-display text-4xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-muted-foreground text-sm">Clients Served</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl shadow-card">
                    <div className="font-display text-4xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-muted-foreground text-sm">Orders Fulfilled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most reliable supplier of industrial products, delivering 
                exceptional quality, competitive pricing, and outstanding service 
                that helps businesses operate efficiently and safely.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading industrial supply partner recognized for 
                innovation, sustainability, and an unwavering commitment to 
                customer success across all industries we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Values
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              The Principles That Guide Us
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="card-industrial p-8 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can support your business with quality industrial supplies.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="flex items-center gap-2">
              Contact Us Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
