import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Landmark, Truck, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Compliance-first systems that protect patient data.',
    image: '/industry_healthcare.jpg',
  },
  {
    icon: Landmark,
    title: 'Financial Services',
    description: 'Secure platforms for payments, risk, and analytics.',
    image: '/industry_finance.jpg',
  },
  {
    icon: Truck,
    title: 'Retail & Logistics',
    description: 'Real-time supply chain and customer experiences.',
    image: '/industry_retail.jpg',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Scalable infrastructure for high-growth teams.',
    image: '/industry_tech.jpg',
  },
];

const IndustriesSection = () => {
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

      // Grid tiles animation
      const tiles = gridRef.current?.children;
      if (tiles) {
        gsap.fromTo(
          tiles,
          { y: 40, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 75%',
              end: 'top 50%',
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
      id="industries"
      className="relative w-full bg-navy-900 py-20 lg:py-32 z-40"
    >
      <div className="relative z-10 w-full px-6 lg:px-[10vw]">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-blue-accent mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
            Industries
          </h2>
          <p className="text-lg text-gray-text max-w-xl mx-auto">
            Deep expertise in regulated, data-rich environments.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group relative overflow-hidden bg-navy-800/50 border border-border rounded-xl hover:border-blue-accent/50 transition-all duration-500"
            >
              {/* Image - No shadow, clean style */}
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${industry.image})`,
                    clipPath:
                      'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                />

                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-14 flex items-center justify-center">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 48 56"
                  >
                    <polygon
                      points="24,0 48,14 48,42 24,56 0,42 0,14"
                      fill="rgba(28, 123, 58, 0.9)"
                      stroke="var(--rooman-green)"
                      strokeWidth="1"
                    />
                  </svg>
                  <industry.icon className="w-5 h-5 text-white relative z-10" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-blue-light transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-text text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
