import { useParams, Link, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { getCategoryById, categories } from '@/data/categories';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

const ProductDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = getCategoryById(categoryId || '');

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  // Find adjacent categories for navigation
  const currentIndex = categories.findIndex(c => c.id === category.id);
  const prevCategory = currentIndex > 0 ? categories[currentIndex - 1] : null;
  const nextCategory = currentIndex < categories.length - 1 ? categories[currentIndex + 1] : null;

  return (
    <Layout>
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
            <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center mb-4 border backdrop-blur-sm`}>
              <category.icon className="h-8 w-8" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {category.name}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Products */}
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-8">
                Available Products
              </h2>
              <div className="space-y-3">
                {category.products.map((product, idx) => (
                  <Link
                    key={idx}
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
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="lg:sticky lg:top-24 h-fit">
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

              {/* Category Image Preview */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-border">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to other categories */}
      <section className="py-8 bg-muted border-t border-border">
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
      </section>
    </Layout>
  );
};

export default ProductDetail;
