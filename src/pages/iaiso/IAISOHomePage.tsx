import { Link } from 'react-router-dom';
import BackgroundElements from '@/components/BackgroundElements';
import ModernBackgroundPaths from '@/components/ui/modern-background-paths';
import {
  ScrollXCarousel,
  ScrollXCarouselContainer,
  ScrollXCarouselProgress,
  ScrollXCarouselWrap,
} from '@/components/ui/scroll-x-carousel';
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from '@/components/ui/reveal-on-hover';
import { 
  Award,
  BookOpen,
  Users, 
  Calendar,
  Brain,
  ArrowRight,
  CheckCircle,
  Globe,
  TrendingUp
} from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Industry Certifications',
    description: 'Get certified in AI, cloud, cybersecurity, and emerging technologies with industry-recognized credentials.',
    link: '/system-certifications',
    color: 'rooman-orange',
  },
  {
    icon: BookOpen,
    title: 'Expert-Led Learning',
    description: 'Access world-class courses and hands-on labs designed by industry experts and top educators.',
    link: '/learning/engineering/software',
    color: 'rooman-green',
  },
  {
    icon: Users,
    title: 'Professional Network',
    description: 'Join India\'s largest community of AI and IT professionals. Connect, collaborate, and grow.',
    link: '/membership',
    color: 'blue-accent',
  },
  {
    icon: Calendar,
    title: 'Events & Conferences',
    description: 'Attend conferences, workshops, hackathons, and networking events across India.',
    link: '/events',
    color: 'rooman-orange',
  },
];

