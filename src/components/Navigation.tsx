import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

interface DropdownItem {
  label: string;
  id?: string;
  path?: string;
}

interface NavLink {
  label: string;
  isPage: boolean;
  id?: string;
  path?: string;
  dropdown?: DropdownItem[];
}

const Navigation = ({ isDark, toggleTheme }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks: NavLink[] = [
    { label: 'Home', isPage: false, id: 'hero' },
    {
      label: 'Pages',
      isPage: false,
      dropdown: [
        { label: 'About Us', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Team', id: 'careers' },
        { label: 'Why Choose Us', id: 'industries' },
      ],
    },
    { label: 'Blog', isPage: true, path: '/blog' },
    { label: 'Shop', isPage: true, path: '/shop' },
    { label: 'Contact', isPage: false, id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-background/90 backdrop-blur-xl border-b border-border'
        : 'bg-transparent'
        }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/rooman-logo.png"
              alt="Rooman Technologies"
              className="h-10 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 outline-none">
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="bg-card/95 backdrop-blur-xl border border-border min-w-[160px]"
                    sideOffset={8}
                  >
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem
                        key={item.label}
                        onClick={() => {
                          if (item.path) {
                            navigate(item.path);
                          } else if (item.id) {
                            scrollToSection(item.id);
                          }
                        }}
                        className="text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer text-sm"
                      >
                        {item.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : link.isPage && link.path ? (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-300 ${location.pathname === link.path
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {link.label}
                </Link>
              ) : link.id ? (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id!)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </button>
              ) : null
            )}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-muted border border-border transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-blue-accent" />
              ) : (
                <Moon className="w-5 h-5 text-blue-accent" />
              )}
            </button>

            {/* CTA Button - Desktop */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden lg:block px-5 py-2.5 text-sm font-medium text-white bg-rooman-orange border border-rooman-orange rounded-lg hover:bg-rooman-red hover:border-rooman-red transition-all duration-300"
            >
              Get in touch
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border transition-all duration-300 ${isMobileMenuOpen
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="space-y-2">
                <span className="block text-sm font-medium text-muted-foreground">
                  {link.label}
                </span>
                <div className="pl-4 space-y-2">
                  {link.dropdown.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        if (item.path) {
                          navigate(item.path);
                          setIsMobileMenuOpen(false);
                        } else if (item.id) {
                          scrollToSection(item.id);
                        }
                      }}
                      className="block text-sm text-muted-foreground/70 hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : link.isPage && link.path ? (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium transition-colors ${location.pathname === link.path
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {link.label}
              </Link>
            ) : link.id ? (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.id!)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ) : null
          )}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full mt-4 px-5 py-3 text-sm font-medium text-white bg-rooman-orange rounded-lg hover:bg-rooman-red transition-colors"
          >
            Get in touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
