import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Products', href: '/products' },
    { name: 'Contact Us', href: '/contact' },
  ],
  products: [
    { name: 'Abrasives', href: '/products#abrasives' },
    { name: 'Self Adhesive Tapes', href: '/products#tapes' },
    { name: 'Workwear', href: '/products#workwear' },
    { name: 'Polishing Pads', href: '/products#polishing-pads' },
    { name: 'Wipes', href: '/products#wipes' },
    { name: 'Backup Pad', href: '/products#backup-pad' },
    { name: 'Spray Gun', href: '/products#spray-gun' },
    { name: 'Polishing Compound', href: '/products#polishing-compound' },
    { name: 'Filters', href: '/products#filters' },
    { name: 'Paint Booth Chemicals', href: '/products#paint-booth-chemicals' },
    { name: 'Pneumatic Tools', href: '/products#pneumatic-tools' },
    { name: 'Industrial Fabrics', href: '/products#fabrics' },
    { name: 'Industrial Consumables', href: '/products#consumables' },
    { name: 'Safety Products', href: '/products#safety' },
    { name: 'Cleanroom Products', href: '/products#cleanroom-products' },
    { name: 'Tack Cloth', href: '/products#tack-cloth' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div>
                <span className="font-display font-bold text-2xl">TAQIRA</span>
                <p className="text-primary-foreground/60 text-xs">Quality You Can Trust...</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              <strong>Civadale Enterprise</strong> - Manufacturers & suppliers of industrial workwear, 
              ESD products, abrasives, safety equipment, and industrial consumables.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Patna - 800008<br />
                  Bihar, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="tel:+919752097656"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  +91 97520 97656
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="mailto:info.civadale@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  info.civadale@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Civadale Enterprise. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