const offerSlides = [
  {
    id: 'offer-1',
    title: features[0].title,
    description: features[0].description,
    link: features[0].link,
    services: ['certifications', 'standards'],
    type: 'certifications',
    imageUrl:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'offer-2',
    title: features[1].title,
    description: features[1].description,
    link: features[1].link,
    services: ['learning', 'labs', 'courses'],
    type: 'learning',
    imageUrl:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'offer-3',
    title: features[2].title,
    description: features[2].description,
    link: features[2].link,
    services: ['community', 'networking'],
    type: 'community',
    imageUrl:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'offer-4',
    title: features[3].title,
    description: features[3].description,
    link: features[3].link,
    services: ['events', 'conferences'],
    type: 'events',
    imageUrl:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const highlights = [
  'Industry-recognized certifications',
  'Expert-led training programs',
  'Networking opportunities',
  'Career advancement support',
  'Access to latest technologies',
  'Community-driven learning',
];

const IAISOHomePage = () => {
  return (
    <>
      <BackgroundElements />
      <div className="relative w-full min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <ModernBackgroundPaths
          title="IAISO"
          description="International Artificial Intelligence Standards Organisation brings together professionals, organizations, and assessors to build trusted AI standards and capabilities."
          ctaLabel="JOIN IAISO"
          backgroundVideoSrc="/video 3.mp4"
          ctaHref="/membership"
          ctaVariant="default"
          ctaClassName="bg-rooman-orange text-white hover:bg-rooman-orange/90"
          titleGradientClassName="bg-gradient-to-br from-rooman-orange via-orange-500 to-amber-500"
        />

        {/* Features Section */}
        <section className="relative px-0 lg:px-0 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
                What We Offer
              </h2>
              <p className="text-gray-text max-w-2xl mx-auto">
                Comprehensive solutions for individuals and organizations looking to 
                upskill in AI, cloud, cybersecurity, and emerging technologies.
              </p>
            </div>
            <ScrollXCarousel className="h-[150vh]">
              <ScrollXCarouselContainer className="h-dvh place-content-center flex flex-col gap-8 py-12">
                <div className="pointer-events-none w-[12vw] h-[103%] absolute inset-[0_auto_0_0] z-10 bg-[linear-gradient(90deg,_var(--background)_35%,_transparent)]" />
                <div className="pointer-events-none bg-[linear-gradient(270deg,_var(--background)_35%,_transparent)] w-[15vw] h-[103%] absolute inset-[0_0_0_auto] z-10" />

                <ScrollXCarouselWrap
                  className="flex-4/5 flex space-x-8 [&>*:first-child]:ml-8"
                  xRange={['-0%', '-60%']}
                >
                  {offerSlides.map((slide) => (
                    <Link key={slide.id} to={slide.link} className="block">
                      <CardHoverReveal className="min-w-[70vw] md:min-w-[38vw] xl:min-w-[30vw] shadow-xl border border-border rounded-xl bg-secondary/30">
                        <CardHoverRevealMain>
                          <img
                            alt={slide.title}
                            src={slide.imageUrl}
                            className="size-full aspect-square object-cover"
                            loading="lazy"
                          />
                        </CardHoverRevealMain>
                        <CardHoverRevealContent className="space-y-4 rounded-2xl bg-[rgba(0,0,0,.55)] backdrop-blur-3xl p-4 border border-white/10">
                          <div className="space-y-2">
                            <h3 className="text-white capitalize font-medium">
                              {slide.title}
                            </h3>
                            <p className="text-white/80 text-sm">{slide.description}</p>
                            <span className="inline-flex items-center gap-2 text-sm text-rooman-orange font-medium pt-2">
                              Learn more
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </CardHoverRevealContent>
                      </CardHoverReveal>
                    </Link>
                  ))}
                </ScrollXCarouselWrap>

                <ScrollXCarouselProgress
                  className="bg-secondary mx-8 h-1 rounded-full overflow-hidden"
                  progressStyle="size-full bg-rooman-orange/70 rounded-full"
                />
              </ScrollXCarouselContainer>
            </ScrollXCarousel>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="relative px-6 lg:px-[10vw] py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                  Why Choose IAISO?
                </h2>
                <ul className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-rooman-green flex-shrink-0" />
                      <span className="text-gray-text">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center"
                      >
                        <Users className="w-4 h-4 text-gray-text" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-text">
                    Join <span className="text-rooman-orange font-medium">50,000+</span> professionals
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-rooman-green/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative p-8 rounded-2xl border border-rooman-green/30 bg-rooman-green/5">
                  <div className="flex items-center gap-4 mb-6">
                    <Globe className="w-12 h-12 text-rooman-green" />
                    <div>
                      <h3 className="font-heading text-xl font-semibold">Pan-India Presence</h3>
                      <p className="text-sm text-gray-text">20+ cities across India</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: 'Bangalore', value: 'HQ' },
                      { label: 'Delhi NCR', value: 'Regional Office' },
                      { label: 'Mumbai', value: 'Regional Office' },
                      { label: 'Hyderabad', value: 'Training Center' },
                      { label: 'Chennai', value: 'Training Center' },
                    ].map((city, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                        <span className="font-medium">{city.label}</span>
                        <span className="text-sm text-gray-text">{city.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rooman AI Solutions CTA */}
        <section className="relative px-6 lg:px-[10vw] py-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 lg:p-12 rounded-2xl border border-rooman-orange/30 bg-rooman-orange/5 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rooman-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rooman-orange/20 text-rooman-orange text-xs font-medium mb-4">
                    <Brain className="w-3 h-3" />
                    Enterprise Solutions
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
                    Rooman AI Solutions
                  </h3>
                  <p className="text-gray-text mb-6">
                    Enterprise-grade AI and cloud solutions for businesses. 
                    Transform your organization with cutting-edge technology.
                  </p>
                  <Link
                    to="/rooman-ai-solutions"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-rooman-orange text-white font-medium rounded-lg hover:bg-rooman-orange/90 transition-colors"
                  >
                    Explore Solutions
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-text">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-rooman-orange" />
                    <span>500+ Enterprise Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Links */}
        <section className="relative px-6 lg:px-[10vw] py-16 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-heading font-semibold mb-2">IAISO</h4>
                <p className="text-sm text-gray-text">
                  Indian AI & IT Solutions Organization
                </p>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <Link to="/system-certifications" className="text-gray-text hover:text-rooman-orange transition-colors">
                  Certifications
                </Link>
                <Link to="/learning/engineering/software" className="text-gray-text hover:text-rooman-orange transition-colors">
                  Learning
                </Link>
                <Link to="/membership" className="text-gray-text hover:text-rooman-orange transition-colors">
                  Membership
                </Link>
                <Link to="/events" className="text-gray-text hover:text-rooman-orange transition-colors">
                  Events
                </Link>
                <Link to="/rooman-ai-solutions" className="text-gray-text hover:text-rooman-orange transition-colors">
                  Rooman AI Solutions
                </Link>
              </div>
              <Link 
                to="/rooman"
                className="text-sm text-gray-text hover:text-rooman-orange transition-colors inline-flex items-center gap-2"
              >
                About Rooman
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IAISOHomePage;
