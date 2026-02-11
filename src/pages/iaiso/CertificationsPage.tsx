import BackgroundElements from '@/components/BackgroundElements';
import { Award, CheckCircle, BookOpen, Clock, ArrowRight } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'AI Fundamentals',
    description: 'Master the basics of artificial intelligence, machine learning, and deep learning concepts.',
    duration: '8 weeks',
    level: 'Beginner',
    icon: Award,
  },
  {
    id: 2,
    title: 'Cloud Architecture',
    description: 'Learn to design and implement scalable cloud solutions across major providers.',
    duration: '12 weeks',
    level: 'Intermediate',
    icon: Award,
  },
  {
    id: 3,
    title: 'Cybersecurity Expert',
    description: 'Comprehensive training in security protocols, threat detection, and risk management.',
    duration: '16 weeks',
    level: 'Advanced',
    icon: Award,
  },
  {
    id: 4,
    title: 'DevOps Professional',
    description: 'End-to-end DevOps practices including CI/CD, containerization, and orchestration.',
    duration: '10 weeks',
    level: 'Intermediate',
    icon: Award,
  },
  {
    id: 5,
    title: 'Data Engineering',
    description: 'Build data pipelines, warehouses, and analytics solutions for enterprise scale.',
    duration: '14 weeks',
    level: 'Intermediate',
    icon: Award,
  },
  {
    id: 6,
    title: 'Blockchain Developer',
    description: 'Develop smart contracts and decentralized applications on leading blockchain platforms.',
    duration: '12 weeks',
    level: 'Advanced',
    icon: Award,
  },
];

const features = [
  'Industry-recognized credentials',
  'Hands-on practical projects',
  'Expert-led training sessions',
  'Lifetime access to materials',
  'Career support and placement',
];

const CertificationsPage = () => {
  return (
    <>
      <BackgroundElements />
      <section className="relative w-full min-h-screen bg-background text-foreground px-6 lg:px-[10vw] py-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-rooman-orange mb-4">
            IAISO - Indian AI & IT Solutions Organization
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Certifications
          </h1>
          <p className="text-lg md:text-xl text-gray-text leading-relaxed">
            Earn industry-recognized certifications that validate your skills and accelerate your career 
            in AI, cloud, cybersecurity, and emerging technologies.
          </p>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-secondary/50"
              >
                <CheckCircle className="w-5 h-5 text-rooman-green flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-8">
            Available Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="group relative p-6 rounded-xl border border-border bg-secondary/30 hover:border-rooman-orange/50 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-rooman-orange/10 flex items-center justify-center flex-shrink-0">
                    <cert.icon className="w-6 h-6 text-rooman-orange" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-1">
                      {cert.title}
                    </h3>
                    <span className="text-xs text-rooman-orange font-medium">
                      {cert.level}
                    </span>
                  </div>
                </div>
                <p className="text-gray-text text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-text mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{cert.duration}</span>
                </div>
                <button className="flex items-center gap-2 text-sm text-rooman-orange font-medium group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <div className="p-8 rounded-2xl border border-rooman-orange/30 bg-rooman-orange/5">
            <BookOpen className="w-12 h-12 text-rooman-orange mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-semibold mb-4">
              Ready to Get Certified?
            </h3>
            <p className="text-gray-text mb-6 max-w-lg mx-auto">
              Join thousands of professionals who have advanced their careers with IAISO certifications.
            </p>
            <button className="px-8 py-3 bg-rooman-orange text-white font-medium rounded-lg hover:bg-rooman-orange/90 transition-colors">
              Browse All Programs
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CertificationsPage;
