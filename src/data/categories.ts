import { Disc, ScrollText, HardHat, Package, Shirt, Factory, Sparkles, Wind, Paintbrush, Wrench, CircleDot, Shield, Layers, Hand, Box } from 'lucide-react';

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
import safetyHandGlovesImg from '@/assets/categories/safety-hand-gloves.png';
import packagingImg from '@/assets/categories/packaging.jpg';

export interface Product {
  name: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: typeof Disc;
  color: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: 'abrasives',
    name: 'Abrasives',
    description: 'High-performance grinding and sanding materials for surface preparation and finishing.',
    image: abrasivesImg,
    icon: Disc,
    color: 'bg-red-500/10 text-red-600 border-red-500/20',
    products: [
      { name: 'Aluminium Oxide / Silicon Carbide Sandpapers', description: 'Durable abrasive sheets for metal, wood, and composite surfaces with consistent grit distribution.' },
      { name: 'Sanding Discs (paper, cloth, film backings)', description: 'Versatile disc options for orbital and rotary sanders with various backing materials for different applications.' },
      { name: 'Coated Grinding & Finishing Belts', description: 'Heavy-duty belts for aggressive material removal and fine finishing on belt sanders.' },
      { name: 'Waterproof Sandpaper Sheets (wide grit range up to 7000+)', description: 'Wet/dry sandpaper for automotive refinishing and precision polishing with ultra-fine grits.' },
      { name: 'Cloth-backed Sanding Cloths', description: 'Flexible and tear-resistant cloths ideal for contoured surfaces and hand sanding.' },
      { name: 'Flap Discs', description: 'Overlapping abrasive flaps for blending, finishing, and light grinding on angle grinders.' },
      { name: 'PSA Disc', description: 'Pressure-sensitive adhesive discs for quick attachment and removal on flat pad sanders.' },
      { name: 'Rolloc Disc', description: 'Quick-change discs with secure locking mechanism for fast disc replacement during production.' },
    ],
  },
  {
    id: 'tapes',
    name: 'Self Adhesive Tapes',
    description: 'Industrial-strength self adhesive tapes for packaging, masking, and bonding applications.',
    image: tapesImg,
    icon: ScrollText,
    color: 'bg-green-500/10 text-green-600 border-green-500/20',
    products: [
      { name: 'BOPP / Packaging Tapes', description: 'Strong carton sealing tapes with excellent adhesion for shipping and storage.' },
      { name: 'Masking Tapes', description: 'Clean-removal tapes for painting, labeling, and temporary surface protection.' },
      { name: 'D/S Polyester Tape', description: 'Double-sided polyester tape for mounting, splicing, and lamination applications.' },
      { name: 'D/S Tissue Tape', description: 'Economical double-sided tape for lightweight bonding and paper applications.' },
      { name: 'D/S Cloth Tape', description: 'High-strength double-sided cloth tape for carpet installation and heavy-duty bonding.' },
      { name: 'D/S Foam Tape', description: 'Conformable foam tape for gap filling, vibration dampening, and uneven surfaces.' },
      { name: 'D/S Red Polyester Tape (Filmic Liner)', description: 'High-temperature resistant tape for electronics and precision assembly.' },
      { name: 'Floor Marking Tape', description: 'Durable vinyl tape for safety lanes, hazard marking, and warehouse organization.' },
      { name: 'Aluminium Foil Tape', description: 'Heat-resistant tape for HVAC sealing, insulation, and thermal applications.' },
      { name: 'Duct Tape', description: 'Multi-purpose cloth tape with strong adhesive for repairs and general sealing.' },
      { name: 'Filament Tape (Mono & Cross)', description: 'Reinforced strapping tape for bundling, palletizing, and heavy package sealing.' },
      { name: 'Blue Door Holding Tape', description: 'Specialized tape for automotive door edge protection during painting.' },
      { name: 'Surface Protection Tape', description: 'Protective film tape for glass, metal, and finished surfaces during handling.' },
      { name: 'Single Side Foam Tape', description: 'Cushioning tape for sealing, insulation, and vibration absorption.' },
      { name: 'Acrylic Foam Tape (VHB Tape)', description: 'Ultra-high bond tape replacing mechanical fasteners for permanent mounting.' },
      { name: 'Paint Adhesion Testing Tape', description: 'Standardized tape for cross-hatch adhesion tests per ASTM specifications.' },
      { name: 'Kapton® / Polyimide Tapes', description: 'High-temperature resistant tape for electronics, PCB masking, and soldering.' },
      { name: 'High Temperature Masking Tapes', description: 'Heat-resistant masking for powder coating and high-temp paint applications.' },
      { name: 'Anti-Slip/Skid Tape', description: 'High-traction adhesive tape for stairs, ramps, and walkways to prevent slips and falls.' },
      { name: 'Warning / Hazard Tape', description: 'Brightly colored tape for marking hazardous areas and safety zones in workplaces.' },
      { name: 'Butyl Tape', description: 'Waterproof sealing tape for roofing, HVAC, and construction applications.' },
      { name: 'Barricade Tape', description: 'Non-adhesive tape for cordoning off restricted areas and construction sites.' },
      { name: 'Caution Tape', description: 'High-visibility tape for temporary safety barriers and area demarcation.' },
    ],
  },
  {
    id: 'workwear',
    name: 'Workwear',
    description: 'Custom-manufactured workwear including lint-free garments, ESD clothing, and corporate uniforms.',
    image: workwearImg,
    icon: Shirt,
    color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    products: [
      { name: 'Lint Free Pant & Shirt', description: 'Low-particle garments for cleanroom and controlled environments.' },
      { name: 'Lint Free Apron', description: 'Protective apron preventing contamination during assembly and inspection.' },
      { name: 'Lint Free Coverall', description: 'Full-body protection for pharmaceutical and electronics manufacturing.' },
      { name: 'Lab Coats', description: 'Professional laboratory coats for medical, research, and industrial settings.' },
      { name: 'ESD Coverall (With/Without Hood)', description: 'Static-dissipative coveralls protecting sensitive electronics from ESD damage.' },
      { name: 'ESD Apron (With/Without Hood)', description: 'Lightweight ESD protection for workbench and assembly operations.' },
      { name: 'Lint Free Pant & Shirt (With Hood)', description: 'Complete head-to-body coverage for stringent cleanroom requirements.' },
      { name: 'Lint Free Coverall (With Hood)', description: 'Maximum contamination control for ISO-classified environments.' },
      { name: 'Non Woven Apron', description: 'Disposable protective apron for general industrial and food processing use.' },
      { name: 'Non Woven Coverall', description: 'Single-use protective suits for painting, spraying, and dirty operations.' },
      { name: 'Scrub Suit', description: 'Comfortable medical scrubs for healthcare and laboratory personnel.' },
      { name: 'Corporate Uniforms', description: 'Custom-branded professional attire for company identity and safety.' },
      { name: 'Custom Workwear and Work Uniforms', description: 'Tailored industrial clothing designed to your specifications and branding.' },
    ],
  },
  {
    id: 'polishing-pads',
    name: 'Polishing Pads',
    description: 'High-quality polishing pads for automotive refinishing and surface finishing applications.',
    image: polishingPadsImg,
    icon: CircleDot,
    color: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
    products: [
      { name: 'Orange Foam Pad', description: 'Medium-cut foam pad for paint correction and swirl mark removal on vehicles.' },
      { name: 'Natural Wool Buffing Pad', description: 'Aggressive cutting pad for heavy oxidation and scratch removal with natural wool.' },
    ],
  },
  {
    id: 'wipes',
    name: 'Wipes',
    description: 'Industrial wipes for cleaning, surface preparation, and contamination control.',
    image: wipesImg,
    icon: ScrollText,
    color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    products: [
      { name: 'Microfibre Blue Wipe', description: 'Highly absorbent microfiber for streak-free cleaning and polishing.' },
      { name: 'Non-woven White Wipe', description: 'Disposable lint-free wipes for solvent wiping and surface preparation.' },
      { name: 'Lint Free Polyester Wipe', description: 'Ultra-clean polyester wipes for critical cleaning in electronics and optics.' },
      { name: 'Lint Free Microfibre Wipe', description: 'Premium microfiber for final wipe-down before painting or coating.' },
    ],
  },
  {
    id: 'backup-pad',
    name: 'Backup Pad',
    description: 'Professional backup pads and sanding blocks for polishing and surface finishing applications.',
    image: backupPadImg,
    icon: Disc,
    color: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
    products: [
      { name: 'Velcro Backup Pad', description: 'Hook-and-loop interface pad for quick disc changes on DA polishers.' },
      { name: 'PSA Backup Pad', description: 'Adhesive-backed pad interface for pressure-sensitive sanding discs.' },
      { name: 'Sumo Backup Pad', description: 'Heavy-duty industrial backup pad for aggressive sanding applications.' },
      { name: 'Sanding Blocks', description: 'Ergonomic hand blocks for precise manual sanding and contouring.' },
    ],
  },
  {
    id: 'spray-gun',
    name: 'Spray Gun',
    description: 'Professional spray guns for paint application and coating systems.',
    image: sprayGunImg,
    icon: Paintbrush,
    color: 'bg-sky-500/10 text-sky-600 border-sky-500/20',
    products: [
      { name: 'Paint Spray Gun', description: 'HVLP spray gun for efficient paint transfer with minimal overspray.' },
      { name: 'Conventional Gun', description: 'Traditional siphon-feed spray gun for various coating applications.' },
      { name: 'Paint Cup Gun', description: 'Gravity-feed spray gun with integrated cup for quick color changes.' },
      { name: 'Air Less Gun', description: 'High-pressure airless spray gun for thick coatings and large surface coverage.' },
    ],
  },
  {
    id: 'polishing-compound',
    name: 'Polishing Compound',
    description: 'Professional polishing and rubbing compounds for surface finishing and paint correction.',
    image: polishingCompoundImg,
    icon: Sparkles,
    color: 'bg-pink-500/10 text-pink-600 border-pink-500/20',
    products: [
      { name: 'Heavy Cut / Rubbing Compounds', description: 'Aggressive compound for removing deep scratches, oxidation, and orange peel.' },
      { name: 'Medium Cut / Polishing Compounds', description: 'Balanced formula for moderate defect removal while refining the finish.' },
      { name: 'Finishing / Fine Polishing Compounds', description: 'Ultra-fine compound for final gloss enhancement and hologram removal.' },
      { name: 'All-In-One (AIO) or One-Step Compounds', description: 'Multi-purpose compound combining cutting and finishing in single step.' },
    ],
  },
  {
    id: 'filters',
    name: 'Filters',
    description: 'Industrial-grade filters for paint booths, HVAC systems, and various filtration applications.',
    image: filtersImg,
    icon: Wind,
    color: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
    products: [
      { name: 'Pocket Filter', description: 'Multi-pocket air filter for HVAC systems with high dust-holding capacity.' },
      { name: 'Pre Filter', description: 'Primary filtration stage capturing large particles before main filters.' },
      { name: 'Oven Filter', description: 'Heat-resistant filter for curing ovens and high-temperature applications.' },
      { name: 'Nylon Mesh Filter', description: 'Washable and reusable filter for liquid and air filtration.' },
      { name: 'PP Cartridge Filter', description: 'Polypropylene cartridge for water and chemical filtration systems.' },
      { name: 'Bag Filter', description: 'Industrial bag filter for dust collection and liquid processing.' },
      { name: 'Paint Booth Ceiling Filter', description: 'Intake filter providing clean air flow in spray booth applications.' },
    ],
  },
  {
    id: 'paint-booth-chemicals',
    name: 'Paint Booth Chemicals',
    description: 'Specialized chemicals for paint booth maintenance, coating protection, and surface preparation.',
    image: paintBoothChemicalsImg,
    icon: Factory,
    color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    products: [
      { name: 'Paint Denaturant', description: 'Water treatment chemical that detackifies overspray for easy removal.' },
      { name: 'Tacky Coat (Water / Solvent Base)', description: 'Protective coating applied to booth walls to capture overspray particles.' },
      { name: 'Oven Coat', description: 'Heat-resistant protective coating for curing oven interiors.' },
      { name: 'Tacky Peeable', description: 'Peelable protective film for booth surfaces enabling easy cleanup.' },
    ],
  },
  {
    id: 'pneumatic-tools',
    name: 'Pneumatic Tools',
    description: 'Professional pneumatic tools for automotive refinishing, metalworking, and industrial applications.',
    image: pneumaticToolsImg,
    icon: Wrench,
    color: 'bg-slate-500/10 text-slate-600 border-slate-500/20',
    products: [
      { name: 'Angle Polisher', description: 'Rotary polisher for aggressive paint correction and buffing operations.' },
      { name: 'Nib Sander / Detail Sander', description: 'Precision sander for removing dust nibs and spot repairs in paint.' },
      { name: 'Die Grinder', description: 'Compact high-speed tool for grinding, deburring, and porting applications.' },
      { name: 'Orbital Sander', description: 'Random orbit action sander for swirl-free surface preparation.' },
      { name: 'Pop-Rivet Gun', description: 'Pneumatic riveting tool for fast and secure blind rivet installation.' },
    ],
  },
  {
    id: 'fabrics',
    name: 'Industrial Fabrics',
    description: 'High-quality fabric materials and textile solutions for industrial and commercial applications.',
    image: fabricsImg,
    icon: Factory,
    color: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    products: [
      { name: 'Cotton Waste Fabrics', description: 'Recycled cotton material for industrial wiping and cleaning applications.' },
      { name: 'Protective Fabrics', description: 'Specialized textiles for manufacturing safety garments and covers.' },
      { name: 'Woven Fabrics', description: 'Durable woven materials for industrial filtration and reinforcement.' },
      { name: 'Cotton Fabrics (In Lumps)', description: 'Bulk cotton material for wiping cloths and absorbent applications.' },
      { name: 'Polyester Fabrics (In Lumps)', description: 'Synthetic fabric material for lint-free cleaning products.' },
      { name: 'PV Fabrics (In Lumps)', description: 'Polyester-viscose blend fabrics for versatile industrial uses.' },
    ],
  },
  {
    id: 'consumables',
    name: 'Industrial Consumables',
    description: 'Essential industrial consumables including lubricants, cleaning supplies, and maintenance materials.',
    image: consumablesImg,
    icon: Package,
    color: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
    products: [
      { name: 'Industrial Lubricants', description: 'High-performance oils and greases for machinery and equipment maintenance.' },
      { name: 'Cleaning Supplies', description: 'Professional cleaning chemicals and tools for industrial environments.' },
      { name: 'Maintenance Supplies', description: 'Essential consumables for equipment upkeep and facility maintenance.' },
    ],
  },
  {
    id: 'safety',
    name: 'Safety Products',
    description: 'Comprehensive personal protective equipment (PPE) and workplace safety solutions certified to EN & CE standards for automobile, construction, and petrochemical industries.',
    image: safetyImg,
    icon: HardHat,
    color: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    products: [
      { name: 'Safety Helmets (PN501/PN521 Ratchet Type)', description: 'Industrial hard hats with ratchet adjustment for secure comfortable fit.' },
      { name: 'Safety Eyewear (Clear/Smoked Lenses)', description: 'Impact-resistant glasses protecting against debris, dust, and UV rays.' },
      { name: 'Chemical Splash Goggles', description: 'Sealed goggles for protection against liquid chemicals and splashes.' },
      { name: 'FFP1/FFP2 Respirator Masks', description: 'Certified dust masks for protection against fine particles and aerosols.' },
      { name: 'Venus V4400 N95 Masks', description: 'NIOSH-approved N95 respirators for airborne particle protection.' },
      { name: '3-Ply Surgical Masks', description: 'Disposable face masks for basic respiratory and splash protection.' },
      { name: 'Safety Shoes (Low/High Ankle)', description: 'Steel-toe footwear with slip-resistant soles for workplace safety.' },
      { name: 'Ladies Safety Shoes', description: 'Ergonomically designed safety footwear specifically for women.' },
      { name: 'Full Body Harness (Karam PN18/PN56)', description: 'Fall protection harness for working at heights with multiple attachment points.' },
      { name: 'Work Positioning Lanyards', description: 'Adjustable lanyards for hands-free work positioning at elevation.' },
      { name: 'Welding Face Shields', description: 'Full-face protection against sparks, spatter, and welding radiation.' },
      { name: 'Toe Guard', description: 'Protective covers adding toe protection to regular footwear.' },
      { name: 'Gum Boot', description: 'Waterproof rubber boots for wet and chemical environments.' },
    ],
  },
  {
    id: 'cleanroom-products',
    name: 'Cleanroom Products',
    description: 'Specialized cleanroom products for contamination control and ESD protection.',
    image: cleanroomProductsImg,
    icon: Shield,
    color: 'bg-violet-500/10 text-violet-600 border-violet-500/20',
    products: [
      { name: 'Sticky Mat', description: 'Adhesive floor mats capturing dust and particles from footwear at entry points.' },
      { name: 'ESD Shoes', description: 'Static-dissipative footwear for electronics manufacturing environments.' },
      { name: 'ESD Slippers', description: 'Lightweight ESD footwear for cleanroom and laboratory use.' },
    ],
  },
  {
    id: 'tack-cloth',
    name: 'Tack Cloth',
    description: 'High-quality tack cloths designed to remove dust, dirt, and lint from surfaces before painting, staining, or finishing. Our tack cloths provide superior dust pickup without leaving residue, ensuring a flawless finish on automotive, woodworking, and industrial surfaces.',
    image: tackClothImg,
    icon: Layers,
    color: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
    products: [
      { name: 'Lint Free Tack Rag', description: 'Non-woven tack cloth that captures fine dust without leaving residue.' },
      { name: 'Cotton Tack Rag', description: 'Traditional cotton gauze tack cloth with tacky resin for dust pickup.' },
    ],
  },
  {
    id: 'safety-hand-gloves',
    name: 'Safety Hand Gloves',
    description: 'Industrial-grade hand protection gloves for various applications including mechanical handling, chemical resistance, and precision work. Certified to EN & CE standards for maximum safety.',
    image: safetyHandGlovesImg,
    icon: Hand,
    color: 'bg-lime-500/10 text-lime-600 border-lime-500/20',
    products: [
      { name: 'PU Coated Gloves', description: 'Lightweight polyurethane-coated gloves for precision handling and assembly work.' },
      { name: 'Nitrile Coated Gloves', description: 'Oil-resistant gloves with excellent grip for mechanical and automotive applications.' },
      { name: 'Latex Coated Gloves', description: 'Natural rubber coated gloves providing flexibility and abrasion resistance.' },
      { name: 'Cut Resistant Gloves', description: 'High-performance gloves with HPPE lining for protection against cuts and slashes.' },
      { name: 'Nitrile Chemical Gloves', description: 'Excellent resistance to oils, fuels, and many solvents with superior puncture resistance.' },
      { name: 'ESD Gloves', description: 'Anti-static gloves for electronics manufacturing and sensitive component handling.' },
      { name: 'Cotton Knitted Gloves', description: 'Breathable cotton gloves for light-duty handling and general purpose use.' },
      { name: 'Leather Work Gloves', description: 'Durable leather gloves for heavy-duty industrial and construction work.' },
      { name: 'Kevlar® Cut-Resistant Gloves', description: 'Aramid fiber gloves offering superior cut and heat protection for metal handling.' },
      { name: 'Disposable Gloves', description: 'Single-use nitrile, latex, or vinyl gloves for hygiene-sensitive applications.' },
      { name: 'Surgical Gloves', description: 'Sterile medical-grade gloves for surgical procedures and healthcare settings.' },
      { name: 'Cotton Dotted Gloves', description: 'Cotton gloves with PVC dots for enhanced grip and handling of light materials.' },
      { name: 'Polyester Dotted Gloves', description: 'Polyester gloves with dotted palm for improved grip and dexterity in assembly work.' },
      { name: 'Nylon Dotted Gloves', description: 'Lightweight nylon gloves with PVC dots for precision handling and general purpose use.' },
    ],
  },
  {
    id: 'packaging',
    name: 'Packaging',
    description: 'Complete range of industrial packaging materials for shipping, storage, and product protection applications.',
    image: packagingImg,
    icon: Box,
    color: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    products: [
      { name: 'Corrugated Boxes', description: 'Durable cardboard boxes in various sizes for shipping and storage.' },
      { name: 'Bubble Wrap', description: 'Protective cushioning material for fragile items during transit.' },
      { name: 'Stretch Film', description: 'Stretchable plastic film for pallet wrapping and load stabilization.' },
      { name: 'Shrink Film', description: 'Heat-shrinkable film for product bundling and tamper-evident packaging.' },
      { name: 'Air Pillows', description: 'Inflatable cushioning for void fill and product protection in cartons.' },
      { name: 'Foam Sheets & Rolls', description: 'Soft foam material for surface protection and cushioning.' },
      { name: 'Strapping & Banding', description: 'PP and steel strapping for securing heavy loads and pallets.' },
      { name: 'Edge Protectors', description: 'Cardboard or plastic corner guards for protecting shipment edges.' },
      { name: 'Packing Paper', description: 'Kraft paper and newsprint for wrapping and void fill applications.' },
      { name: 'Poly Bags', description: 'Plastic bags in various sizes for product packaging and protection.' },
    ],
  },
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id);
};
