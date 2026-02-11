import BackgroundElements from '@/components/BackgroundElements';
import SquishyCard from '@/components/ui/squishy-card-component';
import { CircularTestimonials } from '@/components/ui/circular-testimonials';
import { Shield, Users, Calendar, BookOpen } from 'lucide-react';

const membershipPlans = [
  {
    id: 'observer',
    badge: 'Observer (Free)',
    title: 'Observer Membership',
    price: 'Free',
    period: '/year',
    description: 'Access to IAISO standards and public events. Ideal for students and first-time participants.',
    cta: 'Join as Observer',
    highlighted: false,
    features: [
      'Access to published IAISO standards',
      'Access to public webinars & events',
      'Standards updates & release notes',
      'Community announcements & newsletter',
    ],
  },
  {
    id: 'contributor',
    badge: 'Contributor',
    title: 'Contributor Membership',
    price: '$500',
    period: '/year',
    description: 'For professionals who want to shape standards through feedback, draft reviews, and voting rights.',
    cta: 'Become a Contributor',
    highlighted: true,
    features: [
      'Everything in Observer',
      'Access to draft standards & working groups',
      'Input on drafts and change proposals',
      'Voting rights on standards releases',
    ],
  },
  {
    id: 'corporate',
    badge: 'Corporate / Premium',
    title: 'Corporate / Premium Membership',
    price: '$5,000+',
    period: '/year',
    description: 'For organizations needing priority access, training pathways, and assessor enablement.',
    cta: 'Contact for Premium',
    highlighted: false,
    features: [
      'Everything in Contributor',
      'Priority access to assessors & standards office hours',
      'Assessor training and enablement tracks',
      'Premium support for certification readiness',
    ],
  },
];

const stats = [
  { icon: Users, value: '25,000+', label: 'Active Members' },
  { icon: Calendar, value: '150+', label: 'Events Per Year' },
  { icon: BookOpen, value: '500+', label: 'Learning Resources' },
  { icon: Shield, value: '100%', label: 'Certification Pass Rate' },
];

const testimonials = [
  {
    quote:
      "IAISO membership transformed my career. The certifications and mentorship helped me land my dream role and build a stronger professional network.",
    name: 'Priya Sharma',
    designation: 'AI Engineer',
    src:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      "The learning resources and events are world-class. I found mentors, collaborators, and practical guidance for building responsible AI systems.",
    name: 'Rahul Verma',
    designation: 'Technology Leader',
    src:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      "As an enterprise member, IAISO helped us align teams on standards, assess readiness, and upskill faster with structured pathways.",
    name: 'Anita Desai',
    designation: 'VP Engineering',
    src:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const MembershipPage = () => {
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
            Membership
          </h1>
          <p className="text-lg md:text-xl text-gray-text leading-relaxed">
            Join India's largest community of AI and IT professionals. 
            Access exclusive resources, certifications, and networking opportunities.
          </p>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-border bg-secondary/30">
                <stat.icon className="w-8 h-8 text-rooman-orange mx-auto mb-3" />
                <div className="font-heading text-2xl font-bold text-rooman-orange mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-text">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-12">
            Choose Your Membership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan) => (
              <div key={plan.id} className={plan.highlighted ? 'md:-mt-4' : ''}>
                <SquishyCard
                  badge={plan.badge}
                  title={plan.title}
                  price={plan.price}
                  period={plan.period}
                  description={plan.description}
                  features={plan.features}
                  cta={plan.cta}
                  highlighted={plan.highlighted}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-12">
            What Our Members Say
          </h2>
          <div className="rounded-2xl border border-border bg-secondary/30">
            <div className="flex items-center justify-center px-4 py-10">
              <CircularTestimonials
                testimonials={testimonials}
                autoplay={true}
                colors={{
                  name: 'hsl(var(--foreground))',
                  designation: 'hsl(var(--muted-foreground))',
                  testimony: 'hsl(var(--muted-foreground))',
                  arrowBackground: 'rgba(245, 138, 31, 0.12)',
                  arrowForeground: '#f58a1f',
                  arrowHoverBackground: '#f58a1f',
                }}
                fontSizes={{
                  name: '28px',
                  designation: '16px',
                  quote: '18px',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MembershipPage;
