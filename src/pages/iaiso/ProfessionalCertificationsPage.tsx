import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ChevronRight, Database, Brain, Layers, Sparkles, Bot, Eye, MessageSquare, Target, Server } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Certification {
  id: number;
  name: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

interface Level {
  id: number;
  name: string;
  description: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: 'IAISO Certified Data Science',
    description: 'Comprehensive certification for data science practitioners and professionals',
    icon: Database,
    image: '/data_science.png',
  },
  {
    id: 2,
    name: 'IAISO Certified Machine Learning',
    description: 'Professional certification in machine learning algorithms and applications',
    icon: Brain,
    image: '/machine_learning.jpg',
  },
  {
    id: 3,
    name: 'IAISO Certified Deep Learning',
    description: 'Advanced certification in neural networks and deep learning architectures',
    icon: Layers,
    image: '/deep_learning.jpg',
  },
  {
    id: 4,
    name: 'IAISO Certified Generative AI',
    description: 'Specialized certification in generative AI models and creative applications',
    icon: Sparkles,
    image: '/gen_ai.jpg',
  },
  {
    id: 5,
    name: 'IAISO Certified AI Agent',
    description: 'Professional certification for autonomous AI agent development',
    icon: Bot,
    image: '/ai_agent.jpg',
  },
  {
    id: 6,
    name: 'IAISO Certified Computer Vision & Multimodal AI',
    description: 'Certification in visual AI and multi-sensory machine learning systems',
    icon: Eye,
    image: '/computer_vision.jpg',
  },
  {
    id: 7,
    name: 'IAISO Certified NLP & Large Language Models',
    description: 'Professional certification in natural language processing and LLMs',
    icon: MessageSquare,
    image: '/nlp.jpg',
  },
  {
    id: 8,
    name: 'IAISO Certified Reinforcement Learning & Decision Intelligence',
    description: 'Certification in adaptive learning and intelligent decision systems',
    icon: Target,
    image: '/reinforcement_learning.jpg',
  },
  {
    id: 9,
    name: 'IAISO Certified AI Infrastructure & MLOps',
    description: 'Professional certification in AI deployment and operational practices',
    icon: Server,
    image: '/mlops.jpg',
  },
];

const levels: Level[] = [
  { id: 1, name: 'IAISO Certified AI Associate', description: 'Entry-level certification for foundational AI skills and knowledge' },
  { id: 2, name: 'IAISO Certified AI Professional', description: 'Intermediate certification for applied AI expertise and practical skills' },
  { id: 3, name: 'IAISO Certified AI Expert / Fellow', description: 'Advanced certification for mastery and leadership in AI domains' },
];

const ProfessionalCertificationsPage = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        }
      );

      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (selectedCert && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
      const levelCards = modalRef.current.querySelectorAll('.level-card');
      gsap.fromTo(
        levelCards,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );
    }
  }, [selectedCert]);

  const closeModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => setSelectedCert(null),
      });
    } else {
      setSelectedCert(null);
    }
  };

  return (
    <div className="relative min-h-screen bg-navy-900 pt-24 pb-16 px-6 lg:px-[10vw]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rooman-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-accent/5 rounded-full blur-3xl" />
      </div>

      <div ref={headerRef} className="relative max-w-4xl mx-auto text-center mb-16">
        <span className="inline-block px-4 py-1 text-xs font-medium text-rooman-orange bg-rooman-orange/10 rounded-full mb-4">
          Professional Certifications
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
          IAISO Professional <span className="text-rooman-orange">Certifications</span>
        </h1>
        <p className="text-lg text-gray-text max-w-2xl mx-auto">
          Individual professional certification programs for AI practitioners.
          Progress through 3 levels of expertise.
        </p>
      </div>

      <div ref={gridRef} className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {certifications.map((cert) => {
          return (
            <div
              key={cert.id}
              className="group relative bg-navy-800/50 border border-border rounded-2xl overflow-hidden hover:border-rooman-orange/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-rooman-orange/10"
            >
              <div className="relative h-40 bg-gradient-to-br from-navy-700 to-navy-800 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-rooman-orange transition-colors duration-300 line-clamp-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-text mb-4 line-clamp-2">
                  {cert.description}
                </p>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-3 px-4 bg-rooman-orange/10 hover:bg-rooman-orange text-rooman-orange hover:text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  View Details
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-navy-800 border border-border rounded-3xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-8">
              <span className="inline-block px-3 py-1 text-xs font-medium text-rooman-orange bg-rooman-orange/10 rounded-full mb-3">
                Certification Levels
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-2">
                {selectedCert.name}
              </h2>
              <p className="text-gray-text">{selectedCert.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {levels.map((level) => (
                <div
                  key={level.id}
                  className="level-card group bg-navy-900/50 border border-border rounded-xl p-5 hover:border-rooman-orange/50 hover:bg-navy-900/80 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-rooman-orange/20 flex items-center justify-center mb-4 group-hover:bg-rooman-orange/30 transition-colors">
                    <span className="font-bold text-rooman-orange">{level.id}</span>
                  </div>

                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 rounded-lg bg-rooman-orange/20 flex items-center justify-center">
                      <span className="text-rooman-orange font-bold text-sm">L{level.id}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-sm font-semibold text-center mb-2 group-hover:text-rooman-orange transition-colors line-clamp-2">
                    {level.name}
                  </h3>

                  <p className="text-xs text-gray-text text-center mb-4 line-clamp-3">
                    {level.description}
                  </p>

                  <button className="w-full py-2 px-3 bg-rooman-orange/10 hover:bg-rooman-orange text-rooman-orange hover:text-white text-xs font-medium rounded-lg transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-gray-text">
                Progress through all 3 levels to achieve mastery in {selectedCert.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessionalCertificationsPage;
