import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Home, Package, Phone, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEOHead
        title="Page Not Found | TAQIRA by Civadale Enterprise"
        description="The page you're looking for doesn't exist. Browse our industrial safety, PPE, packaging and pneumatic tool products."
        canonical="/404"
      />
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-8xl font-bold text-primary mb-4">404</p>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            Sorry, the page <code className="bg-muted px-2 py-0.5 rounded text-sm">{location.pathname}</code> doesn't exist. It may have been moved or removed.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <Button variant="default" size="lg" className="gap-2" asChild>
              <Link to="/"><Home className="w-4 h-4" /> Home</Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link to="/products"><Package className="w-4 h-4" /> Products</Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link to="/contact"><Phone className="w-4 h-4" /> Contact Us</Link>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>Looking for something specific? Browse our <Link to="/products" className="text-primary underline hover:text-primary/80">product categories</Link> or <Link to="/contact" className="text-primary underline hover:text-primary/80">get in touch</Link> with our team.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
