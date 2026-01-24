import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Products', href: '/products' },
    { name: 'Contact Us', href: '/contact' },
  ],
  products: [
    { name: 'Abrasives', href: '/products' },
    { name: 'Self Adhesive Tapes', href: '/products' },
    { name: 'Workwear', href: '/products' },
    { name: 'Polishing Pads', href: '/products' },
    { name: 'Wipes', href: '/products' },
    { name: 'Backup Pad', href: '/products' },
    { name: 'Spray Gun', href: '/products' },
    { name: 'Polishing Compound', href: '/products' },
    { name: 'Filters', href: '/products' },
    { name: 'Paint Booth Chemicals', href: '/products' },
    { name: 'Pneumatic Tools', href: '/products' },
    { name: 'Industrial Fabrics', href: '/products' },
    { name: 'Industrial Consumables', href: '/products' },
    { name: 'Safety Products', href: '/products' },
    { name: 'Cleanroom Products', href: '/products' },
    { name: 'Tack Cloth', href: '/products' },
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
              <p className="text-primary-foreground/60 text-xs mt-1">Serving Industrial Buyers Across India</p>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              <strong>Civadale Enterprise</strong> - 8+ years supplying ESD workwear, 
              abrasives, safety equipment & industrial consumables to 100+ businesses.
            </p>
            <div className="bg-accent/20 rounded-lg p-3 mb-4">
              <p className="text-accent text-sm font-semibold">Need Bulk Pricing?</p>
              <a href="/contact" className="text-primary-foreground text-sm hover:text-accent transition-colors">
                Get a quote in 24 hours →
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
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
          </div>

          {/* Products - 2 columns */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 text-primary-foreground">Products</h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {footerLinks.products.slice(0, 8).map((link) => (
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
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 text-primary-foreground">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm leading-relaxed">
                  Patna - 800008<br />
                  Bihar, India
                </span>
              </li>
              <li>
                <a
                  href="tel:+919752097656"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors group"
                >
                  <Phone className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm font-semibold group-hover:underline">+91 97520 97656</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info.civadale@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors group"
                >
                  <Mail className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm group-hover:underline">info.civadale@gmail.com</span>
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
        <div className="mt-10 pt-8 border-t border-primary-foreground/15">
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
