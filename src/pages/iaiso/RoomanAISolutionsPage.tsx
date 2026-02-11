import { useState } from 'react';
import { Link } from 'react-router-dom';
import BackgroundElements from '@/components/BackgroundElements';
import { 
  Cpu, 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Code2, 
  ArrowRight, 
  ChevronDown,
  ExternalLink,
  Building2,
  CheckCircle2
} from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Rooman AI Platform',
    description: 'Enterprise-grade AI platform for building, deploying, and managing machine learning models at scale.',
    icon: Brain,
    features: ['AutoML', 'Model Monitoring', 'MLOps Pipeline', 'API Integration'],
    href: '#',
  },
  {
    id: 2,
    name: 'Cloud Manager Pro',
    description: 'Unified multi-cloud management solution for AWS, Azure, and GCP with cost optimization.',
    icon: Cloud,
    features: ['Cost Analytics', 'Auto-scaling', 'Security Scanning', 'Compliance Reports'],
    href: '#',
  },
  {
    id: 3,
    name: 'SecureShield AI',
    description: 'AI-powered cybersecurity platform for threat detection and automated response.',
    icon: Shield,
    features: ['Threat Intelligence', 'Behavioral Analytics', 'Auto-remediation', 'SIEM Integration'],
    href: '#',
  },
  {
    id: 4,
    name: 'DataFlow Engine',
    description: 'Real-time data processing and analytics platform for big data workloads.',
    icon: Database,
    features: ['Stream Processing', 'Data Lake', 'ETL Automation', 'Visual Analytics'],
    href: '#',
  },
  {
    id: 5,
    name: 'DevOps Suite',
    description: 'Complete CI/CD and infrastructure automation platform for modern development teams.',
    icon: Code2,
    features: ['Pipeline Orchestration', 'GitOps', 'Container Management', 'Observability'],
    href: '#',
  },
  {
    id: 6,
    name: 'Edge Compute Hub',
    description: 'Distributed edge computing platform for IoT and low-latency applications.',
    icon: Cpu,
    features: ['Edge Deployment', 'Device Management', 'Offline Capability', '5G Ready'],
    href: '#',
  },
];

const companyLinks = [
  { label: 'About Rooman', href: '/rooman', description: 'Visit parent company', isExternal: false },
  { label: 'Case Studies', href: '#', external: false, description: 'Success stories from our clients' },
  { label: 'Documentation', href: '#', external: false, description: 'Technical docs and API references' },
  { label: 'Support Portal', href: '#', external: false, description: 'Get help from our team' },
];

const RoomanAISolutionsPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <BackgroundElements />
      <section className="relative w-full min-h-screen bg-background text-foreground px-6 lg:px-[10vw] py-24">
        {/* Header with Menu */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-rooman-orange mb-4">
                IAISO - Indian AI & IT Solutions Organization
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
                Rooman AI Solutions
              </h1>
              <p className="text-lg text-gray-text max-w-2xl">
                Enterprise-grade AI and cloud solutions powered by Rooman Technologies. 
                Transform your business with cutting-edge technology.
              </p>
            </div>
            
            {/* Menu Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                onBlur={() => setTimeout(() => setMenuOpen(false), 200)}
                className="flex items-center gap-2 px-6 py-3 bg-rooman-orange text-white font-medium rounded-lg hover:bg-rooman-orange/90 transition-colors"
              >
                Menu
                <ChevronDown className={`w-4 h-4 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {menuOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-navy-800 border border-border rounded-xl shadow-xl overflow-hidden z-50">
                  <div className="p-4 border-b border-border">
                    <p className="text-xs font-medium text-rooman-orange uppercase tracking-wider mb-1">Company</p>
                    <Link 
                      to="/rooman"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-rooman-orange/10 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-rooman-orange" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm group-hover:text-rooman-orange transition-colors">About Rooman</p>
                        <p className="text-xs text-gray-text">Visit our parent company website</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-text" />
                    </Link>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-xs font-medium text-rooman-orange uppercase tracking-wider mb-3">Products</p>
                    <div className="space-y-1">
                      {products.slice(0, 4).map((product) => (
                        <a
                          key={product.id}
                          href={product.href}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                            <product.icon className="w-5 h-5 text-rooman-orange" />
                          </div>
                          <div>
                            <p className="font-medium text-sm group-hover:text-rooman-orange transition-colors">
                              {product.name}
                            </p>
                            <p className="text-xs text-gray-text truncate max-w-[180px]">
                              {product.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <Link 
                      to="/rooman"
                      className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-border text-sm text-rooman-orange hover:text-rooman-orange/80 transition-colors"
                    >
                      View all products
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '50+', label: 'Enterprise Products' },
              { value: '1000+', label: 'Global Clients' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '24/7', label: 'Expert Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-border bg-secondary/30">
                <div className="font-heading text-3xl font-bold text-rooman-orange mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-text">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div id="products" className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              Our Products
            </h2>
            <p className="text-gray-text max-w-2xl mx-auto">
              Comprehensive suite of AI and cloud solutions designed to accelerate 
              digital transformation for enterprises of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group p-6 rounded-2xl border border-border bg-secondary/30 hover:border-rooman-orange/50 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-rooman-orange/10 flex items-center justify-center mb-6 group-hover:bg-rooman-orange/20 transition-colors">
                  <product.icon className="w-7 h-7 text-rooman-orange" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-text text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-rooman-green flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 text-rooman-orange font-medium text-sm group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 lg:p-12 rounded-2xl border border-rooman-orange/30 bg-rooman-orange/5 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rooman-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative text-center">
              <Brain className="w-12 h-12 text-rooman-orange mx-auto mb-4" />
              <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-text mb-8 max-w-lg mx-auto">
                Get in touch with our team to learn how Rooman AI Solutions can 
                help you achieve your digital transformation goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-rooman-orange text-white font-medium rounded-lg hover:bg-rooman-orange/90 transition-colors">
                  Schedule Demo
                </button>
                <Link 
                  to="/rooman"
                  className="px-8 py-3 border border-rooman-orange text-rooman-orange font-medium rounded-lg hover:bg-rooman-orange/10 transition-colors inline-flex items-center justify-center gap-2"
                >
                  About Rooman
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Company Links Footer */}
        <div className="max-w-6xl mx-auto mt-20 pt-10 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="font-heading font-semibold mb-4">Rooman AI Solutions</h4>
              <p className="text-sm text-gray-text">
                Enterprise AI and cloud solutions powered by Rooman Technologies.
              </p>
            </div>
            {companyLinks.map((link, index) => (
              <div key={index}>
                {link.label === 'About Rooman' ? (
                  <Link to={link.href} className="group">
                    <h4 className="font-heading font-semibold mb-2 group-hover:text-rooman-orange transition-colors">
                      {link.label}
                    </h4>
                    <p className="text-sm text-gray-text">{link.description}</p>
                  </Link>
                ) : (
                  <a href={link.href} className="group">
                    <h4 className="font-heading font-semibold mb-2 group-hover:text-rooman-orange transition-colors">
                      {link.label}
                    </h4>
                    <p className="text-sm text-gray-text">{link.description}</p>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomanAISolutionsPage;
