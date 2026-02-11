import { useEffect, useRef } from 'react'; 
import { gsap } from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { Target, Brain, Cpu, Shield, Globe, GraduationCap, Award, Building2, Users, Layers, Zap } from 'lucide-react'; 
gsap.registerPlugin(ScrollTrigger);

const ProjectManagersPage = () => {
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
              <Target className="w-4 h-4" />
              <span>Management Stream</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              AI for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Project Managers</span>
            </h1>
            <p className="text-xl text-gray-text font-medium mb-4">
              Specialization in AI-Enhanced Project Delivery and Program Excellence
            </p>
            <p className="text-lg text-gray-text max-w-3xl mx-auto">
              Integrating AI into project planning, risk assessment, and stakeholder management for successful project outcomes
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
                <p className="text-gray-text leading-relaxed mb-6">The AI for Project Managers program transforms project delivery by integrating artificial intelligence into project planning, resource allocation, and risk management. As projects become increasingly complex and data-driven, project managers must master AI-driven predictive analytics, intelligent scheduling, and automated stakeholder communication.</p>
                <p className="text-gray-text leading-relaxed">This program bridges traditional project management methodologies with modern AI capabilities, preparing professionals to lead intelligent projects, optimize delivery outcomes, and drive program excellence in an AI-enabled environment.</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-3"><Cpu className="w-6 h-6 text-purple-600" />Core Project Capability</h3>
              <p className="text-gray-text leading-relaxed">This program positions AI as a core project capability—embedded within initiation, planning, execution, and closure—while preserving project governance, stakeholder engagement, and delivery excellence.</p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-500">
                <p className="text-gray-text italic">"Preparing graduates for advanced roles in AI-enhanced project management, intelligent program delivery, and strategic portfolio leadership"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={addToRefs} className="overflow-hidden relative py-16 lg:py-24">
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src="/video 1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Program Objectives</h2>
            <p className="text-lg text-white/80 dark:text-white/80 max-w-2xl mx-auto">Five key pillars that define our comprehensive curriculum</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ { icon: <Layers className="w-8 h-8 text-blue-600" />, title: 'Design & Deploy', desc: 'Enable project managers to design, build, and deploy AI-powered project management and collaboration systems' }, { icon: <Brain className="w-8 h-8 text-purple-600" />, title: 'Develop Competencies', desc: 'Develop competencies in AI-driven planning, risk prediction, and intelligent resource optimization' }, { icon: <Shield className="w-8 h-8 text-green-600" />, title: 'Project Rigor', desc: 'Strengthen understanding of evidence-based, governance-aligned, and systematically-sound AI-enabled project management' }, { icon: <Award className="w-8 h-8 text-amber-600" />, title: 'Ethical Awareness', desc: 'Instil ethical awareness around project data, team privacy, and responsible AI in project delivery' }, { icon: <Globe className="w-8 h-8 text-indigo-600" />, title: 'Career Preparation', desc: 'Prepare graduates for advanced roles in project leadership, program management, and portfolio strategy' }, { icon: <Zap className="w-8 h-8 text-rose-600" />, title: 'Innovation Readiness', desc: 'Bridge the gap between project management practice and cutting-edge AI-enabled delivery technology' } ].map((obj, idx) => (
              <div key={idx} className="bg-black/35 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-white/10">
                <div className="mb-4">{obj.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{idx + 1}. {obj.title}</h3>
                <p className="text-white/80 dark:text-white/80 text-sm leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={cardsRef} className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">Embedded Academic Value Additions</h2>
            <p className="text-lg text-gray-text dark:text-gray-text max-w-3xl mx-auto">Designed to integrate project excellence, global relevance, and real-world delivery readiness into modern AI and project management programs.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="value-card group bg-secondary/30 rounded-2xl overflow-hidden shadow-lg border border-border transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="h-48 overflow-hidden"><img src="/global.png" alt="International Credibility" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">International Credibility</h3>
                <ul className="space-y-3 text-gray-text text-sm">
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span>Aligned with global best practices in project management AI, predictive analytics, and intelligent delivery</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span>Emphasis on delivery excellence, governance standards, and ethical AI deployment in projects</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span>Capstone outputs suitable for project frameworks, delivery strategies, or portfolio innovations</span></li>
                </ul>
              </div>
            </div>
            <div className="value-card group bg-secondary/30 rounded-2xl overflow-hidden shadow-lg border border-border transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="h-48 overflow-hidden"><img src="/university.png" alt="University Adoption & Integration" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">University Adoption & Integration</h3>
                <ul className="space-y-3 text-gray-text text-sm">
                  <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span><span>Project-first architecture preserving governance principles, delivery standards, and stakeholder methodologies</span></li>
                  <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span><span>Modular design supports adoption as a specialization track, professional development, or integrated project program</span></li>
                </ul>
              </div>
            </div>
            <div className="value-card group bg-secondary/30 rounded-2xl overflow-hidden shadow-lg border border-border transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="h-48 overflow-hidden"><img src="/engineering.png" alt="Employability & Engineering Readiness" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Employability & Delivery Readiness</h3>
                <ul className="space-y-3 text-gray-text text-sm">
                  <li className="flex items-start gap-2"><span className="text-emerald-600 mt-1">•</span><span>Graduates complete the program with AI-project portfolios and delivery analytics experience</span></li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600 mt-1">•</span><span>Balanced emphasis on project depth, leadership skills, and ethical management responsibility</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={addToRefs} className="overflow-hidden relative py-16 lg:py-24">
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src="/video 2.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Delivery Model</h2>
            <p className="text-lg text-white/80 dark:text-white/80 max-w-3xl mx-auto mb-8">Case-based learning integrated with project simulation platforms and delivery workshops</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="bg-black/35 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6"><Award className="w-8 h-8 text-red-600" /></div>
              <h3 className="text-xl font-bold text-white mb-4">IAISO Certification</h3>
              <div className="space-y-3 text-sm text-white/80">
                <p>Awarded as <strong>Certified Specialist in AI for Project Managers (IAISO)</strong></p>
                <p>Certified by the International Federation for Artificial Intelligence (IAISO) as a management–AI integration program</p>
                <p>Validates advanced competence in AI-powered project management, intelligent delivery, and portfolio strategy</p>
                <p>Confirms ethical, technical, and professional responsibility in AI-enabled projects</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-2xl animate-pulse" />
                <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 flex items-center justify-center border-4 border-white dark:border-slate-700 shadow-2xl"><Globe className="w-32 h-32 text-cyan-600 dark:text-cyan-400" /></div>
              </div>
            </div>
            <div className="bg-black/35 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6"><GraduationCap className="w-8 h-8 text-indigo-600" /></div>
              <h3 className="text-xl font-bold text-white mb-4">Program Investment</h3>
              <div className="space-y-3 text-sm text-white/80">
                <p><strong>Total Program Fee:</strong> USD 1,500</p>
                <p>Inclusive of academic delivery, assessments, capstone evaluation, and IAISO certification issuance</p>
                <p>Designed to deliver high value through globally relevant credentials and delivery-aligned learning outcomes</p>
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
            <p className="text-lg text-white/80 dark:text-white/80 max-w-2xl mx-auto">Project Managers Academic and Professional Advantage</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-black/35 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><GraduationCap className="w-6 h-6 text-emerald-600" />For Management Students</h3>
              <ul className="space-y-4">
                {['Transforms project management into a future-ready discipline centered on AI-enhanced delivery excellence', 'Expands career pathways into project leadership, program management, portfolio strategy, and PMO consulting', 'Strengthens readiness for project leadership roles in AI-first and technology-enabled organizations'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-emerald-600 text-sm">✓</span></span><span className="text-white/80">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-black/35 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><Building2 className="w-6 h-6 text-blue-600" />Institutional Impact</h3>
              <ul className="space-y-4">
                {['Positions the university as a leader in AI-integrated project education and delivery innovation', 'Encourages collaboration across Project Management, Engineering, IT, Data Science, and AI departments'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-blue-600 text-sm">✓</span></span><span className="text-white/80">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div ref={addToRefs} className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Begin Your Journey in AI-Enabled Project Management</h2>
          <p className="text-xl text-white/90 mb-8">Join the next generation of AI-powered project leaders</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">Enroll Now</button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">Download Syllabus</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagersPage;
