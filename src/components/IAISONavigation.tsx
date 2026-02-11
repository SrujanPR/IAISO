import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Building2, ExternalLink, Sun, Moon } from 'lucide-react';

const roomanAISolutionsNav = {
  label: 'Rooman AI Solutions',
  href: '/rooman-ai-solutions',
  items: [
    { label: 'AI Platform', href: '#', description: 'Enterprise AI/ML platform' },
    { label: 'Cloud Manager', href: '#', description: 'Multi-cloud management' },
    { label: 'SecureShield', href: '#', description: 'AI-powered security' },
    { label: 'DataFlow', href: '#', description: 'Real-time analytics' },
    { label: 'DevOps Suite', href: '#', description: 'CI/CD automation' },
    { label: 'About Rooman', href: '/rooman', description: 'Visit parent company', isExternal: false },
  ],
};

interface IAISONavigationProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const IAISONavigation = ({ isDark = true, toggleTheme }: IAISONavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);
  const [isCertificationsMenuOpen, setIsCertificationsMenuOpen] = useState(false);
  const [isLearningMenuOpen, setIsLearningMenuOpen] = useState(false);
  const location = useLocation();
  const certTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const solutionsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const learningTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSolutionsMenuOpen(false);
    setIsCertificationsMenuOpen(false);
    setIsLearningMenuOpen(false);
    if (certTimeoutRef.current) clearTimeout(certTimeoutRef.current);
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    if (learningTimeoutRef.current) clearTimeout(learningTimeoutRef.current);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-[10vw]">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-rooman-orange flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-lg font-semibold">IAISO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Certifications Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (certTimeoutRef.current) clearTimeout(certTimeoutRef.current);
                setIsCertificationsMenuOpen(true);
              }}
              onMouseLeave={() => {
                certTimeoutRef.current = setTimeout(() => {
                  setIsCertificationsMenuOpen(false);
                }, 300);
              }}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive('/certifications')
                    ? 'text-rooman-orange bg-rooman-orange/10'
                    : 'text-gray-text hover:text-foreground hover:bg-white/5'
                }`}
              >
                Certifications
                <ChevronDown className={`w-4 h-4 transition-transform ${isCertificationsMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCertificationsMenuOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-64 bg-navy-800 border border-border rounded-xl shadow-xl overflow-hidden">
                    <div className="p-3 space-y-1">
                      <Link to="/system-certifications" className="block p-3 rounded-lg hover:bg-white/5 transition-colors">
                        <p className="font-medium text-sm">System Certification</p>
                      </Link>
                      <Link to="/organizational-certifications" className="block p-3 rounded-lg hover:bg-white/5 transition-colors">
                        <p className="font-medium text-sm">Organizational Certification</p>
                      </Link>
                      <Link to="/professional-certifications" className="block p-3 rounded-lg hover:bg-white/5 transition-colors">
                        <p className="font-medium text-sm">Professional Certification</p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Learning Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (learningTimeoutRef.current) clearTimeout(learningTimeoutRef.current);
                setIsLearningMenuOpen(true);
              }}
              onMouseLeave={() => {
                learningTimeoutRef.current = setTimeout(() => {
                  setIsLearningMenuOpen(false);
                }, 300);
              }}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive('/learning')
                    ? 'text-rooman-orange bg-rooman-orange/10'
                    : 'text-gray-text hover:text-foreground hover:bg-white/5'
                }`}
              >
                Learning
                <ChevronDown className={`w-4 h-4 transition-transform ${isLearningMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLearningMenuOpen && (
                <div className="fixed top-[64px] left-0 right-0 pt-2 z-50">
                  <div className="w-screen bg-navy-800 border-y border-border shadow-xl overflow-hidden p-6">
                    <div className="grid grid-cols-5 gap-4">
                      {/* Engineering */}
                      <div>
                        <h3 className="text-rooman-orange font-semibold text-sm mb-3 uppercase tracking-wider">Engineering</h3>
                        <div className="space-y-1">
                          <Link to="/learning/engineering/software" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Software Engineers</Link>
                          <Link to="/learning/engineering/mechanical" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Mechanical Engineers</Link>
                          <Link to="/learning/engineering/electrical" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Electrical Engineers</Link>
                          <Link to="/learning/engineering/civil" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Civil Engineers</Link>
                          <Link to="/learning/engineering/electronics" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Electronics Engineers</Link>
                          <Link to="/learning/engineering/biomedical" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Biomedical Engineers</Link>
                          <Link to="/learning/engineering/industrial" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Industrial Engineers</Link>
                          <Link to="/learning/engineering/chemical" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Chemical Engineers</Link>
                          <Link to="/learning/engineering/quality" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Quality Engineers</Link>
                          <Link to="/learning/engineering/safety-maintenance" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Safety and Maintenance Engineers</Link>
                        </div>
                      </div>

                      {/* Science */}
                      <div>
                        <h3 className="text-rooman-orange font-semibold text-sm mb-3 uppercase tracking-wider">Science</h3>
                        <div className="space-y-1">
                          <Link to="/learning/science/physics" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Physics Scientists</Link>
                          <Link to="/learning/science/chemical" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Chemical Scientists</Link>
                          <Link to="/learning/science/life-science" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Life Science Scientists</Link>
                          <Link to="/learning/science/environmental" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Environmental Scientists</Link>
                          <Link to="/learning/science/mathematical" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Mathematical Scientists</Link>
                          <Link to="/learning/science/earth-science" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Earth Science Scientists</Link>
                          <Link to="/learning/science/data-scientists" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Data Scientists</Link>
                          <Link to="/learning/science/statistics" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Statistics Scientists</Link>
                          <Link to="/learning/science/research" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Research Scientists</Link>
                          <Link to="/learning/science/laboratory-quality" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Laboratory Quality Scientists</Link>
                        </div>
                      </div>

                      {/* Medicine */}
                      <div>
                        <h3 className="text-rooman-orange font-semibold text-sm mb-3 uppercase tracking-wider">Medicine</h3>
                        <div className="space-y-1">
                          <Link to="/learning/medicine/medical" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Medical Professionals</Link>
                          <Link to="/learning/medicine/dental" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Dental Professionals</Link>
                          <Link to="/learning/medicine/nursing" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Nursing Professionals</Link>
                          <Link to="/learning/medicine/medical-research" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Medical Researchers</Link>
                          <Link to="/learning/medicine/public-health" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Public Health Professionals</Link>
                          <Link to="/learning/medicine/healthcare-admin" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Healthcare Administrators</Link>
                          <Link to="/learning/medicine/biomedical" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Biomedical Professionals</Link>
                          <Link to="/learning/medicine/surgical" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Surgical Professionals</Link>
                          <Link to="/learning/medicine/allied-health" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Allied Health Professionals</Link>
                          <Link to="/learning/medicine/pharmaceutical" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Pharmaceutical Scientists</Link>
                        </div>
                      </div>

                      {/* Arts Stream */}
                      <div>
                        <h3 className="text-rooman-orange font-semibold text-sm mb-3 uppercase tracking-wider">Arts Stream</h3>
                        <div className="space-y-1">
                          <Link to="/learning/arts/literature" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Literature Scholars</Link>
                          <Link to="/learning/arts/history" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for History Scholars</Link>
                          <Link to="/learning/arts/visual-arts" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Visual Arts Professionals</Link>
                          <Link to="/learning/arts/media" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Media Scholars</Link>
                          <Link to="/learning/arts/philosophy" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Philosophy Scholars</Link>
                          <Link to="/learning/arts/language" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Language Scholars</Link>
                          <Link to="/learning/arts/performing-arts" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Performing Arts Professionals</Link>
                          <Link to="/learning/arts/social-science" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Social Science Scholars</Link>
                          <Link to="/learning/arts/education" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Education Professionals</Link>
                          <Link to="/learning/arts/psychology" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Psychology Professionals</Link>
                        </div>
                      </div>

                      {/* Management Stream */}
                      <div>
                        <h3 className="text-rooman-orange font-semibold text-sm mb-3 uppercase tracking-wider">Management Stream</h3>
                        <div className="space-y-1">
                          <Link to="/learning/management/management" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Management Professionals</Link>
                          <Link to="/learning/management/business-leaders" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Business Leaders</Link>
                          <Link to="/learning/management/finance" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Finance Professionals</Link>
                          <Link to="/learning/management/operations" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Operations Managers</Link>
                          <Link to="/learning/management/economists" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Economists</Link>
                          <Link to="/learning/management/marketing" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Marketing Professionals</Link>
                          <Link to="/learning/management/hr" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for HR Professionals</Link>
                          <Link to="/learning/management/international-business" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for International Business Professionals</Link>
                          <Link to="/learning/management/project-managers" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Project Managers</Link>
                          <Link to="/learning/management/entrepreneurs" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">AI for Entrepreneurs</Link>
                        </div>
                        <div className="mt-6">
                          <h3 className="text-rooman-orange font-semibold text-sm mb-3 uppercase tracking-wider">School Stream</h3>
                          <div className="space-y-1">
                            <Link to="/learning/school/foundation" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">Foundation Stage</Link>
                            <Link to="/learning/school/application" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">Application Stage</Link>
                            <Link to="/learning/school/advancement" className="block py-1 text-sm text-gray-text hover:text-white transition-colors">Advancement Stage</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Regular Nav Items */}
            <Link to="/membership" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/membership') ? 'text-rooman-orange bg-rooman-orange/10' : 'text-gray-text hover:text-foreground hover:bg-white/5'}`}>Membership</Link>
            <Link to="/events" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/events') ? 'text-rooman-orange bg-rooman-orange/10' : 'text-gray-text hover:text-foreground hover:bg-white/5'}`}>Events</Link>

            {/* Rooman AI Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => {
                if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
                setIsSolutionsMenuOpen(true);
              }}
              onMouseLeave={() => {
                solutionsTimeoutRef.current = setTimeout(() => {
                  setIsSolutionsMenuOpen(false);
                }, 300);
              }}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(roomanAISolutionsNav.href)
                    ? 'text-rooman-orange bg-rooman-orange/10'
                    : 'text-gray-text hover:text-foreground hover:bg-white/5'
                }`}
              >
                {roomanAISolutionsNav.label}
                <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isSolutionsMenuOpen && (
                <div className="absolute top-full right-0 pt-2">
                  <div className="w-72 bg-navy-800 border border-border rounded-xl shadow-xl overflow-hidden">
                    <div className="p-3">
                      <Link
                        to={roomanAISolutionsNav.href}
                        className="block p-3 rounded-lg hover:bg-white/5 transition-colors mb-2 border-b border-border"
                      >
                        <p className="font-medium text-sm text-rooman-orange">Overview</p>
                        <p className="text-xs text-gray-text">All Rooman AI Solutions</p>
                      </Link>
                      <div className="space-y-1">
                        {roomanAISolutionsNav.items.map((item, index) => (
                          <Link
                            key={index}
                            to={item.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                          >
                            <div>
                              <p className={`font-medium text-sm ${item.label === 'About Rooman' ? 'text-rooman-orange' : ''}`}>
                                {item.label}
                              </p>
                              <p className="text-xs text-gray-text">{item.description}</p>
                            </div>
                            {item.label === 'About Rooman' && (
                              <ExternalLink className="w-4 h-4 text-gray-text group-hover:text-rooman-orange" />
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-muted border border-border transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-rooman-orange" />
              ) : (
                <Moon className="w-5 h-5 text-rooman-orange" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
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
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-navy-900 border-b border-border">
          <div className="px-6 py-4 space-y-2">
            {/* Certifications Mobile */}
            <div className="space-y-2">
              <button
                onClick={() => setIsCertificationsMenuOpen(!isCertificationsMenuOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive('/certifications')
                    ? 'text-rooman-orange bg-rooman-orange/10'
                    : 'text-gray-text hover:text-foreground hover:bg-white/5'
                }`}
              >
                Certifications
                <ChevronDown className={`w-4 h-4 transition-transform ${isCertificationsMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCertificationsMenuOpen && (
                <div className="pl-4 space-y-1">
                  <Link to="/system-certifications" className="block px-4 py-2 text-sm text-gray-text hover:text-rooman-orange transition-colors">System Certification</Link>
                  <Link to="/organizational-certifications" className="block px-4 py-2 text-sm text-gray-text hover:text-rooman-orange transition-colors">Organizational Certification</Link>
                  <Link to="/professional-certifications" className="block px-4 py-2 text-sm text-gray-text hover:text-rooman-orange transition-colors">Professional Certification</Link>
                </div>
              )}
            </div>

            {/* Learning Mobile */}
            <div className="space-y-2">
              <button
                onClick={() => setIsLearningMenuOpen(!isLearningMenuOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive('/learning')
                    ? 'text-rooman-orange bg-rooman-orange/10'
                    : 'text-gray-text hover:text-foreground hover:bg-white/5'
                }`}
              >
                Learning
                <ChevronDown className={`w-4 h-4 transition-transform ${isLearningMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLearningMenuOpen && (
                <div className="pl-4 space-y-3">
                  <div>
                    <p className="px-4 py-1 text-xs text-rooman-orange uppercase tracking-wider">Engineering</p>
                    <Link to="/learning/engineering/software" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Software Engineers</Link>
                    <Link to="/learning/engineering/mechanical" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Mechanical Engineers</Link>
                    <Link to="/learning/engineering/electrical" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Electrical Engineers</Link>
                  </div>
                  <div>
                    <p className="px-4 py-1 text-xs text-rooman-orange uppercase tracking-wider">Science</p>
                    <Link to="/learning/science/physics" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Physics Scientists</Link>
                    <Link to="/learning/science/chemical" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Chemical Scientists</Link>
                    <Link to="/learning/science/life-science" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Life Science Scientists</Link>
                    <Link to="/learning/science/environmental" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Environmental Scientists</Link>
                    <Link to="/learning/science/mathematical" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Mathematical Scientists</Link>
                    <Link to="/learning/science/earth-science" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Earth Science Scientists</Link>
                    <Link to="/learning/science/data-scientists" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Data Scientists</Link>
                    <Link to="/learning/science/statistics" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Statistics Scientists</Link>
                    <Link to="/learning/science/research" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Research Scientists</Link>
                    <Link to="/learning/science/laboratory-quality" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Laboratory Quality Scientists</Link>
                  </div>
                  <div>
                    <p className="px-4 py-1 text-xs text-rooman-orange uppercase tracking-wider">Arts</p>
                    <Link to="/learning/arts/literature" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Literature Scholars</Link>
                    <Link to="/learning/arts/history" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for History Scholars</Link>
                    <Link to="/learning/arts/visual-arts" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Visual Arts Professionals</Link>
                    <Link to="/learning/arts/media" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Media Scholars</Link>
                    <Link to="/learning/arts/philosophy" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Philosophy Scholars</Link>
                    <Link to="/learning/arts/language" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Language Scholars</Link>
                    <Link to="/learning/arts/performing-arts" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Performing Arts Professionals</Link>
                    <Link to="/learning/arts/social-science" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Social Science Scholars</Link>
                    <Link to="/learning/arts/education" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Education Professionals</Link>
                    <Link to="/learning/arts/psychology" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Psychology Professionals</Link>
                  </div>
                  <div>
                    <p className="px-4 py-1 text-xs text-rooman-orange uppercase tracking-wider">Medicine</p>
                    <Link to="/learning/medicine/medical" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Medical Professionals</Link>
                    <Link to="/learning/medicine/dental" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Dental Professionals</Link>
                    <Link to="/learning/medicine/nursing" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Nursing Professionals</Link>
                    <Link to="/learning/medicine/medical-research" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Medical Researchers</Link>
                    <Link to="/learning/medicine/public-health" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Public Health Professionals</Link>
                    <Link to="/learning/medicine/healthcare-admin" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Healthcare Administrators</Link>
                    <Link to="/learning/medicine/biomedical" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Biomedical Professionals</Link>
                    <Link to="/learning/medicine/surgical" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Surgical Professionals</Link>
                    <Link to="/learning/medicine/allied-health" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Allied Health Professionals</Link>
                    <Link to="/learning/medicine/pharmaceutical" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Pharmaceutical Scientists</Link>
                  </div>
                  <div>
                    <p className="px-4 py-1 text-xs text-rooman-orange uppercase tracking-wider">Management</p>
                    <Link to="/learning/management/management" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Management Professionals</Link>
                    <Link to="/learning/management/business-leaders" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Business Leaders</Link>
                    <Link to="/learning/management/finance" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Finance Professionals</Link>
                    <Link to="/learning/management/operations" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Operations Managers</Link>
                    <Link to="/learning/management/economists" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Economists</Link>
                    <Link to="/learning/management/marketing" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Marketing Professionals</Link>
                    <Link to="/learning/management/hr" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for HR Professionals</Link>
                    <Link to="/learning/management/international-business" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for International Business Professionals</Link>
                    <Link to="/learning/management/project-managers" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Project Managers</Link>
                    <Link to="/learning/management/entrepreneurs" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">AI for Entrepreneurs</Link>
                  </div>
                  <div>
                    <p className="px-4 py-1 text-xs text-rooman-orange uppercase tracking-wider">School</p>
                    <Link to="/learning/school/foundation" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">Foundation Stage</Link>
                    <Link to="/learning/school/application" className="block px-4 py-1 text-sm text-gray-text hover:text-rooman-orange transition-colors">Application Stage</Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/membership" className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive('/membership') ? 'text-rooman-orange bg-rooman-orange/10' : 'text-gray-text hover:text-foreground hover:bg-white/5'}`}>Membership</Link>
            <Link to="/events" className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive('/events') ? 'text-rooman-orange bg-rooman-orange/10' : 'text-gray-text hover:text-foreground hover:bg-white/5'}`}>Events</Link>
            <Link
              to={roomanAISolutionsNav.href}
              className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive(roomanAISolutionsNav.href)
                  ? 'text-rooman-orange bg-rooman-orange/10'
                  : 'text-gray-text hover:text-foreground hover:bg-white/5'
              }`}
            >
              {roomanAISolutionsNav.label}
            </Link>
            <div className="pt-4 border-t border-border space-y-2">
              <p className="px-4 text-xs text-gray-text uppercase tracking-wider">Products</p>
              {roomanAISolutionsNav.items.slice(0, -1).map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-text hover:text-rooman-orange transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Link
                to="/rooman"
                className="block px-4 py-3 text-sm font-medium text-rooman-orange rounded-lg hover:bg-rooman-orange/10 transition-colors"
              >
                About Rooman
              </Link>
            </div>
            <div className="pt-4 flex flex-col gap-2">
              <Link
                to="/"
                className="w-full py-3 bg-rooman-orange text-white text-center font-medium rounded-lg"
              >
                IAISO Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default IAISONavigation;
