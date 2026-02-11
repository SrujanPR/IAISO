import { useEffect, useRef } from 'react'; 
import { gsap } from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { Lightbulb, Brain, Cpu, Shield, Globe, GraduationCap, Award, Building2, Users, Layers, Zap } from 'lucide-react'; 
gsap.registerPlugin(ScrollTrigger);

const ApplicationStagePage = () => {
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
              <Lightbulb className="w-4 h-4" />
              <span>School Stream</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              AI for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Application Stage</span>
            </h1>
            <p className="text-xl text-gray-text font-medium mb-4">
              Applying AI Concepts in Real-World Projects
            </p>
            <p className="text-lg text-gray-text max-w-3xl mx-auto">
              Hands-on AI application and project-based learning for developing practical skills
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
                <p className="text-gray-text leading-relaxed mb-6">The AI Application Stage bridges theoretical knowledge with practical implementation, enabling students to apply AI concepts to real-world problems. Through project-based learning, students develop hands-on skills in working with AI tools, training models, and creating AI-powered solutions.</p>
                <p className="text-gray-text leading-relaxed">This program emphasizes experiential learning, collaboration, and innovation. Students work on meaningful projects that demonstrate AI's potential across various domains while deepening their understanding of technical and ethical considerations.</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-3"><Cpu className="w-6 h-6 text-purple-600" />Practical AI Skills</h3>
              <p className="text-gray-text leading-relaxed">This program develops practical AI capabilities through hands-on projects—training models, building applications, and solving real problems—while maintaining focus on creativity, critical thinking, and ethical development.</p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-500">
                <p className="text-gray-text italic">"Transforming students from AI consumers into AI creators through practical application and innovation"</p>
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
            <p className="text-lg text-white/80 dark:text-white/80 max-w-2xl mx-auto">Five key pillars that define our application-focused curriculum</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ { icon: <Layers className="w-8 h-8 text-blue-600" />, title: 'Project Development', desc: 'Build real AI projects using no-code and low-code platforms, APIs, and development tools' }, { icon: <Brain className="w-8 h-8 text-purple-600" />, title: 'Model Training', desc: 'Learn to train, test, and evaluate machine learning models with real datasets' }, { icon: <Shield className="w-8 h-8 text-green-600" />, title: 'Ethical Development', desc: 'Apply ethical frameworks to AI projects addressing bias, fairness, and transparency' }, { icon: <Award className="w-8 h-8 text-amber-600" />, title: 'Portfolio Building', desc: 'Create a portfolio of AI projects demonstrating skills and creativity' }, { icon: <Globe className="w-8 h-8 text-indigo-600" />, title: 'Problem Solving', desc: 'Use AI to solve authentic problems in education, environment, health, and community' }, { icon: <Zap className="w-8 h-8 text-rose-600" />, title: 'Collaboration', desc: 'Work in teams on complex projects, developing communication and project management skills' } ].map((obj, idx) => (
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
            <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">Project Areas</h2>
            <p className="text-lg text-gray-text dark:text-gray-text max-w-3xl mx-auto">Hands-on projects across multiple domains and applications</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="value-card group bg-secondary/30 rounded-2xl overflow-hidden shadow-lg border border-border transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="h-48 overflow-hidden"><img src="/global.png" alt="International Credibility" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">AI Applications</h3>
                <ul className="space-y-3 text-gray-text text-sm">
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span>Building chatbots and conversational AI interfaces</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span>Creating image recognition and classification apps</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span>Developing recommendation systems and predictive tools</span></li>
                </ul>
              </div>
            </div>
            <div className="value-card group bg-secondary/30 rounded-2xl overflow-hidden shadow-lg border border-border transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="h-48 overflow-hidden"><img src="/university.png" alt="University Adoption & Integration" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Data & Analysis</h3>
                <ul className="space-y-3 text-gray-text text-sm">
                  <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span><span>Working with datasets, cleaning, and preprocessing</span></li>
                  <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span><span>Visualizing data and extracting insights with AI</span></li>
                  <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span><span>Training models with supervised and unsupervised learning</span></li>
                </ul>
              </div>
            </div>
            <div className="value-card group bg-secondary/30 rounded-2xl overflow-hidden shadow-lg border border-border transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="h-48 overflow-hidden"><img src="/engineering.png" alt="Employability & Engineering Readiness" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Social Impact</h3>
                <ul className="space-y-3 text-gray-text text-sm">
                  <li className="flex items-start gap-2"><span className="text-emerald-600 mt-1">•</span><span>AI for social good: addressing community challenges</span></li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600 mt-1">•</span><span>Environmental monitoring and sustainability projects</span></li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600 mt-1">•</span><span>Accessibility and inclusive design with AI</span></li>
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
            <p className="text-lg text-white/80 dark:text-white/80 max-w-3xl mx-auto mb-8">Project-based learning with mentorship and real-world applications</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="bg-black/35 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6"><Award className="w-8 h-8 text-red-600" /></div>
              <h3 className="text-xl font-bold text-white mb-4">IAISO Certification</h3>
              <div className="space-y-3 text-sm text-white/80">
                <p>Awarded as <strong>Certified AI Application Developer (IAISO)</strong></p>
                <p>Certified by the International Federation for Artificial Intelligence (IAISO) as a school-level applied AI program</p>
                <p>Validates practical AI development skills and project completion</p>
                <p>Recognizes ability to build functional AI-powered applications</p>
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
                <p>Inclusive of development tools, project resources, mentorship, assessments, and IAISO certification</p>
                <p>Designed for practical, hands-on AI education and portfolio development</p>
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
            <p className="text-lg text-white/80 dark:text-white/80 max-w-2xl mx-auto">Application Stage Academic and Professional Benefits</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-black/35 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><GraduationCap className="w-6 h-6 text-emerald-600" />For Students</h3>
              <ul className="space-y-4">
                {['Develops practical skills to build real AI applications and solutions', 'Creates a portfolio demonstrating AI competency for future opportunities', 'Builds confidence through hands-on project completion and problem-solving', 'Prepares students for advanced studies in AI, CS, and technology fields'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-emerald-600 text-sm">✓</span></span><span className="text-white/80">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-black/35 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><Building2 className="w-6 h-6 text-blue-600" />For Schools</h3>
              <ul className="space-y-4">
                {['Positions the school as a leader in practical AI education and innovation', 'Enables integration with existing technology, science, and arts programs', 'Encourages interdisciplinary collaboration across multiple subjects', 'Prepares students for progression to Advancement Stage and beyond'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-blue-600 text-sm">✓</span></span><span className="text-white/80">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div ref={addToRefs} className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Apply Your AI Knowledge</h2>
          <p className="text-xl text-white/90 mb-8">Join students building real AI applications and solving real problems</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">Enroll Now</button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">Download Curriculum</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStagePage;
