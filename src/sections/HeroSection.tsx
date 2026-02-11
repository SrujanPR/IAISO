import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cloud, Brain, Shield } from 'lucide-react';
import FeatureChip from '@/components/FeatureChip';
import HexagonImage from '@/components/HexagonImage';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Initial load animation (auto-play on mount)
      const loadTl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Image fade in
      loadTl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1 },
        0.2
      );

      // Headline slide up
      loadTl.fromTo(
        headlineRef.current?.children || [],
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
        0.4
      );

      // Subheadline
      loadTl.fromTo(
        subheadlineRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.6
      );

      // CTAs
      loadTl.fromTo(
        ctaRef.current?.children || [],
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
        0.7
      );

      // Chips slide in
      loadTl.fromTo(
        chipsRef.current?.children || [],
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
        0.5
      );

      // Scroll-driven exit animation - EVEN FASTER
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=20%', // Much faster scroll transition
          pin: true,
          scrub: 0.1, // Even faster scrub
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back to top
            gsap.set([headlineRef.current, subheadlineRef.current, ctaRef.current], {
              x: 0,
              opacity: 1,
            });
            gsap.set(imageRef.current, { y: 0, scale: 1, opacity: 1 });
            gsap.set(chipsRef.current?.children || [], { x: 0, opacity: 1 });
          },
        },
      });

      // EXIT phase (55% - 100%) - EVEN FASTER
      scrollTl.fromTo(
        headlineRef.current,
        { x: 0, opacity: 1 },
        { x: '-5vw', opacity: 0, ease: 'power2.in' },
        0.55
      );

      scrollTl.fromTo(
        subheadlineRef.current,
        { x: 0, opacity: 1 },
        { x: '-4vw', opacity: 0, ease: 'power2.in' },
        0.58
      );

      scrollTl.fromTo(
        ctaRef.current,
        { x: 0, opacity: 1 },
        { x: '-3vw', opacity: 0, ease: 'power2.in' },
        0.6
      );

      scrollTl.fromTo(
        imageRef.current,
        { y: 0, scale: 1, opacity: 1 },
        { y: '-3vh', scale: 0.97, opacity: 0, ease: 'power2.in' },
        0.55
      );

      scrollTl.fromTo(
        chipsRef.current?.children || [],
        { x: 0, opacity: 1 },
        { x: '3vw', opacity: 0, stagger: 0.02, ease: 'power2.in' },
        0.58
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full h-screen bg-navy-900 overflow-hidden z-10"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="/Innovate.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Content Container */}
      <div
        ref={contentRef}
        className="relative z-10 w-full h-full flex items-center px-6 lg:px-[10vw]"
      >
        <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none" />

        {/* Left Content */}
        <div className="relative z-10 flex-1 max-w-xl">
          {/* Eyebrow */}
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-rooman-orange mb-4 block">
            Rooman Technologies
          </span>

          {/* Headline */}
          <div ref={headlineRef} className="mb-6">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-white">
              Innovate
            </h1>
          </div>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className="text-lg md:text-xl text-gray-100 leading-relaxed mb-8 max-w-md"
          >
            AI systems, cloud infrastructure, and product engineering built for scale.
          </p>

          {/* CTAs removed per design – container kept for animation timeline */}
          <div ref={ctaRef} className="flex flex-wrap gap-4" />
        </div>

        {/* Center Hexagon Image */}
        <div
          ref={imageRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        >
          <HexagonImage
            src="/hero_innovate.jpg"
            alt="Innovation"
            size="lg"
            className="opacity-0"
          />
        </div>

        {/* Right Feature Chips */}
        <div
          ref={chipsRef}
          className="hidden lg:flex flex-col gap-8 absolute right-[8vw] top-1/2 -translate-y-1/2"
        >
          <FeatureChip icon={Cloud} label="Cloud-native" delay={0} />
          <FeatureChip icon={Brain} label="AI/ML ready" delay={100} />
          <FeatureChip icon={Shield} label="Secure by design" delay={200} />
        </div>
      </div>

      {/* Mobile Image */}
      <div className="lg:hidden absolute bottom-20 left-1/2 -translate-x-1/2">
        <HexagonImage
          src="/hero_innovate.jpg"
          alt="Innovation"
          size="md"
        />
      </div>
    </section>
  );
};

export default HeroSection;
