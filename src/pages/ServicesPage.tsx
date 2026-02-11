import BackgroundElements from '@/components/BackgroundElements';

const services = [
  {
    id: 1,
    title: 'IT Infrastucture Technology',
    description: [
      'End-to-end design, deployment, and management of core IT infrastructure—networks, data centers, security, and endpoints. We help you modernize legacy environments, standardize configurations, and build resilient foundations that keep your business online and performant.',
      'Our team audits your current landscape, identifies risk and performance gaps, and then designs a pragmatic roadmap that fits your budget and timelines. We work across on-prem, hybrid, and cloud-native environments so your infrastructure can evolve without disrupting day-to-day operations.',
      'Whether you are opening new locations, consolidating facilities, or preparing for the next wave of digital services, we ensure your infrastructure is secure, scalable, and ready for what comes next.',
    ],
    cardClass: 'border-4 border-rooman-orange',
  },
  {
    id: 2,
    title: 'IT Consultancy & Solutions',
    description: [
      'Strategic advisory and solution architecture for organizations navigating complex technology decisions. From assessments and roadmaps to vendor selection and implementation oversight, we align your IT investments with measurable business outcomes.',
      'We translate business challenges into clear technology initiatives, helping you prioritize what to build, buy, or retire. Our consultants bring deep experience across industries and vendors so you get independent, practical recommendations—not generic slideware.',
      'From quick assessments to full transformation programs, we stay involved through execution to make sure your strategy turns into reliable, working systems for your teams and customers.',
    ],
    cardClass: 'border-4 border-rooman-green',
  },
  {
    id: 3,
    title: 'AI Product & Services',
    description: [
      'Conceive, prototype, and operationalize AI products—from data pipelines and model development to inference APIs and monitoring. We focus on safe, explainable AI that enhances decision-making, automates repetitive work, and unlocks new experiences for your users.',
      'Our experts work with your domain teams to identify high-impact AI use cases, validate them through rapid pilots, and then harden them for production. We pay special attention to data quality, governance, and security so your solutions remain robust at scale.',
      'Whether you are building recommendation engines, intelligent assistants, or predictive analytics, we help you move from experimentation to reliable AI that your business can depend on.',
    ],
    cardClass: 'border-4 border-blue-accent',
  },
  {
    id: 4,
    title: 'Cloud Management Services',
    description: [
      'Ongoing management of your cloud environments across providers. We handle provisioning, observability, cost optimization, backups, and security hardening so your teams can ship features while we keep the platform healthy and compliant.',
      'Our cloud engineers design guardrails and automation around your environments, reducing manual work and minimizing the risk of misconfigurations. We monitor performance and costs in real time, continuously tuning your setup to match changing workloads.',
      'From initial cloud migration to long-term operations, we act as an extension of your internal team, bringing best practices, tools, and processes that keep your cloud fast, secure, and predictable.',
    ],
    cardClass: 'border-4 border-rooman-orange',
  },
  {
    id: 5,
    title: 'Robotics',
    description: [
      'Design and integration of robotic solutions that streamline operations—whether in warehouses, campuses, or field environments. We bring together hardware, control systems, and software to create automations that are safe, reliable, and maintainable.',
      'We begin with detailed process studies to understand your workflows and identify where robotics can create real value. From there, we design and integrate systems that fit into your existing infrastructure, including connectivity, data collection, and monitoring.',
      'Our goal is not just to deploy robots, but to build sustainable robotic operations that your teams can control, scale, and evolve over time.',
    ],
    cardClass: 'border-4 border-rooman-green',
  },
  {
    id: 6,
    title: 'BlockChain',
    description: [
      'Secure, distributed solutions built on blockchain platforms. We help you evaluate use cases, design smart contracts, and integrate ledgers with existing systems to increase transparency, traceability, and trust across your ecosystem.',
      'Our approach starts with clarifying when blockchain is truly the right fit, then choosing the right platforms and architectures for your requirements. We design and implement smart contracts, APIs, and user interfaces that make your solution usable in real-world environments.',
      'From proofs of concept to production-grade deployments, we focus on security, compliance, and performance so your blockchain initiatives can stand up to scrutiny.',
    ],
    cardClass: 'border-4 border-blue-accent',
  },
  {
    id: 7,
    title: 'Skill & Technology Trainings.',
    description: [
      'Structured upskilling programs for students and teams across cloud, AI, cybersecurity, and modern software engineering. From foundational curricula to advanced labs, we focus on hands-on learning that translates directly into employable skills.',
      'Our trainers blend real project experience with clear, practical instruction—using labs, projects, and assessments rather than just slides. Programs can be tailored for academic institutions, corporate teams, or government initiatives.',
      'Whether you need a single workshop or a multi-month learning journey, we help you build talent pipelines that are aligned with today’s technology landscape.',
    ],
    cardClass: 'border-4 border-rooman-navy',
  },
];

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

const ServicesPage = () => {
  return (
    <>
      <BackgroundElements />
      <section className="relative w-full min-h-screen bg-background text-foreground px-6 lg:px-[10vw] py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-rooman-orange mb-4">
            Rooman Technologies
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Services
          </h1>
          <p className="text-lg md:text-xl text-gray-text leading-relaxed">
            This is a placeholder for your services content. We will replace this
            with detailed copy and structure based on what you share next.
          </p>
        </div>

        {/* Services list - single expanded card per row */}
        <div className="max-w-6xl mx-auto mb-20 space-y-5">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative p-6 lg:p-8 rounded-xl hover:-translate-y-1 transition-all duration-300 ${service.cardClass}`}
            >
              <h3 className="font-heading text-xl md:text-2xl font-semibold mb-4">
                {service.title}
              </h3>
              <div className="space-y-3 text-base md:text-lg leading-relaxed">
                {service.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Clients Carousel */}
        <div className="max-w-6xl mx-auto mt-10 pt-10 border-t border-border/60">
          <div className="flex items-center mb-6">
            <p className="font-mono text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-rooman-orange">
              Clients
            </p>
          </div>

          {/* Marquee-style clients carousel (auto-scroll + manual scroll) */}
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
    </>
  );
};

export default ServicesPage;
