import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: 'About', href: '#about', isScroll: true },
      { label: 'Contact', href: '#contact', isScroll: true },
    ],
    Resources: [
      { label: 'Blog', href: '/blog', isScroll: false },
      { label: 'Shop', href: '/shop', isScroll: false },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-navy-900 border-t border-border z-50">
      <div className="w-full px-6 lg:px-[10vw] py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link to="/">
              <img
                src="/rooman-logo.png"
                alt="Rooman Technologies"
                className="h-12 w-auto object-contain mb-4"
              />
            </Link>
            <p className="text-gray-text text-sm leading-relaxed max-w-sm mb-6">
              Innovate. Integrate. Empower. We build AI systems, cloud infrastructure,
              and product engineering solutions for scale.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-secondary border border-border rounded-lg hover:bg-rooman-orange/10 hover:border-rooman-orange/40 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-gray-text hover:text-rooman-orange" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading text-sm font-semibold mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.isScroll ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-sm text-gray-text hover:text-rooman-orange transition-colors"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-gray-text hover:text-rooman-orange transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-text">
            © {currentYear} Rooman Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-text hover:text-rooman-orange transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-text hover:text-blue-accent transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-gray-text hover:text-blue-accent transition-colors"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
