import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Brain, Cpu, Shield, Globe, GraduationCap, Award, Building2, Users, Layers, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AdvancementStagePage = () => {
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
              <Trophy className="w-4 h-4" />
              <span>School Stream</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              AI for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Advancement Stage</span>
            </h1>
            <p className="text-xl text-gray-text font-medium mb-4">Advanced AI Mastery and Innovation Leadership</p>
            <p className="text-lg text-gray-text max-w-3xl mx-auto">Comprehensive AI development, innovation projects, and preparation for professional pathways</p>
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
                <p className="text-gray-text leading-relaxed mb-6">The AI Advancement Stage represents the pinnacle of school-level AI education, preparing students for professional pathways, higher education, and innovation leadership. Through advanced projects, research initiatives, and mentorship, students master sophisticated AI concepts and develop expertise comparable to early-career professionals.</p>
                <p className="text-gray-text leading-relaxed">This program emphasizes independent research, innovation, and thought leadership. Students contribute to the AI community through publications, competitions, and open-source projects while developing the skills and mindset needed for future careers in technology, research, and entrepreneurship.</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-3"><Cpu className="w-6 h-6 text-purple-600" />Advanced AI Mastery</h3>
              <p className="text-gray-text leading-relaxed">This program cultivates expert-level AI capabilities through research projects, competitions, and innovation challenges—developing skills in deep learning, neural networks, and AI architecture—while fostering leadership, entrepreneurship, and research excellence.</p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-500">
                <p className="text-gray-text italic">"Developing the next generation of AI researchers, innovators, and technology leaders who will shape the future"</p>
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
            <p className="text-lg text-white/80 dark:text-white/80 max-w-2xl mx-auto">Five key pillars that define our advancement curriculum</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ { icon: <Layers className="w-8 h-8 text-blue-600" />, title: 'Research Excellence', desc: 'Conduct independent AI research projects with mentorship from industry and academic experts' }, { icon: <Brain className="w-8 h-8 text-purple-600" />, title: 'Advanced Techniques', desc: 'Master deep learning, neural architectures, reinforcement learning, and cutting-edge AI methods' }, { icon: <Shield className="w-8 h-8 text-green-600" />, title: 'Ethical Leadership', desc: 'Lead discussions on AI ethics, policy, and responsible innovation in the technology community' }, { icon: <Award className="w-8 h-8 text-amber-600" />, title: 'Competition Success', desc: 'Participate in and win AI competitions, hackathons, and research challenges globally' }, { icon: <Globe className="w-8 h-8 text-indigo-600" />, title: 'Publication & Impact', desc: 'Publish research, contribute to open-source projects, and create meaningful AI solutions' }, { icon: <Zap className="w-8 h-8 text-rose-600" />, title: 'Career Preparation', desc: 'Build professional networks, gain internships, and prepare for university and career pathways' } ].map((obj, idx) => (
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
            <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">Advanced Focus Areas</h2>
            <p className="text-lg text-gray-text dark:text-gray-text max-w-3xl mx-auto">Specialized tracks for deep expertise and innovation</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="value-card group bg-secondary/30 rounded-2xl overflow-hidden shadow-lg border border-border transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="h-48 overflow-hidden"><img src="/global.png" alt="International Credibility" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Deep Learning & Neural Networks</h3>
                <ul className="space-y-3 text-gray-text text-sm">
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span>Design and train complex neural network architectures</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span>Implement CNNs, RNNs, Transformers, and GANs</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span>Work with large-scale datasets and distributed training</span></li>
                </ul>
              </div>
            </div>
            <div className="value-card group bg-secondary/30 rounded-2xl overflow-hidden shadow-lg border border-border transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="h-48 overflow-hidden"><img src="/university.png" alt="University Adoption & Integration" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">AI Research & Innovation</h3>
                <ul className="space-y-3 text-gray-text text-sm">
                  <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span><span>Conduct original research in AI/ML under expert mentorship</span></li>
                  <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span><span>Publish papers and present at student research conferences</span></li>
                  <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span><span>Contribute to cutting-edge open-source AI projects</span></li>
                </ul>
              </div>
            </div>
            <div className="value-card group bg-secondary/30 rounded-2xl overflow-hidden shadow-lg border border-border transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="h-48 overflow-hidden"><img src="/engineering.png" alt="Employability & Engineering Readiness" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">AI Entrepreneurship</h3>
                <ul className="space-y-3 text-gray-text text-sm">
                  <li className="flex items-start gap-2"><span className="text-emerald-600 mt-1">•</span><span>Develop AI-powered products and business ventures</span></li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600 mt-1">•</span><span>Learn startup fundamentals and technology commercialization</span></li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600 mt-1">•</span><span>Pitch to investors and participate in startup incubators</span></li>
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
            <p className="text-lg text-white/80 dark:text-white/80 max-w-3xl mx-auto mb-8">Mentorship-driven research and innovation with industry connections</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="bg-black/35 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6"><Award className="w-8 h-8 text-red-600" /></div>
              <h3 className="text-xl font-bold text-white mb-4">IAISO Certification</h3>
              <div className="space-y-3 text-sm text-white/80">
                <p>Awarded as <strong>Certified AI Advancement Graduate (IAISO)</strong></p>
                <p>Certified by the International Federation for Artificial Intelligence (IAISO) as an advanced school-level AI program</p>
                <p>Validates expert-level AI knowledge and research capabilities</p>
                <p>Recognizes readiness for university-level AI studies and professional roles</p>
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
                <p>Inclusive of advanced tools, research resources, mentorship, competition fees, and IAISO certification</p>
                <p>Designed for elite AI education and preparation for professional pathways</p>
                <p className="pt-2 border-t border-border"><strong>Curriculum Architecture:</strong> Each Semester | Total Program – 480 Hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={addToRefs} className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-4">Value to Students</h2>
            <p className="text-lg text-white/80 dark:text-white/80 max-w-2xl mx-auto">Advancement Stage Academic and Professional Benefits</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-black/35 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><GraduationCap className="w-6 h-6 text-emerald-600" />For Students</h3>
              <ul className="space-y-4">
                {['Achieves mastery-level AI competency comparable to early professionals', 'Builds a distinguished portfolio including research, competitions, and publications', 'Establishes professional networks with mentors, industry experts, and peers', 'Prepares for top-tier university programs and competitive career opportunities'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-emerald-600 text-sm">✓</span></span><span className="text-white/80">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-black/35 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><Building2 className="w-6 h-6 text-blue-600" />For Schools</h3>
              <ul className="space-y-4">
                {['Positions the school as an elite center for AI education and research', 'Attracts partnerships with universities, tech companies, and research institutions', 'Produces graduates who become ambassadors and future leaders in AI', 'Creates a pipeline of talented students for STEM and innovation careers'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-blue-600 text-sm">✓</span></span><span className="text-white/80">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div ref={addToRefs} className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Master Artificial Intelligence</h2>
          <p className="text-xl text-white/90 mb-8">Join elite students leading the future of AI innovation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">Enroll Now</button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">Download Curriculum</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdvancementStagePage;
