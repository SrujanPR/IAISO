import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingCart, Star, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: 'Cloud Architecture Guide',
    description: 'Comprehensive guide to building scalable cloud systems.',
    price: '$49',
    rating: 4.9,
    reviews: 128,
    badge: 'Bestseller',
  },
  {
    name: 'AI/ML Workshop Kit',
    description: 'Hands-on materials for machine learning workshops.',
    price: '$199',
    rating: 4.8,
    reviews: 86,
    badge: 'New',
  },
  {
    name: 'Security Audit Template',
    description: 'Professional security assessment framework.',
    price: '$79',
    rating: 4.7,
    reviews: 64,
    badge: null,
  },
  {
    name: 'DevOps Playbook',
    description: 'Best practices for modern DevOps teams.',
    price: '$59',
    rating: 4.9,
    reviews: 152,
    badge: 'Popular',
  },
];

const ShopSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'top 60%',
            scrub: 0.5,
          },
        }
      );

      // Products animation
      const products = gridRef.current?.children;
      if (products) {
        gsap.fromTo(
          products,
          { y: 30, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              end: 'top 55%',
              scrub: 0.5,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="shop"
      className="relative w-full bg-navy-900 py-20 lg:py-32 z-40"
    >
      <div className="relative z-10 w-full px-6 lg:px-[10vw]">
        {/* Heading */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-blue-accent mb-4 block">
              Store
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Shop
            </h2>
          </div>
          <p className="text-gray-text max-w-md mt-4 md:mt-0">
            Tools, templates, and resources to accelerate your technology journey.
          </p>
        </div>

        {/* Products Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative bg-navy-800/50 border border-border rounded-xl overflow-hidden hover:border-blue-accent/50 transition-all duration-500"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 text-xs font-medium bg-blue-accent text-white rounded-full">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Product Image Placeholder */}
              <div className="relative h-40 bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center">
                <div className="w-16 h-16 rounded-lg bg-blue-accent/20 flex items-center justify-center">
                  <ShoppingCart className="w-8 h-8 text-blue-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-blue-light transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-text mb-4">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-text">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="font-heading text-xl font-bold">
                    {product.price}
                  </span>
                  <button className="p-2 bg-blue-accent/10 rounded-lg hover:bg-blue-accent/20 transition-colors">
                    <ShoppingCart className="w-5 h-5 text-blue-accent" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <button className="group inline-flex items-center gap-2 px-6 py-3 bg-secondary border border-border font-medium rounded-lg hover:bg-muted transition-all duration-300">
            View all products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
