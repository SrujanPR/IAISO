import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import HexagonImage from '@/components/HexagonImage';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Form animation
      gsap.fromTo(
        formRef.current,
        { x: '-8vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 75%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { x: '8vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 75%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you within two business days.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-navy-800 py-20 lg:py-32 z-40"
    >
      <div className="relative z-10 w-full px-6 lg:px-[10vw]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Form */}
          <div ref={formRef} className="lg:w-[40vw]">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-blue-accent mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-4">
              Let's build what's next.
            </h2>
            <p className="text-lg text-gray-text mb-8">
              Tell us what you're shipping. We'll reply within two business days.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-text">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="bg-navy-900/50 border-border text-foreground placeholder:text-gray-text/50 focus:border-blue-accent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-text">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="you@company.com"
                    className="bg-navy-900/50 border-border text-foreground placeholder:text-gray-text/50 focus:border-blue-accent"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-gray-text">
                  Company
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Your company"
                  className="bg-navy-900/50 border-border text-foreground placeholder:text-gray-text/50 focus:border-blue-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-text">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="bg-navy-900/50 border-border text-foreground placeholder:text-gray-text/50 focus:border-blue-accent resize-none"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  className="group flex items-center gap-2 px-6 py-3 bg-blue-accent text-white font-medium rounded-lg hover:bg-blue-dark transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Send message
                </button>
                <a
                  href="mailto:online@rooman.net"
                  className="flex items-center gap-2 text-gray-text hover:text-blue-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Or email: online@rooman.net
                </a>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium mb-1">Office</div>
                  <div className="text-sm text-gray-text">
                    30, 12th Main Rd, 1st Stage
                    <br />
                    Rajajinagar, Bengaluru 560010
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium mb-1">Phone</div>
                  <div className="text-sm text-gray-text">08069451000</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div ref={imageRef} className="lg:w-[36vw] flex items-center">
            <HexagonImage
              src="/contact_team.jpg"
              alt="Our Team"
              size="lg"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
