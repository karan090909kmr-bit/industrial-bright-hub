import { Link } from 'react-router-dom';

// Import product images
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
import tackClothImg from '@/assets/categories/tack-cloth.jpg';
import handProtectionImg from '@/assets/categories/hand-protection.jpg';

interface ProductItem {
  id: string;
  name: string;
  image: string;
}

const productItems: ProductItem[] = [
  { id: 'abrasives', name: 'Abrasives & Sanding Materials', image: abrasivesImg },
  { id: 'tapes', name: 'Self Adhesive Tapes', image: tapesImg },
  { id: 'workwear', name: 'Workwear & Uniforms', image: workwearImg },
  { id: 'polishing-pads', name: 'Polishing Pads', image: polishingPadsImg },
  { id: 'wipes', name: 'Industrial Wipes', image: wipesImg },
  { id: 'backup-pad', name: 'Backup Pads', image: backupPadImg },
  { id: 'spray-gun', name: 'Spray Guns', image: sprayGunImg },
  { id: 'polishing-compound', name: 'Polishing Compounds', image: polishingCompoundImg },
  { id: 'filters', name: 'Industrial Filters', image: filtersImg },
  { id: 'paint-booth-chemicals', name: 'Paint Booth Chemicals', image: paintBoothChemicalsImg },
  { id: 'pneumatic-tools', name: 'Pneumatic Tools', image: pneumaticToolsImg },
  { id: 'fabrics', name: 'Industrial Fabrics', image: fabricsImg },
  { id: 'consumables', name: 'Industrial Consumables', image: consumablesImg },
  { id: 'safety', name: 'Safety Products & PPE', image: safetyImg },
  { id: 'cleanroom-products', name: 'Cleanroom Products', image: cleanroomProductsImg },
  { id: 'tack-cloth', name: 'Tack Cloths', image: tackClothImg },
  { id: 'hand-protection', name: 'Hand Protection', image: handProtectionImg },
];

export const ProductsIncludeSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Products Include
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive range of industrial supplies for automotive, manufacturing, and cleanroom applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {productItems.map((item) => (
            <Link
              key={item.id}
              to={`/products/${item.id}`}
              className="group flex items-center gap-4 p-3 bg-background rounded-lg border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  loading="lazy"
                />
              </div>
              <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
