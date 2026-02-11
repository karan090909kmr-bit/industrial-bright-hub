import { useParams, Link, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { getCategoryById, categories } from '@/data/categories';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

const ProductDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = getCategoryById(categoryId || '');

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  const currentIndex = categories.findIndex(c => c.id === category.id);
  const prevCategory = currentIndex > 0 ? categories[currentIndex - 1] : null;
  const nextCategory = currentIndex < categories.length - 1 ? categories[currentIndex + 1] : null;

  const categoryLd = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": category.name,
    "description": category.description,
    "url": `https://civadale.com/products/${category.id}`,
    "brand": { "@type": "Brand", "name": "Civadale Enterprise" },
    "hasVariant": category.products.map(p => ({
      "@type": "Product",
      "name": p.name,
      "description": p.description,
      "brand": { "@type": "Brand", "name": "Civadale Enterprise" },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": { "@type": "Organization", "name": "Civadale Enterprise" }
      }
    }))
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://civadale.com/" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://civadale.com/products" },
      { "@type": "ListItem", "position": 3, "name": category.name, "item": `https://civadale.com/products/${category.id}` }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title={`${category.name} | Industrial ${category.name} Supplier India`}
        description={category.description.slice(0, 155)}
        canonical={`/products/${category.id}`}
        jsonLd={[categoryLd, breadcrumbLd]}
      />
      {/* Hero Section */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={`${category.name} - Industrial grade ${category.name.toLowerCase()} from Civadale Enterprise India`}
            loading="eager"
            className="w-full h-full object-cover scale-105 blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        </div>

        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-12 lg:py-20">
          <nav aria-label="Breadcrumb">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors mb-8 w-fit group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Products</span>
            </Link>
          </nav>

          <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-6 border border-white/20 backdrop-blur-sm`}>
            <category.icon className="h-7 w-7" />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 max-w-3xl leading-tight">
            {category.name}
          </h1>

          <p className="text-white/90 text-lg sm:text-xl max-w-2xl leading-relaxed font-light">
            {category.description}
          </p>
        </div>
      </section>

      {/* Products List */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-8">
                Available Products
              </h2>
              <ul className="space-y-3">
                {category.products.map((product, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/contact?product=${encodeURIComponent(product.name)}`}
                      className="flex items-start gap-4 px-5 py-4 bg-background rounded-xl border border-border/60 hover:border-primary/40 hover:shadow-sm transition-all group"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-foreground text-sm sm:text-base font-medium group-hover:text-primary transition-colors block">
                          {product.name}
                        </span>
                        <p className="text-muted-foreground text-xs sm:text-sm mt-1 line-clamp-2">
                          {product.description}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:sticky lg:top-24 h-fit">
              <div className="bg-muted rounded-2xl p-8 lg:p-10">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Need a Quote?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get in touch with our team to discuss your requirements for {category.name.toLowerCase()}. 
                  We offer competitive pricing and custom solutions.
                </p>
                <div className="space-y-3">
                  <Button variant="default" size="lg" className="w-full" asChild>
                    <Link to={`/contact?product=${encodeURIComponent(category.name)}`} className="flex items-center justify-center gap-2">
                      Request Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <a href="tel:+919752097656">Call: +91 97520 97656</a>
                  </Button>
                </div>
              </div>

              <div className="mt-6 rounded-2xl overflow-hidden border border-border">
                <img
                  src={category.image}
                  alt={`${category.name} products from Civadale Enterprise`}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Navigation to other categories */}
      <nav className="py-8 bg-muted border-t border-border" aria-label="Category navigation">
        <div className="container-custom mx-auto">
          <div className="flex justify-between items-center">
            {prevCategory ? (
              <Link
                to={`/products/${prevCategory.id}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="text-sm">Previous</span>
                  <p className="font-semibold text-foreground">{prevCategory.name}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            {nextCategory ? (
              <Link
                to={`/products/${nextCategory.id}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-right group"
              >
                <div>
                  <span className="text-sm">Next</span>
                  <p className="font-semibold text-foreground">{nextCategory.name}</p>
                </div>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </nav>
    </Layout>
  );
};

export default ProductDetail;
