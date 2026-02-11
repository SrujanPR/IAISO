import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Clock, User, Calendar, Tag, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import BackgroundElements from '@/components/BackgroundElements';

gsap.registerPlugin(ScrollTrigger);

type BlogPost = {
  title: string;
  description: string;
  author: string;
  readTime: string;
  date: string;
  category: string;
  content: string;
  image?: string;
};

const categories = [
  'All',
  'AI & Machine Learning',
  'Cloud',
  'DevOps',
  'Security',
  'Product',
];

const featuredPost: BlogPost = {
  title: 'The Modern AI Stack: A Complete Guide',
  description:
    'Building reliable AI services requires the right tools and architecture. Learn how to set up your AI infrastructure for production.',
  image: '/hero_innovate.jpg',
  author: 'Sarah Chen',
  readTime: '12 min read',
  date: 'Jan 20, 2026',
  category: 'AI & Machine Learning',
  content:
    'Building reliable AI services requires the right tools and architecture. Learn how to set up your AI infrastructure for production. In this guide, we walk through modern data pipelines, model deployment patterns, observability best practices, and how to keep your AI stack maintainable as it grows.',
};

const initialPosts: BlogPost[] = [
  {
    title: 'Cloud Cost Optimization Strategies',
    description:
      'Practical techniques to reduce your cloud spend without sacrificing performance.',
    author: 'Michael Torres',
    readTime: '8 min read',
    date: 'Jan 18, 2026',
    category: 'Cloud',
    content:
      'Practical techniques to reduce your cloud spend without sacrificing performance. We cover rightsizing, autoscaling, storage lifecycle policies, reserved instances, and governance practices that keep costs predictable as your footprint grows.',
  },
  {
    title: 'API Design Principles for Scale',
    description:
      'Best practices for building APIs that can handle millions of requests.',
    author: 'Emily Watson',
    readTime: '6 min read',
    date: 'Jan 15, 2026',
    category: 'Product',
    content:
      'Best practices for building APIs that can handle millions of requests. Learn about versioning strategies, pagination, idempotency, rate limiting, observability, and how to design for backward compatibility from day one.',
  },
  {
    title: 'Security Checklist for 2026',
    description:
      'Essential security measures every modern application should implement.',
    author: 'David Kim',
    readTime: '5 min read',
    date: 'Jan 12, 2026',
    category: 'Security',
    content:
      'Essential security measures every modern application should implement. From secrets management and least-privilege access to monitoring, incident response, and zero trust principles, this checklist helps you cover the fundamentals.',
  },
  {
    title: 'MLOps: From Experiment to Production',
    description:
      'A comprehensive guide to deploying machine learning models at scale.',
    author: 'Sarah Chen',
    readTime: '10 min read',
    date: 'Jan 10, 2026',
    category: 'AI & Machine Learning',
    content:
      'A comprehensive guide to deploying machine learning models at scale. We discuss experiment tracking, model registries, CI/CD for ML, canary releases, and feedback loops so your models stay accurate in production.',
  },
  {
    title: 'Kubernetes Best Practices',
    description:
      'Tips and tricks for managing containerized applications efficiently.',
    author: 'Michael Torres',
    readTime: '7 min read',
    date: 'Jan 8, 2026',
    category: 'DevOps',
    content:
      'Tips and tricks for managing containerized applications efficiently. Explore cluster sizing, resource requests and limits, observability, and security best practices for Kubernetes workloads.',
  },
  {
    title: 'Zero Trust Architecture Explained',
    description:
      'Understanding the principles behind modern security architectures.',
    author: 'David Kim',
    readTime: '9 min read',
    date: 'Jan 5, 2026',
    category: 'Security',
    content:
      'Understanding the principles behind modern security architectures. This article explains zero trust concepts, identity-aware access, continuous verification, and how to incrementally adopt these patterns.',
  },
];

const BlogPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialPosts);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const [isComposerOpen, setIsComposerOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('AI & Machine Learning');
  const [newContent, setNewContent] = useState('');

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

      // Featured post animation
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
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Newsletter animation
      gsap.fromTo(
        newsletterRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: newsletterRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleAddPost = () => {
    if (!newTitle.trim() || !newContent.trim()) return;

    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    const approximateReadTime = `${Math.max(
      3,
      Math.round(newContent.split(' ').length / 200)
    )} min read`;

    const description =
      newContent.length > 160
        ? `${newContent.slice(0, 157).trimEnd()}...`
        : newContent;

    const newPost: BlogPost = {
      title: newTitle.trim(),
      description,
      author: 'Guest Author',
      readTime: approximateReadTime,
      date: formattedDate,
      category: newCategory,
      content: newContent.trim(),
    };

    setBlogPosts((prev) => [newPost, ...prev]);
    setNewTitle('');
    setNewCategory('AI & Machine Learning');
    setNewContent('');
    setIsComposerOpen(false);
  };

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-navy-900">
      <BackgroundElements />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-6 lg:px-[10vw]">
        <div ref={headerRef} className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-blue-accent mb-4 block">
            Insights & Resources
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-text max-w-2xl">
            Practical guides, deep dives, and insights on AI, cloud infrastructure,
            and modern software engineering.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-text" />
            <Input
              placeholder="Search articles..."
              className="pl-10 bg-navy-800/50 border-border text-foreground placeholder:text-gray-text/50"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm rounded-full border transition-all ${
                  cat === activeCategory
                    ? 'bg-blue-accent text-white border-blue-accent'
                    : 'bg-navy-800/50 border-border text-gray-text hover:border-blue-accent/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIsComposerOpen((prev) => !prev)}
            className="mt-4 md:mt-0 md:ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-accent text-sm font-medium text-blue-accent hover:bg-blue-accent/10 transition-colors"
          >
            {isComposerOpen ? 'Close editor' : 'Add blog post'}
          </button>
        </div>
      </section>

      {isComposerOpen && (
        <section className="relative px-6 lg:px-[10vw] pb-10">
          <div className="max-w-3xl bg-navy-800/60 border border-border rounded-2xl p-6 space-y-4">
            <h2 className="font-heading text-xl font-semibold">Add a new blog post</h2>
            <div className="space-y-2">
              <label className="text-sm text-gray-text" htmlFor="blog-title">
                Title
              </label>
              <input
                id="blog-title"
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full rounded-lg bg-navy-900/60 border border-border px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-blue-accent"
                placeholder="Enter blog title"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-text" htmlFor="blog-category">
                Category
              </label>
              <select
                id="blog-category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full rounded-lg bg-navy-900/60 border border-border px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-blue-accent"
              >
                {categories
                  .filter((c) => c !== 'All')
                  .map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-text" htmlFor="blog-content">
                Full content
              </label>
              <textarea
                id="blog-content"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="w-full min-h-[160px] rounded-lg bg-navy-900/60 border border-border px-3 py-2 text-sm text-foreground resize-vertical focus:outline-none focus:ring-1 focus:ring-blue-accent"
                placeholder="Write the full content of your blog post here..."
              />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsComposerOpen(false);
                }}
                className="px-4 py-2 text-sm rounded-lg border border-border text-gray-text hover:bg-navy-700/60 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddPost}
                className="px-5 py-2 text-sm rounded-lg bg-blue-accent text-white font-medium hover:bg-blue-dark transition-colors disabled:opacity-50"
                disabled={!newTitle.trim() || !newContent.trim()}
              >
                Publish post
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Featured Post */}
      <section className="relative px-6 lg:px-[10vw] pb-16">
        <div
          ref={featuredRef}
          className="group relative bg-navy-800/50 border border-border rounded-2xl overflow-hidden hover:border-blue-accent/50 transition-all duration-500"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-medium bg-blue-accent text-white rounded-full">
                  {featuredPost.category}
                </span>
              </div>
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-text">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {featuredPost.author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {featuredPost.date}
                </span>
              </div>
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold mb-4 group-hover:text-blue-light transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-gray-text mb-6 leading-relaxed">
                {featuredPost.description}
              </p>
              <button
                type="button"
                onClick={() => setActivePost(featuredPost)}
                className="group/btn flex items-center gap-2 text-blue-accent font-medium hover:text-blue-light transition-colors w-fit"
              >
                Read article
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="relative px-6 lg:px-[10vw] pb-20">
        <h2 className="font-heading text-2xl font-semibold mb-8">
          Latest Articles
        </h2>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.title}
              className="group bg-navy-800/50 border border-border rounded-xl p-6 hover:border-blue-accent/50 hover:bg-navy-800/70 transition-all duration-300 cursor-pointer"
              onClick={() => setActivePost(post)}
            >
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-3 h-3 text-blue-accent" />
                <span className="text-xs text-blue-accent">{post.category}</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-blue-light transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-text text-sm mb-4 leading-relaxed">
                {post.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-text pt-4 border-t border-border">
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-2 px-6 py-3 bg-secondary border border-border font-medium rounded-lg hover:bg-muted transition-all duration-300">
            Load more articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative px-6 lg:px-[10vw] pb-20">
        <div
          ref={newsletterRef}
          className="relative bg-gradient-to-br from-blue-accent/20 to-blue-accent/5 border border-blue-accent/30 rounded-2xl p-8 lg:p-12 text-center"
        >
          <h2 className="font-heading text-3xl font-semibold mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-text max-w-lg mx-auto mb-6">
            Get the latest articles, guides, and insights delivered straight to
            your inbox. No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-navy-900/50 border-border text-foreground placeholder:text-gray-text/50"
            />
            <button className="px-6 py-2 bg-blue-accent text-white font-medium rounded-lg hover:bg-blue-dark transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative max-w-3xl w-full max-h-[80vh] overflow-y-auto bg-navy-900 border border-border rounded-2xl p-6 md:p-8">
            <button
              type="button"
              onClick={() => setActivePost(null)}
              className="absolute right-4 top-4 text-gray-text hover:text-blue-accent text-sm"
            >
              Close
            </button>
            <div className="flex items-center gap-3 mb-4 text-xs text-gray-text">
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {activePost.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {activePost.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {activePost.date}
              </span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
              {activePost.title}
            </h2>
            <p className="text-xs inline-flex items-center gap-1 px-2 py-1 rounded-full bg-navy-800 text-blue-accent mb-4">
              <Tag className="w-3 h-3" />
              {activePost.category}
            </p>
            <div className="text-sm md:text-base text-gray-text leading-relaxed space-y-3">
              {activePost.content.split('\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
