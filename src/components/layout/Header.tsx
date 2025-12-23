import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const navigation = [{
  name: 'Home',
  href: '/'
}, {
  name: 'About Us',
  href: '/about'
}, {
  name: 'Products',
  href: '/products'
}, {
  name: 'Contact',
  href: '/contact'
}];
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  return <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end gap-6 py-2 text-sm">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@industrialsupply.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@industrialsupply.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-xl text-foreground"></span>
              <span className="font-display font-bold text-xl text-primary">SPARS</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors hover:text-primary relative py-2 ${location.pathname === item.href ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent' : 'text-muted-foreground'}`}>
                {item.name}
              </Link>)}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button type="button" className="lg:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.href ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'}`} onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>)}
              <div className="pt-4 px-4">
                <Button variant="accent" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>}
      </nav>
    </header>;
}