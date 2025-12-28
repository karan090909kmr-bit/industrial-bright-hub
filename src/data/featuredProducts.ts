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
  description: string;
  specifications: string[];
  applications: string[];
}

export const featuredProducts: FeaturedProduct[] = [
  {
    id: 'lint-free-coverall-apron',
    name: 'Lint Free Coverall & Apron',
    image: lintFreeCoverallApron,
    description: 'Low-linting coveralls specifically designed for cleanroom and controlled environments. Made from tightly woven synthetic fabric that minimizes particle shedding while providing comfort during extended wear.',
    specifications: [
      'Material: 100% Polyester filament',
      'Particle Shedding: Very low',
      'Sizes: S - 4XL',
      'Closure: Snap or zipper front',
      'Cleanroom Class: ISO 5-8 compatible',
    ],
    applications: [
      'Cleanroom operations',
      'Pharmaceutical production',
      'Food processing',
      'Precision manufacturing',
    ],
  },
  {
    id: 'esd-coverall-apron',
    name: 'ESD Coverall & Apron',
    image: esdCoverallApron,
    description: 'Electrostatic Discharge (ESD) protective coveralls and aprons designed for electronics manufacturing and handling. Features conductive carbon fiber grid for effective static dissipation and protection of sensitive components.',
    specifications: [
      'Material: ESD polyester with carbon grid',
      'Surface Resistance: 10⁵ - 10¹¹ Ω',
      'Sizes: S - 4XL',
      'Style: Full coverall / Apron options',
      'Certification: IEC 61340-5-1 compliant',
    ],
    applications: [
      'Electronics manufacturing',
      'PCB assembly',
      'Semiconductor handling',
      'ESD-sensitive environments',
    ],
  },
  {
    id: 'lab-coat',
    name: 'Lab Coat',
    image: labCoat,
    description: 'Professional laboratory coat designed for cleanroom, medical, and industrial environments. Features comfortable fit, durable construction, and multiple pockets for practical use in professional settings.',
    specifications: [
      'Material: 65% Polyester, 35% Cotton',
      'Sizes: S, M, L, XL, XXL',
      'Style: Button front closure',
      'Pockets: 3 patch pockets',
      'Color: White, Navy Blue',
    ],
    applications: [
      'Laboratory work',
      'Medical facilities',
      'Cleanroom environments',
      'Industrial inspection',
    ],
  },
  {
    id: 'paper-masking-tape',
    name: 'Paper Masking Tape',
    image: paperMaskingTape,
    description: 'High-quality crepe paper masking tape with pressure-sensitive rubber adhesive. Designed for sharp paint lines and clean removal without residue. Heat resistant for automotive and industrial painting applications.',
    specifications: [
      'Width: 18mm, 24mm, 36mm, 48mm',
      'Length: 50m per roll',
      'Backing: Crepe paper',
      'Adhesive: Natural rubber',
      'Temperature Resistance: Up to 80°C',
    ],
    applications: [
      'Automotive painting',
      'General masking',
      'Edge definition',
      'Surface protection',
    ],
  },
  {
    id: 'bopp-tape',
    name: 'BOPP Tape',
    image: boppTape,
    description: 'Biaxially Oriented Polypropylene (BOPP) packaging tape with strong acrylic adhesive for reliable sealing and packaging applications. Available in clear and brown variants for various packaging needs.',
    specifications: [
      'Width: 48mm, 72mm',
      'Length: 66m, 100m, 200m',
      'Thickness: 40-50 microns',
      'Adhesive: Acrylic water-based',
      'Colors: Clear, Brown, Custom',
    ],
    applications: [
      'Carton sealing',
      'Packaging & shipping',
      'Bundling',
      'General purpose sealing',
    ],
  },
  {
    id: 'cotton-tack-rag',
    name: 'Cotton Tack Rag',
    image: cottonTackRag,
    description: 'Premium quality cotton tack cloth designed to effectively remove dust, dirt, and lint from surfaces before painting, staining, or finishing. Our tack rags are impregnated with a special tacky resin that captures even the finest particles without leaving residue.',
    specifications: [
      'Material: 100% Cotton Gauze',
      'Size: 18" x 36" (standard)',
      'Resin Type: Non-drying tacky resin',
      'Color: Natural tan',
      'Shelf Life: 12 months sealed',
    ],
    applications: [
      'Automotive refinishing',
      'Wood finishing & furniture',
      'Metal surface preparation',
      'Industrial painting',
    ],
  },
  {
    id: 'lint-free-microfiber-cloth',
    name: 'Lint Free Microfiber Cloth',
    image: lintFreeMicrofiberCloth,
    description: 'High-performance lint-free microfiber wipes engineered for critical cleaning applications. These cloths provide superior particle pickup and absorption while leaving surfaces completely free of fibers and residues.',
    specifications: [
      'Material: Ultra-fine microfiber polyester',
      'Size: 9" x 9" / 12" x 12" available',
      'Weight: 200-300 GSM',
      'Edge Type: Laser-cut sealed edges',
      'Cleanroom Class: ISO Class 5-7',
    ],
    applications: [
      'Cleanroom environments',
      'Electronics manufacturing',
      'Optical lens cleaning',
      'Laboratory surfaces',
    ],
  },
  {
    id: 'buffing-orange-foam-pad',
    name: 'Buffing Orange Foam Pad',
    image: buffingOrangeFoamPad,
    description: 'Professional-grade orange foam buffing pads designed for medium-cut polishing and swirl mark removal. The open-cell foam structure provides excellent heat dissipation and consistent polishing results.',
    specifications: [
      'Diameter: 3", 5", 6" options',
      'Foam Type: Medium-cut open-cell',
      'Backing: Hook & loop attachment',
      'Thickness: 1" - 1.5"',
      'Color: Orange (medium cut)',
    ],
    applications: [
      'Automotive paint correction',
      'Oxidation removal',
      'Swirl mark elimination',
      'Pre-wax polishing',
    ],
  },
  {
    id: 'scallop-disc',
    name: 'Scallop Disc',
    image: scallopDisc,
    description: 'Precision-manufactured scallop sanding discs featuring a unique scalloped edge design for improved flexibility and reduced edge marks. Available in multiple grit ranges for various finishing stages.',
    specifications: [
      'Diameter: 2", 3", 5", 6"',
      'Grit Range: P800 - P5000',
      'Backing: Pressure-sensitive adhesive',
      'Material: Aluminum oxide / Silicon carbide',
      'Pattern: Scalloped edge design',
    ],
    applications: [
      'Spot repair finishing',
      'Clear coat sanding',
      'Blend area preparation',
      'Final finishing stages',
    ],
  },
  {
    id: 'sanding-paper',
    name: 'Sanding Paper',
    image: sandingPaper,
    description: 'Premium wet/dry sanding paper sheets manufactured with high-quality silicon carbide abrasive for consistent cutting performance. Waterproof latex backing allows for both wet and dry sanding applications.',
    specifications: [
      'Size: 9" x 11" standard sheets',
      'Grit Range: P80 - P3000',
      'Abrasive: Silicon carbide',
      'Backing: Waterproof C-weight paper',
      'Application: Wet or dry use',
    ],
    applications: [
      'Automotive body work',
      'Wood finishing',
      'Metal surface prep',
      'Paint correction',
    ],
  },
];
