import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Lightbulb, Palette, TrendingUp } from 'lucide-react';
import FeatureChip from '@/components/FeatureChip';

gsap.registerPlugin(ScrollTrigger);

const EmpowerSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=40%', // Much faster scroll transition
          pin: true,
          scrub: 0.3, // Even faster scrub
        },
      });

      // ENTRANCE (0% - 25%) - FASTER
      // Central hexagon frame - different animation from Integrate
      scrollTl.fromTo(
        imageRef.current,
        { scale: 0.92, y: '6vh', rotate: 2, opacity: 0 },
        { scale: 1, y: 0, rotate: 0, opacity: 1, ease: 'none' },
        0
      );

      // Headline
      scrollTl.fromTo(
        headlineRef.current,
        { x: '-8vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.05
      );

      // Body + CTA
      scrollTl.fromTo(
        bodyRef.current,
        { x: '-6vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.1
      );

      scrollTl.fromTo(
        ctaRef.current,
        { x: '-6vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.12
      );

      // Right chips
      scrollTl.fromTo(
        chipsRef.current?.children || [],
        { x: '5vw', opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.02, ease: 'none' },
        0.08
      );

      // SETTLE (25% - 55%) - Hold.

      // EXIT (55% - 100%) - FASTER
      scrollTl.fromTo(
        headlineRef.current,
        { x: 0, opacity: 1 },
        { x: '-5vw', opacity: 0, ease: 'power2.in' },
        0.55
      );

      scrollTl.fromTo(
        [bodyRef.current, ctaRef.current],
        { x: 0, opacity: 1 },
        { x: '-4vw', opacity: 0, ease: 'power2.in' },
        0.58
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
        { x: '4vw', opacity: 0, stagger: 0.02, ease: 'power2.in' },
        0.58
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="empower"
      className="relative w-full h-screen bg-navy-900 overflow-hidden z-30"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover  pointer-events-none"
        src="/Empower.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center px-6 lg:px-[10vw]">
        <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none" />

        {/* Left Content */}
        <div className="relative z-10 flex-1 max-w-xl">
          {/* Headline */}
          <div ref={headlineRef} className="mb-6">
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-white">
              Empower
            </h2>
          </div>

          {/* Body */}
          <p
            ref={bodyRef}
            className="text-lg md:text-xl text-gray-100 leading-relaxed mb-8 max-w-md"
          >
            Turn complex technology into clear outcomes—faster decisions, lower risk, real growth.
          </p>

          {/* CTA */}
          <button
            ref={ctaRef}
            className="group flex items-center gap-2 px-6 py-3 bg-secondary border border-rooman-green text-rooman-green font-medium rounded-lg hover:bg-rooman-green hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Read client stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Feature Chips */}
        <div
          ref={chipsRef}
          className="hidden lg:flex flex-col gap-8 absolute right-[8vw] top-1/2 -translate-y-1/2"
        >
          <FeatureChip icon={Lightbulb} label="Product Strategy" delay={0} />
          <FeatureChip icon={Palette} label="UX Engineering" delay={100} />
          <FeatureChip icon={TrendingUp} label="Growth Systems" delay={200} />
        </div>
      </div>

      {/* Mobile Image removed – background video now provides visual context */}
    </section>
  );
};

export default EmpowerSection;
