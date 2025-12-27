import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'abrasives',
    name: 'Abrasives',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
  },
  {
    id: 'tapes',
    name: 'Self Adhesive Tapes',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    id: 'workwear',
    name: 'Workwear',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
  },
  {
    id: 'polishing-pads',
    name: 'Polishing Pads',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop',
  },
  {
    id: 'wipes',
    name: 'Wipes',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=400&fit=crop',
  },
  {
    id: 'backup-pad',
    name: 'Backup Pad',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop',
  },
  {
    id: 'spray-gun',
    name: 'Spray Gun',
    image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=600&h=400&fit=crop',
  },
  {
    id: 'polishing-compound',
    name: 'Polishing Compound',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop',
  },
  {
    id: 'filters',
    name: 'Filters',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
  },
  {
    id: 'paint-booth-chemicals',
    name: 'Paint Booth Chemicals',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
  },
  {
    id: 'pneumatic-tools',
    name: 'Pneumatic Tools',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop',
  },
  {
    id: 'fabrics',
    name: 'Industrial Fabrics',
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop',
  },
  {
    id: 'consumables',
    name: 'Industrial Consumables',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
  },
  {
    id: 'safety',
    name: 'Safety Products',
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&h=400&fit=crop',
  },
  {
    id: 'cleanroom-products',
    name: 'Cleanroom Products',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop',
  },
];

export function ProductCategories() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Products
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Industrial Consumables & Custom Workwear
          </h2>
          <p className="text-muted-foreground text-lg">
            From industrial consumables to custom-manufactured workwear, we provide everything your 
            business needs with reliable quality and competitive pricing.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products#${category.id}`}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 drop-shadow-lg">
                  {category.name}
                </h3>
                
                <span className="inline-block px-6 py-2 border-2 border-white text-white text-sm font-medium transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  View Products
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
