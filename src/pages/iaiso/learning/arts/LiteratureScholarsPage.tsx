import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookText, Brain, Cpu, Shield, Globe, GraduationCap, Award, Building2, Users, Layers, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LiteratureScholarsPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.value-card');
        gsap.fromTo(cards, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' } });
      }

      sectionsRef.current.forEach((section) => {
        if (section) {
          gsap.fromTo(section, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 85%' } });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div ref={heroRef} className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent dark:from-blue-900/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <BookText className="w-4 h-4" />
              <span>Arts Stream</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              AI for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Literature Scholars</span>
            </h1>
            <p className="text-xl text-gray-text font-medium mb-4">
              Specialization in Computational Literary Studies and AI Text Analysis
            </p>
            <p className="text-lg text-gray-text max-w-3xl mx-auto">
              Integrating AI into literary analysis, text mining, and computational criticism for deeper literary insights
            </p>
          </div>
        </div>
      </div>

      <div ref={addToRefs} className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl" />
              <div className="relative bg-secondary/30 rounded-2xl p-8 shadow-xl border border-border">
                <Brain className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Academic Vision</h2>
                <p className="text-gray-text leading-relaxed mb-6">The AI for Literature Scholars program transforms literary studies by integrating artificial intelligence into text analysis, stylometry, and computational criticism. As literary archives become digitized and text corpora expand, scholars must master AI-driven text mining, thematic analysis, and author attribution techniques.</p>
                <p className="text-gray-text leading-relaxed">This program bridges classical literary theory with modern AI capabilities, preparing scholars to lead in digital literary studies, computational text analysis, and the future of humanities research.</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-3"><Cpu className="w-6 h-6 text-purple-600" />Core Scholarly Capability</h3>
              <p className="text-gray-text leading-relaxed">This program positions AI as a core literary capability—embedded within textual analysis, genre classification, thematic exploration, and comparative literature—while preserving literary theory, interpretive depth, and critical analysis.</p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-500">
                <p className="text-gray-text italic">"Preparing graduates for advanced roles in AI-driven literary studies, computational text analysis, digital humanities, and cultural analytics"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={addToRefs} className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Program Objectives</h2>
            <p className="text-lg text-gray-text dark:text-gray-text max-w-2xl mx-auto">Five key pillars that define our comprehensive curriculum</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ { icon: <Layers className="w-8 h-8 text-blue-600" />, title: 'Design & Deploy', desc: 'Enable literature scholars to design, build, and deploy AI-powered text analysis and literary research systems' }, { icon: <Brain className="w-8 h-8 text-purple-600" />, title: 'Develop Competencies', desc: 'Develop competencies in stylometry, thematic analysis, and computational criticism' }, { icon: <Shield className="w-8 h-8 text-green-600" />, title: 'Literary Rigor', desc: 'Strengthen understanding of theory-informed, interpretively-rich, and culturally-aware AI-enabled literature studies' }, { icon: <Award className="w-8 h-8 text-amber-600" />, title: 'Ethical Awareness', desc: 'Instil ethical awareness around copyright, cultural representation, and responsible AI in literary research' }, { icon: <Globe className="w-8 h-8 text-indigo-600" />, title: 'Career Preparation', desc: 'Prepare graduates for advanced roles in academia, publishing, cultural institutions, and digital humanities' }, { icon: <Zap className="w-8 h-8 text-rose-600" />, title: 'Research Readiness', desc: 'Bridge the gap between literary theory and cutting-edge practice in AI-enabled text analysis' } ].map((obj, idx) => (
              <div key={idx} className="bg-secondary/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
                <div className="mb-4">{obj.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{idx + 1}. {obj.title}</h3>
                <p className="text-gray-text dark:text-gray-text text-sm leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={cardsRef} className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">Embedded Academic Value Additions</h2>
            <p className="text-lg text-gray-text dark:text-gray-text max-w-3xl mx-auto">Designed to integrate scholarly excellence, global relevance, and real-world research readiness into modern AI and literary studies.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="value-card group bg-secondary/30 rounded-2xl overflow-hidden shadow-lg border border-border transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="h-48 overflow-hidden"><img src="/global.png" alt="International Credibility" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">International Credibility</h3>
                <ul className="space-y-3 text-gray-text text-sm">
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span>Aligned with global best practices in digital humanities, computational literature, and AI frameworks</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span>Emphasis on literary theory, interpretive depth, and ethical AI deployment in text analysis</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span>Capstone outputs suitable for peer-reviewed publication, digital archives, or cultural heritage projects</span></li>
                </ul>
              </div>
            </div>
            <div className="value-card group bg-secondary/30 rounded-2xl overflow-hidden shadow-lg border border-border transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="h-48 overflow-hidden"><img src="/university.png" alt="University Adoption & Integration" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">University Adoption & Integration</h3>
                <ul className="space-y-3 text-gray-text text-sm">
                  <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span><span>Literature-first architecture preserving close reading, literary theory, and critical analysis principles</span></li>
                  <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span><span>Modular design supports adoption as a specialization track, honours pathway, or integrated literature program</span></li>
                </ul>
              </div>
            </div>
            <div className="value-card group bg-secondary/30 rounded-2xl overflow-hidden shadow-lg border border-border transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="h-48 overflow-hidden"><img src="/engineering.png" alt="Employability & Engineering Readiness" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Employability & Research Readiness</h3>
                <ul className="space-y-3 text-gray-text text-sm">
                  <li className="flex items-start gap-2"><span className="text-emerald-600 mt-1">•</span><span>Graduates complete the program with AI-literature portfolios and digital humanities project experience</span></li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600 mt-1">•</span><span>Balanced emphasis on literary depth, computational skills, and ethical scholarly responsibility</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={addToRefs} className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Delivery Model</h2>
            <p className="text-lg text-gray-text dark:text-gray-text max-w-3xl mx-auto mb-8">Research-based learning integrated with digital humanities labs and text analysis studios</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="bg-secondary/30 rounded-2xl p-8 shadow-lg border border-border">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6"><Award className="w-8 h-8 text-red-600" /></div>
              <h3 className="text-xl font-bold text-foreground mb-4">IAISO Certification</h3>
              <div className="space-y-3 text-sm text-gray-text">
                <p>Awarded as <strong>Certified Specialist in AI for Literature and Digital Humanities (IAISO)</strong></p>
                <p>Certified by the International Federation for Artificial Intelligence (IAISO) as a humanities–AI integration program</p>
                <p>Validates advanced competence in AI-powered literary studies, text analysis, and computational criticism</p>
                <p>Confirms ethical, technical, and professional responsibility in AI-enabled humanities</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-2xl animate-pulse" />
                <div className="relative w-64 h-64 rounded-full bg-background text-foreground/30 flex items-center justify-center border-4 border-white dark:border-slate-700 shadow-2xl"><Globe className="w-32 h-32 text-cyan-600 dark:text-cyan-400" /></div>
              </div>
            </div>
            <div className="bg-secondary/30 rounded-2xl p-8 shadow-lg border border-border">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6"><GraduationCap className="w-8 h-8 text-indigo-600" /></div>
              <h3 className="text-xl font-bold text-foreground mb-4">Program Investment</h3>
              <div className="space-y-3 text-sm text-gray-text">
                <p><strong>Total Program Fee:</strong> USD 1,500</p>
                <p>Inclusive of academic delivery, assessments, capstone evaluation, and IAISO certification issuance</p>
                <p>Designed to deliver high value through globally relevant credentials and research-aligned learning outcomes</p>
                <p className="pt-2 border-t border-border"><strong>Curriculum Architecture:</strong> Each Semester | Total Program – 480 Hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={addToRefs} className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-4">Value to University</h2>
            <p className="text-lg text-gray-text dark:text-gray-text max-w-2xl mx-auto">Literature Scholars Academic and Professional Advantage</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-secondary/30 rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3"><GraduationCap className="w-6 h-6 text-emerald-600" />For Arts Students</h3>
              <ul className="space-y-4">
                {['Transforms literary studies into a future-ready discipline centered on AI-assisted text analysis', 'Expands career pathways into academia, publishing, cultural institutions, and digital humanities', 'Strengthens readiness for scholarly roles in AI-first and digitally-enabled humanities organizations'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-emerald-600 text-sm">✓</span></span><span className="text-gray-text">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/30 rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3"><Building2 className="w-6 h-6 text-blue-600" />Institutional Impact</h3>
              <ul className="space-y-4">
                {['Positions the university as a leader in AI-integrated literature and digital humanities education', 'Encourages collaboration across Literature, Linguistics, Computer Science, and AI departments'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-blue-600 text-sm">✓</span></span><span className="text-gray-text">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div ref={addToRefs} className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Begin Your Journey in AI-Enabled Literature</h2>
          <p className="text-xl text-white/90 mb-8">Join the next generation of AI-powered literature scholars</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">Enroll Now</button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">Download Syllabus</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiteratureScholarsPage;
