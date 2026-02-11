import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Clock, User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const featuredPost = {
  title: 'The Modern AI Stack',
  description: 'A field guide to building reliable AI services.',
  image: '/hero_innovate.jpg',
  author: 'Sarah Chen',
  readTime: '8 min read',
  date: 'Jan 15, 2026',
};

const posts = [
  {
    title: 'Cloud Cost Playbook',
    description: 'Strategies for optimizing your cloud spend.',
    readTime: '5 min read',
  },
  {
    title: 'API Design Principles',
    description: 'Best practices for building scalable APIs.',
    readTime: '6 min read',
  },
  {
    title: 'Security Checklist',
    description: 'Essential security measures for modern apps.',
    readTime: '4 min read',
  },
];

const InsightsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const postsRef = useRef<HTMLDivElement>(null);

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

      // Featured post animation
      gsap.fromTo(
        featuredRef.current,
        { x: '10vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuredRef.current,
            start: 'top 75%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );

      // Small posts animation
      const smallPosts = postsRef.current?.children;
      if (smallPosts) {
        gsap.fromTo(
          smallPosts,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: postsRef.current,
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
      id="insights"
      className="relative w-full bg-navy-900 py-20 lg:py-32 z-40"
    >
      <div className="relative z-10 w-full px-6 lg:px-[10vw]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Heading */}
          <div ref={headingRef} className="lg:w-[30vw]">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-blue-accent mb-4 block">
              Resources
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
              Insights
            </h2>
            <p className="text-lg text-gray-text leading-relaxed">
              Practical guides on AI, cloud, and product delivery.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {/* Featured Post */}
            <div
              ref={featuredRef}
              className="group relative mb-8 bg-navy-800/50 border border-border rounded-xl overflow-hidden hover:border-blue-accent/50 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="relative lg:w-1/2 h-56 lg:h-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-800/80 hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800 to-transparent lg:hidden" />
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-text">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl lg:text-3xl font-semibold mb-3 group-hover:text-blue-light transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-text mb-6">{featuredPost.description}</p>
                  <button className="group/btn flex items-center gap-2 text-blue-accent font-medium hover:text-blue-light transition-colors">
                    Read article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Small Posts */}
            <div ref={postsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {posts.map((post) => (
                <div
                  key={post.title}
                  className="group p-5 bg-navy-800/30 border border-border rounded-lg hover:border-blue-accent/50 hover:bg-navy-800/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3 text-xs text-gray-text">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                  <h4 className="font-heading text-lg font-semibold mb-2 group-hover:text-blue-light transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-text mb-4">{post.description}</p>
                  <ArrowRight className="w-4 h-4 text-gray-text group-hover:text-blue-accent group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
