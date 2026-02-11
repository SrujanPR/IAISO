import BackgroundElements from '@/components/BackgroundElements';

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

const AboutPage = () => {
  return (
    <>
      <BackgroundElements />
      <section className="relative w-full min-h-screen bg-background text-foreground px-6 lg:px-[10vw] py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-rooman-orange mb-4">
            Rooman Technologies
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-10">
            About Us
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Top text beside video */}
            <div className="space-y-5 text-base md:text-lg text-gray-text leading-relaxed text-left">
              <p>
                Founded in 1999 in Bangalore, India, Rooman Technologies began as a group of technology enthusiasts with a clear intent: to build practical, scalable technology solutions that solve real-world problems.
              </p>
              <p>
                From the very beginning, Rooman focused on assembling strong technical teams and instilling a long-term vision around innovation, reliability, and impact. The founding team and board closely tracked global and Indian technology shifts, continuously evolving ideas and platforms to stay aligned with emerging industry needs. This approach allowed Rooman to grow from a single initiative into a multi-domain technology organization.
              </p>
            </div>

            {/* Video on the right */}
            <div className="w-full">
              <div className="relative w-full rounded-xl overflow-hidden shadow-lg aspect-video bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/RbeSjpjhGWU?start=5"
                  title="Rooman Technologies"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Additional text spanning full width under video (fills gap) */}
            <div className="lg:col-span-2 space-y-5 text-base md:text-lg text-gray-text leading-relaxed text-left">
              <p>
                Over the years, Rooman has partnered extensively with government bodies and large institutions to design and deploy technology-led solutions at scale. These engagements span digital infrastructure, enterprise platforms, workforce systems, and large-scale deployment programs, enabling transformation across public and private sectors. Today, Rooman operates pan-India, delivering solutions that support operations, enable digital adoption, and create measurable impact.
              </p>
              <p>
                Technology and engineering excellence sit at the core of Rooman’s culture. The company follows strong internal knowledge-sharing and capability-building practices to ensure its teams stay current with modern architectures, tools, and frameworks. Its development environments, innovation labs, and collaboration spaces are designed to support end-to-end solution building—from ideation and prototyping to deployment and support.
              </p>
              <p>
                Rooman has built a diverse portfolio of technology products and services across networking, software, and hardware domains. Its offerings include enterprise application development, IoT and ERP solutions, cybersecurity and data security services, data center support, and customized digital platforms tailored to industry and government needs. With a focus on scalability, security, and long-term value, Rooman continues to build technology solutions that power organizations and ecosystems across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Marquee on About page */}
      <section className="relative w-full bg-background text-foreground px-6 lg:px-[10vw] pb-24">
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
    </>
  );
};

export default AboutPage;
