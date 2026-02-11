import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ShoppingCart,
  Star,
  Search,
  Filter,
  Check,
  ArrowRight,
  Package,
  Shield,
  Zap,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import BackgroundElements from '@/components/BackgroundElements';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  'All',
  'Templates',
  'Guides',
  'Tools',
  'Courses',
  'Bundles',
];

const featuredProduct = {
  name: 'Enterprise Architecture Bundle',
  description:
    'Complete collection of architecture templates, diagrams, and best practices for building scalable systems.',
  price: 299,
  originalPrice: 499,
  rating: 4.9,
  reviews: 256,
  badge: 'Best Value',
  features: [
    'Cloud Architecture Templates',
    'Security Audit Checklist',
    'API Design Guidelines',
    'DevOps Playbook',
    'MLOps Framework',
  ],
};

const products = [
  {
    name: 'Cloud Architecture Guide',
    description: 'Comprehensive guide to building scalable cloud systems.',
    price: 49,
    rating: 4.9,
    reviews: 128,
    category: 'Guides',
    badge: 'Bestseller',
  },
  {
    name: 'AI/ML Workshop Kit',
    description: 'Hands-on materials for machine learning workshops.',
    price: 199,
    rating: 4.8,
    reviews: 86,
    category: 'Courses',
    badge: 'New',
  },
  {
    name: 'Security Audit Template',
    description: 'Professional security assessment framework.',
    price: 79,
    rating: 4.7,
    reviews: 64,
    category: 'Templates',
    badge: null,
  },
  {
    name: 'DevOps Playbook',
    description: 'Best practices for modern DevOps teams.',
    price: 59,
    rating: 4.9,
    reviews: 152,
    category: 'Guides',
    badge: 'Popular',
  },
  {
    name: 'Kubernetes Starter Pack',
    description: 'Ready-to-use K8s manifests and configurations.',
    price: 89,
    rating: 4.8,
    reviews: 98,
    category: 'Templates',
    badge: null,
  },
  {
    name: 'API Design Toolkit',
    description: 'Tools and templates for designing RESTful APIs.',
    price: 69,
    rating: 4.6,
    reviews: 72,
    category: 'Tools',
    badge: null,
  },
];

const benefits = [
  {
    icon: Package,
    title: 'Instant Download',
    description: 'Get immediate access to all purchased resources.',
  },
  {
    icon: Shield,
    title: 'Lifetime Updates',
    description: 'Free updates for life on all products.',
  },
  {
    icon: Zap,
    title: 'Expert Support',
    description: 'Get help from our team of experts.',
  },
];

const ShopPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const [cart, setCart] = useState<string[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Featured product animation
      gsap.fromTo(
        featuredRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuredRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Grid animation
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Benefits animation
      const benefitItems = benefitsRef.current?.children;
      if (benefitItems) {
        gsap.fromTo(
          benefitItems,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: benefitsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const addToCart = (productName: string) => {
    if (!cart.includes(productName)) {
      setCart([...cart, productName]);
    }
  };

  return (
    <div className="relative min-h-screen bg-navy-900">
      <BackgroundElements />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-6 lg:px-[10vw]">
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-blue-accent mb-4 block">
              Resources & Tools
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4">
              Shop
            </h1>
            <p className="text-xl text-gray-text">
              Professional templates, guides, and tools to accelerate your
              technology journey.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-text" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-accent text-white text-xs rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-text" />
            <Input
              placeholder="Search products..."
              className="pl-10 bg-navy-800/50 border-border text-foreground placeholder:text-gray-text/50"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-text" />
            <span className="text-sm text-gray-text">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm rounded-full border transition-all ${
                  cat === 'All'
                    ? 'bg-blue-accent text-white border-blue-accent'
                    : 'bg-navy-800/50 border-border text-gray-text hover:border-blue-accent/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="relative px-6 lg:px-[10vw] pb-16">
        <div
          ref={featuredRef}
          className="relative bg-gradient-to-br from-blue-accent/20 to-blue-accent/5 border border-blue-accent/30 rounded-2xl p-8 lg:p-12"
        >
          <div className="absolute top-4 right-4">
            <span className="px-4 py-2 text-sm font-medium bg-blue-accent text-white rounded-full">
              {featuredProduct.badge}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-1/2">
              <div className="w-full h-64 lg:h-80 bg-navy-800/50 rounded-xl flex items-center justify-center border border-border">
                <div className="w-24 h-24 rounded-2xl bg-blue-accent/20 flex items-center justify-center">
                  <Package className="w-12 h-12 text-blue-accent" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold mb-4">
                {featuredProduct.name}
              </h2>
              <p className="text-gray-text mb-6 leading-relaxed">
                {featuredProduct.description}
              </p>
              <ul className="space-y-3 mb-8">
                {featuredProduct.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-accent" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">{featuredProduct.rating}</span>
                </div>
                <span className="text-gray-text">
                  ({featuredProduct.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-4xl font-bold text-blue-accent">
                    ${featuredProduct.price}
                  </span>
                  <span className="text-lg text-gray-text line-through">
                    ${featuredProduct.originalPrice}
                  </span>
                </div>
                <button
                  onClick={() => addToCart(featuredProduct.name)}
                  className="flex-1 max-w-xs px-6 py-3 bg-blue-accent text-white font-medium rounded-lg hover:bg-blue-dark transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cart.includes(featuredProduct.name)
                    ? 'Added to Cart'
                    : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative px-6 lg:px-[10vw] pb-16">
        <h2 className="font-heading text-2xl font-semibold mb-8">
          All Products
        </h2>
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative bg-navy-800/50 border border-border rounded-xl overflow-hidden hover:border-blue-accent/50 transition-all duration-500"
            >
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 text-xs font-medium bg-blue-accent text-white rounded-full">
                    {product.badge}
                  </span>
                </div>
              )}
              <div className="h-48 bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center">
                <div className="w-16 h-16 rounded-xl bg-blue-accent/20 flex items-center justify-center">
                  <Package className="w-8 h-8 text-blue-accent" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-blue-accent">{product.category}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-blue-light transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-text mb-4">{product.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm">{product.rating}</span>
                  <span className="text-sm text-gray-text">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-xl font-bold">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product.name)}
                    className="p-2 bg-blue-accent/10 rounded-lg hover:bg-blue-accent/20 transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5 text-blue-accent" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="relative px-6 lg:px-[10vw] pb-20">
        <div
          ref={benefitsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-navy-800/50 border border-border rounded-xl p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-blue-accent/10 rounded-xl flex items-center justify-center">
                <benefit.icon className="w-7 h-7 text-blue-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-text">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 lg:px-[10vw] pb-20">
        <div className="bg-navy-800/50 border border-border rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-semibold mb-4">
            Need something custom?
          </h2>
          <p className="text-gray-text max-w-lg mx-auto mb-6">
            We offer custom consulting and tailored solutions for your specific
            needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-accent text-white font-medium rounded-lg hover:bg-blue-dark transition-colors"
          >
            Contact us
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
