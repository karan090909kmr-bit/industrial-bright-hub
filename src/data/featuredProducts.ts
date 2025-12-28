import cottonTackRag from '@/assets/featured/cotton-tack-rag.png';
import lintFreeMicrofiberCloth from '@/assets/featured/lint-free-microfiber-cloth.jpg';
import buffingOrangeFoamPad from '@/assets/featured/buffing-orange-foam-pad.jpg';
import scallopDisc from '@/assets/featured/scallop-disc.png';
import sandingPaper from '@/assets/featured/sanding-paper.jpg';
import paperMaskingTape from '@/assets/featured/paper-masking-tape.jpg';
import boppTape from '@/assets/featured/bopp-tape.png';
import labCoat from '@/assets/featured/lab-coat.png';
import esdCoverallApron from '@/assets/featured/esd-coverall-apron.png';
import lintFreeCoverallApron from '@/assets/featured/lint-free-coverall-apron.png';

export interface FeaturedProduct {
  id: string;
  name: string;
  image: string;
}

export const featuredProducts: FeaturedProduct[] = [
  {
    id: 'cotton-tack-rag',
    name: 'Cotton Tack Rag',
    image: cottonTackRag,
  },
  {
    id: 'lint-free-microfiber-cloth',
    name: 'Lint Free Microfiber Cloth',
    image: lintFreeMicrofiberCloth,
  },
  {
    id: 'buffing-orange-foam-pad',
    name: 'Buffing Orange Foam Pad',
    image: buffingOrangeFoamPad,
  },
  {
    id: 'scallop-disc',
    name: 'Scallop Disc',
    image: scallopDisc,
  },
  {
    id: 'sanding-paper',
    name: 'Sanding Paper',
    image: sandingPaper,
  },
  {
    id: 'paper-masking-tape',
    name: 'Paper Masking Tape',
    image: paperMaskingTape,
  },
  {
    id: 'bopp-tape',
    name: 'BOPP Tape',
    image: boppTape,
  },
  {
    id: 'lab-coat',
    name: 'Lab Coat',
    image: labCoat,
  },
  {
    id: 'esd-coverall-apron',
    name: 'ESD Coverall Apron',
    image: esdCoverallApron,
  },
  {
    id: 'lint-free-coverall-apron',
    name: 'Lint Free Coverall Apron',
    image: lintFreeCoverallApron,
  },
];
