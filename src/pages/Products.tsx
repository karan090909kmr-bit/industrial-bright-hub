import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { categories } from '@/data/categories';
import { useMemo } from 'react';

const Products = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return categories;
    
    return categories.filter(category => {
      const nameMatch = category.name.toLowerCase().includes(searchQuery);
      const descMatch = category.description.toLowerCase().includes(searchQuery);
      const productMatch = category.products.some(p => p.name.toLowerCase().includes(searchQuery) || p.description.toLowerCase().includes(searchQuery));
      return nameMatch || descMatch || productMatch;
    });
  }, [searchQuery]);
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
          {searchQuery && (
            <div className="mb-8">
              <p className="text-muted-foreground">
                Showing results for "<span className="text-foreground font-medium">{searchQuery}</span>"
                {filteredCategories.length === 0 && ' - No products found'}
              </p>
            </div>
          )}
          <div className="space-y-16">
            {filteredCategories.map((category, index) => (
              <div
                key={category.id}
                id={category.id}
                className="scroll-mt-24 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Category Image */}
                    <div className="lg:col-span-2 relative">
                      <Link to={`/products/${category.id}`} className="block group">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                          <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-4 border backdrop-blur-sm`}>
                            <category.icon className="h-7 w-7" />
                          </div>
                          <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
                            {category.name}
                          </h2>
                          <p className="text-white/80 text-sm lg:text-base line-clamp-2">
                            {category.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                    
                    {/* Features List */}
                    <div className="lg:col-span-3 p-6 lg:p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-semibold text-foreground">Products Include:</h3>
                        <Button variant="accent" size="sm" asChild>
                          <Link to={`/products/${category.id}`} className="flex items-center gap-2">
                            View All
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {category.products.slice(0, 8).map((product, idx) => (
                          <Link
                            key={idx}
                            to={`/contact?product=${encodeURIComponent(product.name)}`}
                            className="flex items-center gap-3 hover:text-primary transition-colors group"
                          >
                            <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                            <span className="text-muted-foreground group-hover:text-primary transition-colors underline-offset-2 hover:underline text-sm">{product.name}</span>
                          </Link>
                        ))}
                        {category.products.length > 8 && (
                          <Link
                            to={`/products/${category.id}`}
                            className="flex items-center gap-3 text-primary font-medium"
                          >
                            <span>+{category.products.length - 8} more products</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        )}
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
              <a href="tel:+919752097656">Call: +91 97520 97656</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
