import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Gallery', href: '/gallery' },
    { name: 'Commissions', href: '/commissions' },
    { name: 'Artists', href: '/artists' },
    { name: 'Process', href: '/process' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Palette className="h-8 w-8 text-accent group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -inset-1 bg-gradient-to-r from-paint-orange to-paint-blue rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Painted Juttay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                  "hover:bg-accent/10 hover:text-accent",
                  "relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5",
                  "after:bg-gradient-to-r after:from-paint-orange after:to-paint-blue",
                  "after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                  isActive(item.href)
                    ? "text-accent after:scale-x-100"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              className="ml-4 bg-gradient-to-r from-accent to-paint-blue hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
            >
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-md text-base font-medium transition-colors",
                    "hover:bg-accent/10 hover:text-accent",
                    isActive(item.href)
                      ? "text-accent bg-accent/5"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full bg-gradient-to-r from-accent to-paint-blue">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;