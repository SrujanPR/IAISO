import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Server,
  Briefcase,
  Bot,
  Cloud,
  Cpu,
  ShieldCheck,
  GraduationCap,
} from 'lucide-react';
import HexagonGrid from '@/components/HexagonGrid';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Server,
    title: 'IT Infrastucture Technology',
    description: 'Design, deploy, and manage core IT infrastructure end to end.',
  },
  {
    icon: Briefcase,
    title: 'IT Consultancy & Solutions',
    description: 'Advisory, architecture, and implementation for complex IT needs.',
  },
  {
    icon: Bot,
    title: 'AI Product & Services',
    description: 'AI-driven products and solutions tailored to your business.',
  },
  {
    icon: Cloud,
    title: 'Cloud Management Services',
    description: 'Cloud operations, optimization, and governance across platforms.',
  },
  {
    icon: Cpu,
    title: 'Robotics',
    description: 'Robotic solutions that automate and streamline operations.',
  },
  {
    icon: ShieldCheck,
    title: 'BlockChain',
    description: 'Secure, distributed applications built on blockchain technology.',
  },
  {
    icon: GraduationCap,
    title: 'Skill & Technology Trainings.',
    description: 'Upskilling programs that empower teams with modern tech skills.',
  },
];

const CapabilitiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { x: '-8vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 0.5,
          },
        }
      );

      // Cards animation
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { x: '10vw', opacity: 0, scale: 0.98 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
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
      id="capabilities"
      className="relative w-full min-h-screen bg-navy-900 py-20 lg:py-32 z-40"
    >
      {/* Hexagon Grid */}
      <HexagonGrid side="right" className="top-0" opacity={0.08} />

      <div className="relative z-10 w-full px-6 lg:px-[10vw]">
        <div className="max-w-5xl mx-auto text-center mb-12" ref={headingRef}>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-blue-accent mb-4 block">
            Services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
            Services
          </h2>
          <p className="text-lg text-gray-text leading-relaxed">
            Explore the core services we offer across infrastructure, cloud, AI,
            and training.
          </p>
        </div>

        {/* Services grid (clickable, span full width) */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <Link key={service.title} to="/services" className="group block">
              <div className="relative h-full p-5 lg:p-6 bg-navy-800/60 border border-border rounded-xl hover:border-rooman-orange/70 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="mb-4 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-rooman-orange/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-rooman-orange" />
                  </div>
                </div>
                <h3 className="font-heading text-lg md:text-xl font-semibold mb-2 text-center group-hover:text-rooman-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-text leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
