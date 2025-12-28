import CottonTackRag from '@/assets/products/Cotton_Tack_Rag.png';
import LintFreeMicrofiberCloth from '@/assets/products/Lint_Free_Microfiber_Cloth.jpg';
import BuffingOrangeFoamPad from '@/assets/products/Buffing_Orange_Foam_Pad.jpg';
import ScallopDisc from '@/assets/products/Scallop_Disc.png';
import SandingPaper from '@/assets/products/Sanding_Paper.jpg';
import PaperMaskingTape from '@/assets/products/Paper_Masking_Tape.jpg';
import BOPPTape from '@/assets/products/BOPP_TAPE.png';
import LabCoat from '@/assets/products/Lab_Coat.png';
import ESDCoverallApron from '@/assets/products/ESD_Coverall_Apron.png';
import LintFreeCoverallApron from '@/assets/products/Lint_Free_Coverall_Apron.png';

export interface FeaturedProduct {
  id: string;
  name: string;
  image: string;
}

export const featuredProducts: FeaturedProduct[] = [
  {
    id: 'cotton-tack-rag',
    name: 'Cotton Tack Rag',
    image: CottonTackRag,
  },
  {
    id: 'lint-free-microfiber-cloth',
    name: 'Lint Free Microfiber Cloth',
    image: LintFreeMicrofiberCloth,
  },
  {
    id: 'buffing-orange-foam-pad',
    name: 'Buffing Orange Foam Pad',
    image: BuffingOrangeFoamPad,
  },
  {
    id: 'scallop-disc',
    name: 'Scallop Disc',
    image: ScallopDisc,
  },
  {
    id: 'sanding-paper',
    name: 'Sanding Paper',
    image: SandingPaper,
  },
  {
    id: 'paper-masking-tape',
    name: 'Paper Masking Tape',
    image: PaperMaskingTape,
  },
  {
    id: 'bopp-tape',
    name: 'BOPP Tape',
    image: BOPPTape,
  },
  {
    id: 'lab-coat',
    name: 'Lab Coat',
    image: LabCoat,
  },
  {
    id: 'esd-coverall-apron',
    name: 'ESD Coverall Apron',
    image: ESDCoverallApron,
  },
  {
    id: 'lint-free-coverall-apron',
    name: 'Lint Free Coverall Apron',
    image: LintFreeCoverallApron,
  },
];
