import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye, Users, Award, CheckCircle, ArrowRight, Shield, Cog, Handshake, Star } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Safety by Design',
    description: 'Engineered protection for demanding industrial environments.',
  },
  {
    icon: Cog,
    title: 'Performance Engineered',
    description: 'High-performance products built for real-world industrial use.',
  },
  {
    icon: CheckCircle,
    title: 'Uncompromised Quality',
    description: 'Precision manufacturing with certified, trusted sourcing.',
  },
  {
    icon: Users,
    title: 'Customer-Centric Solutions',
    description: 'Application-driven solutions aligned to operational needs.',
  },
  {
    icon: Handshake,
    title: 'Enduring Partnerships',
    description: 'Long-term relationships built on trust and reliability.',
  },
  {
    icon: Star,
    title: 'Industrial Leadership',
    description: 'TAQIRA - A brand defined by quality, performance, and credibility.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            About Civadale Enterprise
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            A professionally managed organization engaged in manufacturing industrial workwear 
            and trading industrial consumables under our brand TAQIRA.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                About Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Quality You Can Trust
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Civadale Enterprise</strong> is a professionally managed organization 
                  engaged in the manufacturing of industrial workwear and trading of industrial consumables, 
                  serving a wide range of industries with reliable, quality-driven solutions.
                </p>
                <p>
                  Under our brand <strong className="text-primary">TAQIRA</strong>, we focus on delivering products that meet the practical 
                  demands of modern industrial environments—where safety, durability, and performance are critical. 
                  Our offerings are designed to support efficient operations while maintaining compliance with industry standards.
                </p>
                <p>
                  With a customer-centric approach, Civadale Enterprise combines quality manufacturing, 
                  trusted sourcing, and responsive service to ensure consistent value for our clients. 
                  We continuously strive to build long-term relationships by understanding customer needs 
                  and providing dependable solutions tailored to their requirements.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-muted rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-card rounded-xl shadow-card">
                    <div className="font-display text-4xl font-bold text-primary mb-2">300+</div>
                    <div className="text-muted-foreground text-sm">Products Available</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl shadow-card">
                    <div className="font-display text-4xl font-bold text-primary mb-2">8+</div>
                    <div className="text-muted-foreground text-sm">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl shadow-card">
                    <div className="font-display text-4xl font-bold text-primary mb-2">100+</div>
                    <div className="text-muted-foreground text-sm">Happy Clients</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl shadow-card">
                    <div className="font-display text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-muted-foreground text-sm">Support Available</div>
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
                To be the most reliable manufacturer and supplier of industrial workwear and consumables, 
                delivering products that meet the practical demands of modern industrial environments 
                with safety, durability, and performance at the core.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading industrial supply partner recognized for quality manufacturing, 
                trusted sourcing, and responsive service—building long-term relationships through 
                dependable solutions tailored to customer requirements.
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
              What Makes TAQIRA Different
            </h2>
            <p className="text-muted-foreground">
              TAQIRA represents our commitment to quality, trust, and industrial excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            Let's discuss how Civadale Enterprise can support your business with quality industrial supplies and custom manufacturing.
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
