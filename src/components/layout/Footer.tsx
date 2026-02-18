import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Products', href: '/products' },
    { name: 'Contact Us', href: '/contact' },
  ],
  products: [
    { name: 'Abrasives', href: '/products/abrasives' },
    { name: 'Self Adhesive Tapes', href: '/products/tapes' },
    { name: 'Workwear (TAQIRA)', href: '/products/workwear' },
    { name: 'Fire Safety', href: '/products/fire-safety' },
    { name: 'Safety & PPE', href: '/products/safety' },
    { name: 'Pneumatic Tools', href: '/products/pneumatic-tools' },
    { name: 'Polishing Pads', href: '/products/polishing-pads' },
    { name: 'Packaging', href: '/products/packaging' },
    { name: 'Wipes', href: '/products/wipes' },
    { name: 'Cleanroom Products', href: '/products/cleanroom-products' },
    { name: 'Safety Hand Gloves', href: '/products/safety-hand-gloves' },
    { name: 'Filters', href: '/products/filters' },
    { name: 'Spray Guns', href: '/products/spray-gun' },
    { name: 'Tack Cloth', href: '/products/tack-cloth' },
    { name: 'Industrial Fabrics', href: '/products/fabrics' },
    { name: 'Consumables', href: '/products/consumables' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <span className="font-display font-bold text-2xl">TAQIRA</span>
              <p className="text-primary-foreground/60 text-xs mt-1">by Civadale Enterprise · Serving Industrial Buyers Across India</p>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              8+ years supplying fire extinguishers, PPE, pneumatic tools, 
              abrasives, tapes, packaging materials & ESD workwear to 100+ businesses across India.
            </p>
            <div className="bg-accent/20 rounded-lg p-3 mb-4">
              <p className="text-accent text-sm font-semibold">Need Bulk Pricing?</p>
              <Link to="/contact" className="text-primary-foreground text-sm hover:text-accent transition-colors">
                Get a quote in 24 hours →
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Company navigation">
            <h4 className="font-display font-semibold text-lg mb-5 text-primary-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/75 hover:text-accent transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <nav aria-label="Product categories navigation">
            <h4 className="font-display font-semibold text-lg mb-5 text-primary-foreground">Products</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/75 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 text-primary-foreground">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <address className="text-primary-foreground/80 text-sm leading-relaxed not-italic">
                  Nai Sadak Chowk, Patna City,<br />
                  Patna - 800008, Bihar, India
                </address>
              </li>
              <li>
                <a
                  href="tel:+919752097656"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors group"
                >
                  <Phone className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                  <span className="text-sm font-semibold group-hover:underline">+91 97520 97656</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info.civadale@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors group"
                >
                  <Mail className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                  <span className="text-sm group-hover:underline">info.civadale@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                <span className="text-primary-foreground/80 text-sm">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-primary-foreground/15">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Civadale Enterprise. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-primary-foreground/60 text-sm">
              <span>TAQIRA — Quality Industrial Products & Workwear</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
