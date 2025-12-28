import { featuredProducts } from '@/data/featuredProducts';

export const ProductDescriptions = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Product Details
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about our featured industrial products
          </p>
        </div>

        <div className="space-y-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              id={product.id}
              className="scroll-mt-24 bg-card rounded-xl shadow-lg border border-border overflow-hidden"
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="lg:w-1/3 aspect-square lg:aspect-auto">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-2/3 p-6 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Product description content will be added here.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
