import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import taqiraLogo from '@/assets/taqira-logo-final.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Top bar with contact, search, and logo */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 gap-4">
            {/* Logo - Left */}
            <Link to="/" className="flex items-center shrink-0">
              <img 
                src={taqiraLogo} 
                alt="Taqira Logo" 
                className="h-12 sm:h-14 w-auto rounded-lg shadow-md"
              />
            </Link>

            {/* Search Bar - Center */}
            <form onSubmit={handleSearch} className="hidden sm:flex flex-1 max-w-xl mx-4 lg:mx-8">
              <Input
                type="text"
                placeholder="Search products, categories, materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-11 rounded-r-none border-r-0 bg-white text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
              />
              <Button 
                type="submit" 
                className="h-11 rounded-l-none bg-accent hover:bg-accent/90 text-accent-foreground px-5"
              >
                <Search className="h-5 w-5" />
              </Button>
            </form>

            {/* Contact Details - Right */}
            <div className="hidden lg:flex items-center gap-6 text-sm shrink-0">
              <a href="tel:+919752097656" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-medium">+91 97520 97656</span>
              </a>
              <a href="mailto:info.civadale@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                <span className="font-medium">info.civadale@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="sm:hidden pb-3">
            <div className="flex">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-10 rounded-r-none border-r-0 bg-white text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
              />
              <Button 
                type="submit" 
                className="h-10 rounded-l-none bg-accent hover:bg-accent/90 text-accent-foreground px-4"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom mx-auto px-4 sm:px-6 lg:px-8 bg-card">
        <div className="flex items-center justify-between h-14 lg:h-16 relative">
          {/* Empty spacer for left side on desktop */}
          <div className="hidden lg:block w-32" />

          {/* Desktop navigation - centered */}
          <div className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-primary relative py-2 ${
                  location.pathname === item.href
                    ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:rounded-full'
                    : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Right side */}
          <div className="hidden lg:flex items-center">
            <Button variant="accent" size="lg" asChild className="font-bold shadow-md">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button variant="accent" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
