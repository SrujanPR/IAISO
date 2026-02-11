import BackgroundElements from '@/components/BackgroundElements';
import { Calendar, MapPin, Clock, Users, ArrowRight, Video, Mic2, Users2, Award } from 'lucide-react';
import { useState } from 'react';

const upcomingEvents = [
  {
    id: 1,
    title: 'AI India Summit 2026',
    description: 'India\'s premier AI conference bringing together researchers, practitioners, and industry leaders.',
    date: 'March 15-17, 2026',
    time: '9:00 AM - 6:00 PM',
    location: 'Bangalore International Exhibition Centre',
    type: 'Conference',
    attendees: 5000,
    image: '/hero_innovate.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Cloud Architecture Workshop',
    description: 'Hands-on workshop on designing scalable cloud solutions with AWS, Azure, and GCP.',
    date: 'February 25, 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'Virtual Event',
    type: 'Workshop',
    attendees: 200,
    featured: false,
  },
  {
    id: 3,
    title: 'Cybersecurity Hackathon',
    description: '48-hour hackathon focused on building security tools and finding vulnerabilities.',
    date: 'March 5-7, 2026',
    time: '48 Hours',
    location: 'Mumbai Tech Hub',
    type: 'Hackathon',
    attendees: 300,
    featured: false,
  },
  {
    id: 4,
    title: 'Women in Tech Leadership',
    description: 'Networking and mentorship event for women pursuing leadership roles in technology.',
    date: 'March 8, 2026',
    time: '2:00 PM - 7:00 PM',
    location: 'Delhi NCR',
    type: 'Networking',
    attendees: 150,
    featured: false,
  },
  {
    id: 5,
    title: 'DevOps Deep Dive',
    description: 'Advanced training on Kubernetes, Docker, and CI/CD pipelines.',
    date: 'February 28, 2026',
    time: '9:00 AM - 5:00 PM',
    location: 'Hyderabad Convention Center',
    type: 'Training',
    attendees: 100,
    featured: false,
  },
  {
    id: 6,
    title: 'Data Science Bootcamp',
    description: 'Intensive 3-day bootcamp covering Python, ML, and data visualization.',
    date: 'March 20-22, 2026',
    time: '9:00 AM - 6:00 PM',
    location: 'Chennai Tech Park',
    type: 'Bootcamp',
    attendees: 75,
    featured: false,
  },
];

const pastEvents = [
  {
    title: 'India Tech Summit 2025',
    attendees: 8000,
    date: 'December 2025',
    type: 'Conference',
  },
  {
    title: 'AI for Good Hackathon',
    attendees: 450,
    date: 'November 2025',
    type: 'Hackathon',
  },
  {
    title: 'Cloud Native Workshop Series',
    attendees: 1200,
    date: 'October 2025',
    type: 'Workshop',
  },
];

const eventTypes = [
  { icon: Mic2, label: 'Conferences', count: 12 },
  { icon: Users2, label: 'Workshops', count: 24 },
  { icon: Video, label: 'Webinars', count: 50 },
  { icon: Award, label: 'Hackathons', count: 8 },
];

const EventsPage = () => {
  const [filter, setFilter] = useState('All');

  const filteredEvents = filter === 'All' 
    ? upcomingEvents 
    : upcomingEvents.filter(e => e.type === filter);

  const featuredEvent = upcomingEvents.find(e => e.featured);

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
            Events
          </h1>
          <p className="text-lg md:text-xl text-gray-text leading-relaxed">
            Connect with the community through conferences, workshops, hackathons, and networking events. 
            Learn from industry experts and grow your professional network.
          </p>
        </div>

        {/* Event Types */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {eventTypes.map((type, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-border bg-secondary/30 hover:border-rooman-orange/50 transition-all">
                <type.icon className="w-8 h-8 text-rooman-orange mx-auto mb-3" />
                <div className="font-heading text-2xl font-bold mb-1">{type.count}+</div>
                <div className="text-sm text-gray-text">{type.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Event */}
        {featuredEvent && (
          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative rounded-2xl overflow-hidden border border-rooman-orange/30">
              <div className="absolute inset-0 bg-gradient-to-r from-rooman-orange/20 to-transparent" />
              <div className="relative p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-rooman-orange text-white text-xs font-medium rounded-full mb-4">
                      Featured Event
                    </span>
                    <h2 className="font-heading text-3xl lg:text-4xl font-semibold mb-4">
                      {featuredEvent.title}
                    </h2>
                    <p className="text-gray-text mb-6 max-w-xl">
                      {featuredEvent.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-text mb-6">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-rooman-orange" />
                        {featuredEvent.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-rooman-orange" />
                        {featuredEvent.time}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-rooman-orange" />
                        {featuredEvent.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-rooman-orange" />
                        {featuredEvent.attendees.toLocaleString()} expected
                      </span>
                    </div>
                    <button className="px-8 py-3 bg-rooman-orange text-white font-medium rounded-lg hover:bg-rooman-orange/90 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-wrap gap-2">
            {['All', 'Conference', 'Workshop', 'Hackathon', 'Networking', 'Training', 'Bootcamp'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 text-sm rounded-full border transition-all ${
                  filter === type
                    ? 'bg-rooman-orange text-white border-rooman-orange'
                    : 'bg-navy-800/50 border-border text-gray-text hover:border-rooman-orange/50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.filter(e => !e.featured).map((event) => (
              <div
                key={event.id}
                className="group p-6 rounded-xl border border-border bg-secondary/30 hover:border-rooman-orange/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-rooman-orange/10 text-rooman-orange text-xs font-medium rounded-full">
                    {event.type}
                  </span>
                  <span className="text-xs text-gray-text">{event.date}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3 group-hover:text-rooman-orange transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-text text-sm mb-4">{event.description}</p>
                <div className="space-y-2 text-xs text-gray-text mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-sm text-rooman-orange font-medium group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl font-semibold mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border bg-secondary/20 opacity-75"
              >
                <span className="px-3 py-1 bg-gray-text/20 text-gray-text text-xs font-medium rounded-full">
                  {event.type}
                </span>
                <h3 className="font-heading text-lg font-semibold mt-3 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-text">{event.date}</p>
                <p className="text-sm text-gray-text">{event.attendees.toLocaleString()} attendees</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
