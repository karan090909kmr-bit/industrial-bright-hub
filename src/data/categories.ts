import { Disc, ScrollText, HardHat, Package, Shirt, Factory, Sparkles, Wind, Paintbrush, Wrench, CircleDot, Shield, Layers, Hand } from 'lucide-react';

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
import tackClothImg from '@/assets/categories/tack-cloth.jpg';
import handProtectionImg from '@/assets/categories/hand-protection.jpg';

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: typeof Disc;
  color: string;
  features: string[];
}

export const categories: Category[] = [
  {
    id: 'abrasives',
    name: 'Abrasives',
    description: 'High-performance grinding and sanding materials for surface preparation and finishing.',
    image: abrasivesImg,
    icon: Disc,
    color: 'bg-red-500/10 text-red-600 border-red-500/20',
    features: ['Aluminium Oxide / Silicon Carbide Sandpapers', 'Sanding Discs (paper, cloth, film backings)', 'Coated Grinding & Finishing Belts', 'Waterproof Sandpaper Sheets (wide grit range up to 7000+)', 'Cloth-backed Sanding Cloths', 'Flap Discs', 'PSA Disc', 'Rolloc Disc'],
  },
  {
    id: 'tapes',
    name: 'Self Adhesive Tapes',
    description: 'Industrial-strength self adhesive tapes for packaging, masking, and bonding applications.',
    image: tapesImg,
    icon: ScrollText,
    color: 'bg-green-500/10 text-green-600 border-green-500/20',
    features: ['BOPP / Packaging Tapes', 'Masking Tapes', 'D/S Polyester Tape', 'D/S Tissue Tape', 'D/S Cloth Tape', 'D/S Foam Tape', 'D/S Red Polyester Tape (Filmic Liner)', 'Floor Marking Tape', 'Aluminium Foil Tape', 'Duct Tape', 'Filament Tape (Mono & Cross)', 'Blue Door Holding Tape', 'Surface Protection Tape', 'Single Side Foam Tape', 'Acrylic Foam Tape (VHB Tape)', 'Paint Adhesion Testing Tape', 'Kapton® / Polyimide Tapes', 'High Temperature Masking Tapes'],
  },
  {
    id: 'workwear',
    name: 'Workwear',
    description: 'Custom-manufactured workwear including lint-free garments, ESD clothing, and corporate uniforms.',
    image: workwearImg,
    icon: Shirt,
    color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    features: ['Lint Free Pant & Shirt', 'Lint Free Apron', 'Lint Free Coverall', 'Lab Coats', 'ESD Coverall (With/Without Hood)', 'ESD Apron (With/Without Hood)', 'Lint Free Pant & Shirt (With Hood)', 'Lint Free Coverall (With Hood)', 'Non Woven Apron', 'Non Woven Coverall', 'Scrub Suit', 'Corporate Uniforms', 'Custom Workwear and Work Uniforms'],
  },
  {
    id: 'polishing-pads',
    name: 'Polishing Pads',
    description: 'High-quality polishing pads for automotive refinishing and surface finishing applications.',
    image: polishingPadsImg,
    icon: CircleDot,
    color: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
    features: ['Orange Foam Pad', 'Natural Wool Buffing Pad'],
  },
  {
    id: 'wipes',
    name: 'Wipes',
    description: 'Industrial wipes for cleaning, surface preparation, and contamination control.',
    image: wipesImg,
    icon: ScrollText,
    color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    features: ['Microfibre Blue Wipe', 'Non-woven White Wipe', 'Lint Free Polyester Wipe', 'Lint Free Microfibre Wipe'],
  },
  {
    id: 'backup-pad',
    name: 'Backup Pad',
    description: 'Professional backup pads and sanding blocks for polishing and surface finishing applications.',
    image: backupPadImg,
    icon: Disc,
    color: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
    features: ['Velcro Backup Pad', 'PSA Backup Pad', 'Sumo Backup Pad', 'Sanding Blocks'],
  },
  {
    id: 'spray-gun',
    name: 'Spray Gun',
    description: 'Professional spray guns for paint application and coating systems.',
    image: sprayGunImg,
    icon: Paintbrush,
    color: 'bg-sky-500/10 text-sky-600 border-sky-500/20',
    features: ['Paint Spray Gun', 'Conventional Gun', 'Paint Cup Gun', 'Air Less Gun'],
  },
  {
    id: 'polishing-compound',
    name: 'Polishing Compound',
    description: 'Professional polishing and rubbing compounds for surface finishing and paint correction.',
    image: polishingCompoundImg,
    icon: Sparkles,
    color: 'bg-pink-500/10 text-pink-600 border-pink-500/20',
    features: ['Heavy Cut / Rubbing Compounds', 'Medium Cut / Polishing Compounds', 'Finishing / Fine Polishing Compounds', 'All-In-One (AIO) or One-Step Compounds'],
  },
  {
    id: 'filters',
    name: 'Filters',
    description: 'Industrial-grade filters for paint booths, HVAC systems, and various filtration applications.',
    image: filtersImg,
    icon: Wind,
    color: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
    features: ['Pocket Filter', 'Pre Filter', 'Oven Filter', 'Nylon Mesh Filter', 'PP Cartridge Filter', 'Bag Filter', 'Paint Booth Ceiling Filter'],
  },
  {
    id: 'paint-booth-chemicals',
    name: 'Paint Booth Chemicals',
    description: 'Specialized chemicals for paint booth maintenance, coating protection, and surface preparation.',
    image: paintBoothChemicalsImg,
    icon: Factory,
    color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    features: ['Paint Denaturant', 'Tacky Coat (Water / Solvent Base)', 'Oven Coat', 'Tacky Peeable'],
  },
  {
    id: 'pneumatic-tools',
    name: 'Pneumatic Tools',
    description: 'Professional pneumatic tools for automotive refinishing, metalworking, and industrial applications.',
    image: pneumaticToolsImg,
    icon: Wrench,
    color: 'bg-slate-500/10 text-slate-600 border-slate-500/20',
    features: ['Angle Polisher', 'Nib Sander / Detail Sander', 'Die Grinder', 'Orbital Sander', 'Pop-Rivet Gun'],
  },
  {
    id: 'fabrics',
    name: 'Industrial Fabrics',
    description: 'High-quality fabric materials and textile solutions for industrial and commercial applications.',
    image: fabricsImg,
    icon: Factory,
    color: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    features: ['Cotton Waste Fabrics', 'Protective Fabrics', 'Woven Fabrics', 'Cotton Fabrics (In Lumps)', 'Polyester Fabrics (In Lumps)', 'PV Fabrics (In Lumps)'],
  },
  {
    id: 'consumables',
    name: 'Industrial Consumables',
    description: 'Essential industrial consumables including lubricants, cleaning supplies, and maintenance materials.',
    image: consumablesImg,
    icon: Package,
    color: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
    features: ['Industrial Lubricants', 'Cleaning Supplies', 'Maintenance Supplies'],
  },
  {
    id: 'safety',
    name: 'Safety Products',
    description: 'Comprehensive personal protective equipment (PPE) and workplace safety solutions certified to EN & CE standards for automobile, construction, and petrochemical industries.',
    image: safetyImg,
    icon: HardHat,
    color: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    features: [
      'Safety Helmets (PN501/PN521 Ratchet Type)',
      'Safety Eyewear (Clear/Smoked Lenses)',
      'Chemical Splash Goggles',
      'FFP1/FFP2 Respirator Masks',
      'Venus V4400 N95 Masks',
      '3-Ply Surgical Masks',
      'Safety Shoes (Low/High Ankle)',
      'Ladies Safety Shoes',
      'Full Body Harness (Karam PN18/PN56)',
      'Work Positioning Lanyards',
      'Welding Face Shields',
      'Toe Guard',
      'Gum Boot'
    ],
  },
  {
    id: 'cleanroom-products',
    name: 'Cleanroom Products',
    description: 'Specialized cleanroom products for contamination control and ESD protection.',
    image: cleanroomProductsImg,
    icon: Shield,
    color: 'bg-violet-500/10 text-violet-600 border-violet-500/20',
    features: ['Sticky Mat', 'ESD Shoes', 'ESD Slippers'],
  },
  {
    id: 'tack-cloth',
    name: 'Tack Cloth',
    description: 'High-quality tack cloths designed to remove dust, dirt, and lint from surfaces before painting, staining, or finishing. Our tack cloths provide superior dust pickup without leaving residue, ensuring a flawless finish on automotive, woodworking, and industrial surfaces.',
    image: tackClothImg,
    icon: Layers,
    color: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
    features: ['Lint Free Tack Rag', 'Cotton Tack Rag'],
  },
  {
    id: 'hand-protection',
    name: 'Hand Protection',
    description: 'Industrial-grade hand protection solutions including safety gloves, cut-resistant gloves, and specialized work gloves certified to EN & CE standards for various applications.',
    image: handProtectionImg,
    icon: Hand,
    color: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
    features: [
      'Double Deep Nitrile Gloves',
      'Full Nitrile Dipped with Canvas Cuff',
      'Black/Orange/Grey Nitrile Coated Gloves',
      'Latex Palm Coated Gloves (Sky Blue, Yellow Green, Red)',
      'Cut Level 5 PU Coated Gloves (Udyogi HPU5)',
      'Cut Level 2 Hand Gloves',
      'Para Aramid Heat Resistant Gloves',
      'Impact Resistance Gloves with Thumb Crotch',
      'ESD Anti-Static Dotted Gloves',
      'ESD Palm Coated Gloves',
      '7/10/13 Gauge Cotton Knitted Gloves',
      'Nylon Polyester Knitted Gloves',
      'PU Top Coated Gloves',
      'Nitrile Examination Gloves'
    ],
  },
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id);
};
