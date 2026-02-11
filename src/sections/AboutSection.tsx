import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HexagonImage from '@/components/HexagonImage';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '25+', label: 'Years delivering platforms' },
  { value: '40+', label: 'Projects shipped' },
  { value: '96%', label: 'Client retention' },
  { value: '24', label: 'Academic Partners' },
  { value: '198', label: 'Centers' },
  { value: '52', label: 'Cities' },
  { value: '1.2M+', label: 'Students Empowered' },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageRef.current,
        { x: '-10vw', opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 75%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );

      // Text animation
      gsap.fromTo(
        textRef.current,
        { x: '8vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 75%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );

      // Stats animation
      const statItems = statsRef.current?.children;
      if (statItems) {
        gsap.fromTo(
          statItems,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              end: 'top 65%',
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
      id="about"
      className="relative w-full bg-navy-900 py-20 lg:py-32 z-40"
    >
      <div className="relative z-10 w-full px-6 lg:px-[10vw]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <div ref={imageRef} className="lg:w-[40vw] flex flex-col items-center gap-6">
            <HexagonImage
              src="/image.png"
              alt="About Rooman"
              size="lg"
              className="mx-auto"
            />
            <Link
              to="/about"
              className="px-5 py-2.5 text-sm font-medium rounded-lg border border-rooman-orange text-rooman-orange hover:bg-rooman-orange hover:text-white transition-all duration-300"
            >
              Explore more
            </Link>
          </div>

          {/* Right Content */}
          <div className="lg:w-[36vw]">
            <div ref={textRef}>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-blue-accent mb-4 block">
                Who We Are
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-6">
                About Rooman
              </h2>
              <p className="text-lg text-gray-text leading-relaxed mb-8">
                We're a team of engineers, designers, and strategists helping
                organizations ship faster and safer. With over a decade of
                experience, we've built a reputation for delivering
                mission-critical systems that scale.
              </p>
              <p className="text-gray-text leading-relaxed mb-10">
                Our approach combines deep technical expertise with a
                product-minded perspective. We don't just write code—we solve
                business problems through technology.
              </p>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-heading text-3xl lg:text-4xl font-bold text-blue-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-text">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
