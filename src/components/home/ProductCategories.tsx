import { Link } from 'react-router-dom';

// Import category images
import abrasivesImg from '@/assets/categories/abrasives.jpg';
import tapesImg from '@/assets/categories/tapes.jpg';
import workwearImg from '@/assets/categories/workwear.jpg';
import polishingPadsImg from '@/assets/categories/polishing-pads.jpg';
import wipesImg from '@/assets/categories/wipes.jpg';
import backupPadImg from '@/assets/categories/backup-pad.jpg';
import sprayGunImg from '@/assets/categories/spray-gun.jpg';
import polishingCompoundImg from '@/assets/categories/polishing-compound.jpg';
import filtersImg from '@/assets/categories/filters.jpg';
import paintBoothChemicalsImg from '@/assets/categories/paint-booth-chemicals.jpg';
import pneumaticToolsImg from '@/assets/categories/pneumatic-tools.jpg';
import fabricsImg from '@/assets/categories/fabrics.jpg';
import consumablesImg from '@/assets/categories/consumables.jpg';
import safetyImg from '@/assets/categories/safety.jpg';
import cleanroomProductsImg from '@/assets/categories/cleanroom-products.jpg';

const categories = [
  {
    id: 'abrasives',
    name: 'Abrasives',
    image: abrasivesImg,
  },
  {
    id: 'tapes',
    name: 'Self Adhesive Tapes',
    image: tapesImg,
  },
  {
    id: 'workwear',
    name: 'Workwear',
    image: workwearImg,
  },
  {
    id: 'polishing-pads',
    name: 'Polishing Pads',
    image: polishingPadsImg,
  },
  {
    id: 'wipes',
    name: 'Wipes',
    image: wipesImg,
  },
  {
    id: 'backup-pad',
    name: 'Backup Pad',
    image: backupPadImg,
  },
  {
    id: 'spray-gun',
    name: 'Spray Gun',
    image: sprayGunImg,
  },
  {
    id: 'polishing-compound',
    name: 'Polishing Compound',
    image: polishingCompoundImg,
  },
  {
    id: 'filters',
    name: 'Filters',
    image: filtersImg,
  },
  {
    id: 'paint-booth-chemicals',
    name: 'Paint Booth Chemicals',
    image: paintBoothChemicalsImg,
  },
  {
    id: 'pneumatic-tools',
    name: 'Pneumatic Tools',
    image: pneumaticToolsImg,
  },
  {
    id: 'fabrics',
    name: 'Industrial Fabrics',
    image: fabricsImg,
  },
  {
    id: 'consumables',
    name: 'Industrial Consumables',
    image: consumablesImg,
  },
  {
    id: 'safety',
    name: 'Safety Products',
    image: safetyImg,
  },
  {
    id: 'cleanroom-products',
    name: 'Cleanroom Products',
    image: cleanroomProductsImg,
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
