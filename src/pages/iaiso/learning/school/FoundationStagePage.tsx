import { useEffect, useRef } from 'react'; 
import { gsap } from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { BookOpen, Brain, Cpu, Shield, Globe, GraduationCap, Award, Building2, Users, Layers, Zap } from 'lucide-react'; 
gsap.registerPlugin(ScrollTrigger);

const FoundationStagePage = () => {
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
              <BookOpen className="w-4 h-4" />
              <span>School Stream</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              AI for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Foundation Stage</span>
            </h1>
            <p className="text-xl text-gray-text font-medium mb-4">Introduction to AI for Young Learners</p>
            <p className="text-lg text-gray-text max-w-3xl mx-auto">Building foundational AI literacy and digital skills for the next generation of innovators</p>
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
                <p className="text-gray-text leading-relaxed mb-6">The AI Foundation Stage introduces young learners to the exciting world of artificial intelligence through age-appropriate, engaging, and interactive experiences. As AI becomes increasingly prevalent in society, it is essential that students develop early literacy in this transformative technology.</p>
                <p className="text-gray-text leading-relaxed">This program fosters curiosity, creativity, and critical thinking while demystifying AI concepts. Students learn to interact with AI tools responsibly, understand basic principles of machine learning, and develop ethical awareness about technology's impact on society.</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-3"><Cpu className="w-6 h-6 text-purple-600" />Core Learning Foundation</h3>
              <p className="text-gray-text leading-relaxed">This program establishes a strong foundation in AI literacy—introducing concepts like pattern recognition, data, algorithms, and automation through hands-on activities—while preserving play-based learning, creativity, and age-appropriate development.</p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-500">
                <p className="text-gray-text italic">"Preparing young learners for a future where AI literacy is as fundamental as reading and mathematics"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={addToRefs} className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Program Objectives</h2>
            <p className="text-lg text-gray-text dark:text-gray-text max-w-2xl mx-auto">Five key pillars that define our foundational curriculum</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ { icon: <Layers className="w-8 h-8 text-blue-600" />, title: 'AI Literacy', desc: 'Introduce foundational AI concepts including what AI is, how it works, and where we encounter it daily' }, { icon: <Brain className="w-8 h-8 text-purple-600" />, title: 'Critical Thinking', desc: 'Develop critical thinking skills to understand AI capabilities, limitations, and ethical considerations' }, { icon: <Shield className="w-8 h-8 text-green-600" />, title: 'Digital Citizenship', desc: 'Build awareness of online safety, privacy, and responsible technology use from an early age' }, { icon: <Award className="w-8 h-8 text-amber-600" />, title: 'Creative Expression', desc: 'Use AI tools for creative projects, storytelling, art, and imaginative exploration' }, { icon: <Globe className="w-8 h-8 text-indigo-600" />, title: 'Future Readiness', desc: 'Prepare students for an AI-enabled world with confidence and adaptability' }, { icon: <Zap className="w-8 h-8 text-rose-600" />, title: 'Collaborative Learning', desc: 'Foster teamwork and communication through AI-assisted group projects and activities' } ].map((obj, idx) => (
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
            <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">Learning Modules</h2>
            <p className="text-lg text-gray-text dark:text-gray-text max-w-3xl mx-auto">Age-appropriate content designed to engage and inspire young minds</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="value-card group bg-secondary/30 rounded-2xl overflow-hidden shadow-lg border border-border transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="h-48 overflow-hidden"><img src="/global.png" alt="International Credibility" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">What is AI?</h3>
                <ul className="space-y-3 text-gray-text text-sm">
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span>Simple explanations of artificial intelligence in everyday language</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span>Examples of AI in games, virtual assistants, and recommendation systems</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span>Difference between human intelligence and machine learning</span></li>
                </ul>
              </div>
            </div>
            <div className="value-card group bg-secondary/30 rounded-2xl overflow-hidden shadow-lg border border-border transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="h-48 overflow-hidden"><img src="/university.png" alt="University Adoption & Integration" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Data & Patterns</h3>
                <ul className="space-y-3 text-gray-text text-sm">
                  <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span><span>Understanding how AI learns from data and recognizes patterns</span></li>
                  <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span><span>Interactive activities for training simple AI models</span></li>
                  <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span><span>Exploring image recognition and classification basics</span></li>
                </ul>
              </div>
            </div>
            <div className="value-card group bg-secondary/30 rounded-2xl overflow-hidden shadow-lg border border-border transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="h-48 overflow-hidden"><img src="/engineering.png" alt="Employability & Engineering Readiness" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">AI & Society</h3>
                <ul className="space-y-3 text-gray-text text-sm">
                  <li className="flex items-start gap-2"><span className="text-emerald-600 mt-1">•</span><span>Ethical considerations and responsible AI use for young learners</span></li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600 mt-1">•</span><span>Understanding bias, fairness, and transparency in AI</span></li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600 mt-1">•</span><span>Privacy awareness and digital citizenship fundamentals</span></li>
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
            <p className="text-lg text-gray-text dark:text-gray-text max-w-3xl mx-auto mb-8">Play-based learning integrated with interactive AI tools and creative projects</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="bg-secondary/30 rounded-2xl p-8 shadow-lg border border-border">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6"><Award className="w-8 h-8 text-red-600" /></div>
              <h3 className="text-xl font-bold text-foreground mb-4">IAISO Certification</h3>
              <div className="space-y-3 text-sm text-gray-text">
                <p>Awarded as <strong>Certified AI Foundations Graduate (IAISO)</strong></p>
                <p>Certified by the International Federation for Artificial Intelligence (IAISO) as a school-level AI literacy program</p>
                <p>Validates foundational AI literacy and responsible technology use</p>
                <p>Recognizes completion of age-appropriate AI curriculum</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-2xl animate-pulse" />
                <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 flex items-center justify-center border-4 border-white dark:border-slate-700 shadow-2xl"><Globe className="w-32 h-32 text-cyan-600 dark:text-cyan-400" /></div>
              </div>
            </div>
            <div className="bg-secondary/30 rounded-2xl p-8 shadow-lg border border-border">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6"><GraduationCap className="w-8 h-8 text-indigo-600" /></div>
              <h3 className="text-xl font-bold text-foreground mb-4">Program Investment</h3>
              <div className="space-y-3 text-sm text-gray-text">
                <p><strong>Total Program Fee:</strong> USD 1,500</p>
                <p>Inclusive of learning materials, hands-on activities, assessments, and IAISO certification</p>
                <p>Designed for engaging, age-appropriate AI education</p>
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
            <p className="text-lg text-gray-text dark:text-gray-text max-w-2xl mx-auto">Foundation Stage Academic and Personal Benefits</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-secondary/30 rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3"><GraduationCap className="w-6 h-6 text-emerald-600" />For Young Learners</h3>
              <ul className="space-y-4">
                {['Builds early confidence in understanding and interacting with technology', 'Develops critical thinking and problem-solving skills through AI activities', 'Fosters creativity and imagination with AI-assisted creative tools', 'Establishes ethical foundation for responsible technology use'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-emerald-600 text-sm">✓</span></span><span className="text-gray-text">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/30 rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3"><Building2 className="w-6 h-6 text-blue-600" />For Schools</h3>
              <ul className="space-y-4">
                {['Positions the school as a pioneer in AI education for young students', 'Integrates seamlessly with existing STEM and digital literacy curricula', 'Encourages collaboration across Technology, Science, Arts, and Ethics departments', 'Prepares students for progression to Application and Advancement stages'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-blue-600 text-sm">✓</span></span><span className="text-gray-text">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div ref={addToRefs} className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Begin Your AI Learning Journey</h2>
          <p className="text-xl text-white/90 mb-8">Join young learners discovering the world of artificial intelligence</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">Enroll Now</button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">Download Curriculum</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationStagePage;
