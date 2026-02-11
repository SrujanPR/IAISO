import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const roles = [
  {
    title: 'Senior Cloud Engineer',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'ML Platform Engineer',
    location: 'New York, NY',
    type: 'Full-time',
  },
  {
    title: 'Product Designer',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Technical Program Manager',
    location: 'San Francisco, CA',
    type: 'Full-time',
  },
];

const CareersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const rolesRef = useRef<HTMLDivElement>(null);

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

      // Roles animation
      const roleItems = rolesRef.current?.children;
      if (roleItems) {
        gsap.fromTo(
          roleItems,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: rolesRef.current,
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
      id="careers"
      className="relative w-full bg-navy-900 py-20 lg:py-32 z-40"
    >
      <div className="relative z-10 w-full px-6 lg:px-[10vw]">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-blue-accent mb-4 block">
            Join Us
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
            Join the team
          </h2>
          <p className="text-lg text-gray-text max-w-xl mx-auto">
            Build challenging things with kind, brilliant people.
          </p>
        </div>

        {/* Roles Grid */}
        <div
          ref={rolesRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10"
        >
          {roles.map((role) => (
            <div
              key={role.title}
              className="group flex items-center justify-between p-5 bg-navy-800/30 border border-border rounded-lg hover:bg-blue-accent/5 hover:border-blue-accent/30 transition-all duration-300 cursor-pointer"
            >
              <div>
                <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-blue-light transition-colors">
                  {role.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-text">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {role.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3 h-3" />
                    {role.type}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-text group-hover:text-blue-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-2 px-6 py-3 bg-secondary border border-border font-medium rounded-lg hover:bg-muted transition-all duration-300">
            View all roles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
