import { useState } from 'react';

const Events = () => {
  const [filter, setFilter] = useState('All');

  const events = [
    {
      id: 1,
      title: 'Startup Pitch Night',
      date: 'Nov 15, 2025',
      time: '18:00 - 21:00',
      location: 'Factory Berlin',
      category: 'Entrepreneurship',
      description:
        'Present your startup idea to a panel of investors and entrepreneurs. Network with fellow founders and get valuable feedback.',
    },
    {
      id: 2,
      title: 'Berlin Park Cleanup',
      date: 'Nov 22, 2025',
      time: '10:00 - 14:00',
      location: 'Tiergarten',
      category: 'Community',
      description:
        'Join us for a community service day cleaning up one of Berlin\'s most beautiful parks. Make new friends while making a difference.',
    },
    {
      id: 3,
      title: 'Tech Talk: AI & Ethics',
      date: 'Dec 3, 2025',
      time: '17:00 - 19:00',
      location: 'TU Berlin',
      category: 'Entrepreneurship',
      description:
        'Leading AI researchers discuss the ethical implications of artificial intelligence and the future of technology.',
    },
    {
      id: 4,
      title: 'Entrepreneurship Workshop',
      date: 'Dec 10, 2025',
      time: '14:00 - 18:00',
      location: 'Factory Berlin',
      category: 'Entrepreneurship',
      description:
        'Learn the fundamentals of starting a business, from ideation to execution. Hands-on workshop with experienced mentors.',
    },
    {
      id: 5,
      title: 'Holiday Food Drive',
      date: 'Dec 15, 2025',
      time: '09:00 - 17:00',
      location: 'Multiple Locations',
      category: 'Community',
      description:
        'Help collect and distribute food to local shelters. Spread holiday cheer throughout Berlin communities.',
    },
    {
      id: 6,
      title: 'Networking Mixer',
      date: 'Dec 18, 2025',
      time: '19:00 - 22:00',
      location: 'betahaus Berlin',
      category: 'Entrepreneurship',
      description:
        'Connect with Berlin\'s startup ecosystem over drinks and conversation. Meet potential co-founders, investors, and mentors.',
    },
    {
      id: 7,
      title: 'New Year Hackathon',
      date: 'Jan 10-12, 2026',
      time: '48 Hours',
      location: 'TU Berlin',
      category: 'Entrepreneurship',
      description:
        'Build innovative solutions to real-world problems in this intensive 48-hour hackathon. Prizes and mentorship included.',
    },
    {
      id: 8,
      title: 'Community Art Project',
      date: 'Jan 20, 2026',
      time: '11:00 - 16:00',
      location: 'Kreuzberg',
      category: 'Community',
      description:
        'Collaborate on a public art installation that celebrates Berlin\'s diversity and creativity. All skill levels welcome.',
    },
  ];

  const filteredEvents =
    filter === 'All' ? events : events.filter((e) => e.category === filter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Entrepreneurship':
        return '🚀';
      case 'Community':
        return '🤝';
      default:
        return '📚';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-warm-bg">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 style={{
            background: 'linear-gradient(to right, #FFD700, #E91E63, #00BCD4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Events
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover upcoming workshops, networking events, and community
            initiatives. Join us in building Berlin's future.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-12 flex flex-wrap gap-4 justify-center">
          {['All', 'Entrepreneurship', 'Community'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              style={filter === category ? {
                background: 'linear-gradient(to right, #E91E63, #C2185B)'
              } : {}}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                filter === category
                  ? 'text-white shadow-lg'
                  : 'bg-white text-warm-charcoal hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden smooth-shadow hover:smooth-shadow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Event Header */}
              <div style={{
                background: event.category === 'Entrepreneurship' 
                  ? 'linear-gradient(to bottom right, #E91E63, #C2185B)' 
                  : 'linear-gradient(to bottom right, #00BCD4, #2196F3)'
              }} className="h-40 flex items-center justify-center">
                <span className="text-white text-6xl sm:text-7xl">
                  {getCategoryIcon(event.category)}
                </span>
              </div>

              {/* Event Content */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <div style={{
                  color: event.category === 'Entrepreneurship' ? '#E91E63' : '#00BCD4'
                }} className="text-xs sm:text-sm font-semibold mb-2">
                  {event.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-warm-charcoal">
                  {event.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 flex-1">{event.description}</p>

                <div className="space-y-2 text-xs sm:text-sm text-gray-700 border-t pt-4">
                  <div className="flex items-center">
                    <span className="mr-2 text-base sm:text-lg">📅</span>
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-base sm:text-lg">🕐</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-base sm:text-lg">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>

                <button style={{
                  background: 'linear-gradient(to right, #E91E63, #C2185B)'
                }} className="mt-4 w-full text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">
              No events found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
