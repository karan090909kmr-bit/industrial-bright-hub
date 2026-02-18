import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { categories } from '@/data/categories';
import { useMemo } from 'react';

const productsLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Industrial Products — PPE, Fire Safety, Abrasives, Tapes & Packaging",
    "description": "Browse 300+ industrial products including fire extinguishers, PPE, abrasives, BOPP tapes, masking tapes, pneumatic tools, and custom workwear from Civadale Enterprise.",
    "url": "https://taqira.com/products",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": categories.length,
      "itemListElement": categories.map((cat, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": cat.name,
        "url": `https://taqira.com/products/${cat.id}`
      }))
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://taqira.com/" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://taqira.com/products" }
    ]
  }
];

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
      <SEOHead
        title="Industrial Products | Fire Safety, PPE, Abrasives, Tapes & Packaging India"
        description="Browse 300+ industrial products: fire extinguishers, PPE, abrasives, BOPP tapes, masking tapes, stretch films, pneumatic tools, packaging & custom workwear. Bulk pricing across India."
        canonical="/products"
        jsonLd={productsLd}
      />
      {/* Hero Section */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Industrial Products Catalog
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of fire safety equipment, PPE, industrial consumables, 
            self-adhesive tapes, packaging materials & custom workwear — manufactured and supplied to meet your exact requirements.
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
              <article
                key={category.id}
                id={category.id}
                className="scroll-mt-24 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card">
                  <div className="grid lg:grid-cols-5 gap-0">
                    <div className="lg:col-span-2 relative">
                      <Link to={`/products/${category.id}`} className="block group">
                        <img
                          src={category.image}
                          alt={`${category.name} — Industrial grade ${category.name.toLowerCase()} products for manufacturing and automotive industries, supplied by Civadale Enterprise India`}
                          loading="lazy"
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
                    
                    <div className="lg:col-span-3 p-6 lg:p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-semibold text-foreground">Products Include:</h3>
                        <Button variant="accent" size="sm" asChild>
                          <Link to={`/products/${category.id}`} className="flex items-center gap-2">
                            View All {category.name}
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Need Custom Manufacturing or Bulk Orders?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We specialize in custom manufacturing of workwear, fire safety equipment, and industrial packaging. 
            Contact us with your specific requirements and we'll deliver to your exact specifications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="default" size="xl" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Get a Bulk Quote
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
