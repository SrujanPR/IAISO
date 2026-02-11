import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/sections/HeroSection';
import IntegrateSection from '@/sections/IntegrateSection';
import EmpowerSection from '@/sections/EmpowerSection';
import CapabilitiesSection from '@/sections/CapabilitiesSection';
import IndustriesSection from '@/sections/IndustriesSection';
import AboutSection from '@/sections/AboutSection';
import CareersSection from '@/sections/CareersSection';
import ContactSection from '@/sections/ContactSection';
import BackgroundElements from '@/components/BackgroundElements';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  {
    name: 'Shivamogga Smart City',
    logo: '/clients/shivamogga-smart-city.png',
  },
  {
    name: 'Income Tax Department',
    logo: '/clients/income-tax-department.png',
  },
  {
    name: 'Karnataka Power Corporation Ltd',
    logo: '/clients/karnataka-power-corporation.png',
  },
  {
    name: 'Raj Bhavan Karnataka',
    logo: '/clients/raj-bhavan-karnataka.webp',
  },
  {
    name: 'Department of Post India',
    logo: '/clients/department-of-post-india.png',
  },
  {
    name: 'Namma Metro',
    logo: '/clients/namma-metro.png',
  },
  {
    name: 'Indian Academy of Sciences',
    logo: '/clients/indian-academy-of-sciences.png',
  },
  {
    name: 'Defence Department Accounts',
    logo: '/clients/defence-department-accounts.png',
  },
  {
    name: 'Karnataka State Police',
    logo: '/clients/karnataka-state-police.png',
  },
  {
    name: 'Karnataka Exam Authority',
    logo: '/clients/KEA.jpg',
  },
  {
    name: 'Karnataka Revenue Department',
    logo: '/clients/KRD.jpg',
  },
  {
    name: 'Centre of e-Governance',
    logo: '/clients/Centre of e-Governance.png',
  },
  {
    name: 'BESCOM',
    logo: '/clients/BESCOM.png',
  },
  {
    name: 'Nemmadi Kendra',
    logo: '/clients/Nemmadi Kendra.png',
  },
  {
    name: 'SBI',
    logo: '/clients/SBI.png',
  },
  {
    name: 'Dimension Data',
    logo: '/clients/Dimension Data.svg',
  },
  {
    name: 'Schneider Eletric',
    logo: '/clients/Schneider Eletric.png',
  },
  {
    name: 'HP',
    logo: '/clients/HP.svg',
  },
  {
    name: 'Infosys',
    logo: '/clients/Infosys.webp',
  },
  {
    name: 'KIADB',
    logo: '/clients/KIADB.png',
  },
];

const qualityItems = [
  {
    name: 'Nasscom',
    logo: '/clients/nasscom.webp',
  },
  {
    name: 'Assocham',
    logo: '/clients/assocham.png',
  },
  {
    name: 'ESSCI',
    logo: '/clients/ESSCI.png',
  },
  {
    name: 'NSDC',
    logo: '/clients/NSDC.png',
  },
  {
    name: 'FICCI',
    logo: '/clients/FICCI.png',
  },
  {
    name: 'TSSC',
    logo: '/clients/TSSC.png',
  },
  {
    name: 'BFSI',
    logo: '/clients/BFSI.png',
  },
  {
    name: 'DSCI',
    logo: '/clients/DSCI.png',
  },
  {
    name: 'B&WSSC',
    logo: '/clients/B&WSCC.png',
  },
];

const HomePage = () => {
  useEffect(() => {
    // Wait for all sections to mount and create their ScrollTriggers
    const timer = setTimeout(() => {
      // Get all pinned ScrollTriggers
      const pinned = ScrollTrigger.getAll()
        .filter((st) => st.vars.pin)
        .sort((a, b) => a.start - b.start);

      const maxScroll = ScrollTrigger.maxScroll(window);

      if (!maxScroll || pinned.length === 0) return;

      // Build ranges and snap targets from pinned sections
      const pinnedRanges = pinned.map((st) => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      // Create global snap
      ScrollTrigger.create({
        snap: {
          snapTo: (value) => {
            // Check if within any pinned range (with buffer)
            const inPinned = pinnedRanges.some(
              (r) => value >= r.start - 0.02 && value <= r.end + 0.02
            );

            // If not in a pinned section, allow free scroll
            if (!inPinned) return value;

            // Find nearest pinned center
            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );

            return target;
          },
          duration: { min: 0.08, max: 0.18 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      // Only kill the global snap trigger, not all triggers
      const allTriggers = ScrollTrigger.getAll();
      const globalSnap = allTriggers.find((st) => st.vars.snap && !st.vars.pin);
      if (globalSnap) {
        globalSnap.kill();
      }
    };
  }, []);

  return (
    <>
      <BackgroundElements />
      <HeroSection />
      <IntegrateSection />
      <EmpowerSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <AboutSection />
      {/* Clients Marquee - same as Services page */}
      <section className="relative w-full bg-background text-foreground px-6 lg:px-[10vw] py-16">
        <div className="max-w-6xl mx-auto mt-10 pt-10 border-t border-border/60">
          <div className="flex items-center mb-6">
            <p className="font-mono text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-rooman-orange">
              Clients
            </p>
          </div>

          <div className="relative overflow-x-auto pb-4">
            <div className="flex gap-10 min-w-full whitespace-nowrap animate-clients-marquee">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="min-w-[160px] md:min-w-[200px] flex flex-col items-center gap-3"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-xs md:text-sm text-gray-text text-center whitespace-normal">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Marquee - reverse direction */}
      <section className="relative w-full bg-background text-foreground px-6 lg:px-[10vw] pb-20">
        <div className="max-w-6xl mx-auto mt-4 pt-10 border-t border-border/60">
          <div className="flex items-center mb-6">
            <p className="font-mono text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-rooman-orange">
              Quality Assurance
            </p>
          </div>

          <div className="relative overflow-x-auto pb-4">
            <div className="flex gap-10 min-w-full whitespace-nowrap animate-clients-marquee-reverse">
              {[...qualityItems, ...qualityItems].map((item, index) => (
                <div
                  key={index}
                  className="min-w-[160px] md:min-w-[200px] flex flex-col items-center gap-3"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-xs md:text-sm text-gray-text text-center whitespace-normal">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CareersSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
