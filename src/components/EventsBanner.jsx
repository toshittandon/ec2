import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EventsBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const allEvents = [
    // Previous Events
    {
      id: 101,
      title: 'Summer Startup Bootcamp',
      date: 'Aug 15-20, 2025',
      location: 'Factory Berlin',
      category: 'Entrepreneurship',
      type: 'previous',
      image: '🎓',
      participants: 45,
    },
    {
      id: 102,
      title: 'Berlin Tech Conference',
      date: 'Sep 10, 2025',
      location: 'ICC Berlin',
      category: 'Entrepreneurship',
      type: 'previous',
      image: '💼',
      participants: 120,
    },
    {
      id: 103,
      title: 'Community Garden Project',
      date: 'Sep 25, 2025',
      location: 'Kreuzberg',
      category: 'Community',
      type: 'previous',
      image: '🌱',
      participants: 32,
    },
    {
      id: 104,
      title: 'AI Workshop Series',
      date: 'Oct 5, 2025',
      location: 'TU Berlin',
      category: 'Learning',
      type: 'previous',
      image: '🤖',
      participants: 65,
    },
    // Upcoming Events
    {
      id: 1,
      title: 'Startup Pitch Night',
      date: 'Nov 15, 2025',
      location: 'Factory Berlin',
      category: 'Entrepreneurship',
      type: 'upcoming',
      image: '🚀',
    },
    {
      id: 2,
      title: 'Berlin Park Cleanup',
      date: 'Nov 22, 2025',
      location: 'Tiergarten',
      category: 'Community',
      type: 'upcoming',
      image: '🤝',
    },
    {
      id: 3,
      title: 'Tech Talk: AI & Ethics',
      date: 'Dec 3, 2025',
      location: 'TU Berlin',
      category: 'Learning',
      type: 'upcoming',
      image: '📚',
    },
    {
      id: 4,
      title: 'Holiday Food Drive',
      date: 'Dec 15, 2025',
      location: 'Multiple Locations',
      category: 'Community',
      type: 'upcoming',
      image: '🎁',
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allEvents.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, allEvents.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000); // Resume auto-play after 8 seconds
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allEvents.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allEvents.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const getGradient = (category, type) => {
    if (type === 'previous') {
      return 'linear-gradient(to bottom right, #6B7280, #4B5563)'; // Gray for past events
    }
    switch (category) {
      case 'Entrepreneurship':
        return 'linear-gradient(to bottom right, #E91E63, #C2185B)';
      case 'Community':
        return 'linear-gradient(to bottom right, #00BCD4, #2196F3)';
      case 'Learning':
        return 'linear-gradient(to bottom right, #4CAF50, #8BC34A)';
      default:
        return 'linear-gradient(to bottom right, #FF8C00, #FFD700)';
    }
  };

  const getCategoryColor = (category, type) => {
    if (type === 'previous') return '#6B7280';
    switch (category) {
      case 'Entrepreneurship':
        return '#E91E63';
      case 'Community':
        return '#00BCD4';
      case 'Learning':
        return '#4CAF50';
      default:
        return '#FF8C00';
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-warm-bg overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
          <div>
            <h2
              style={{
                background:
                  'linear-gradient(to right, #FFD700, #E91E63, #00BCD4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              Events Timeline
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Our journey through innovation and community
            </p>
          </div>
          <Link
            to="/events"
            className="text-ec2-pink hover:text-ec2-magenta hover:underline font-semibold transition-colors text-sm sm:text-base"
          >
            View All Events →
          </Link>
        </div>

        {/* Banner Slider */}
        <div className="relative">
          {/* Main Slide Container */}
          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden smooth-shadow">
            {allEvents.map((event, index) => (
              <div
                key={event.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div
                  style={{
                    background: getGradient(event.category, event.type),
                  }}
                  className="w-full h-full flex flex-col justify-between p-6 sm:p-8 md:p-12 text-white relative"
                >
                  {/* Event Type Badge */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                    <span
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold ${
                        event.type === 'previous'
                          ? 'bg-white/20 backdrop-blur-sm'
                          : 'bg-white/30 backdrop-blur-sm animate-pulse'
                      }`}
                    >
                      {event.type === 'previous' ? '📅 Past Event' : '⭐ Upcoming'}
                    </span>
                  </div>

                  {/* Event Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6">
                      {event.image}
                    </div>
                    <div className="text-sm sm:text-base font-semibold mb-2 opacity-90">
                      {event.category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-base sm:text-lg md:text-xl opacity-90">
                      <div className="flex items-center">
                        <span className="mr-3">📅</span>
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <span className="mr-3">📍</span>
                        {event.location}
                      </div>
                      {event.participants && (
                        <div className="flex items-center">
                          <span className="mr-3">👥</span>
                          {event.participants} participants
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mb-32 -mr-32"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center smooth-shadow hover:smooth-shadow-hover transition-all duration-300 z-10"
            aria-label="Previous slide"
          >
            <span className="text-xl sm:text-2xl">←</span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center smooth-shadow hover:smooth-shadow-hover transition-all duration-300 z-10"
            aria-label="Next slide"
          >
            <span className="text-xl sm:text-2xl">→</span>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {allEvents.map((event, index) => (
              <button
                key={event.id}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-3'
                    : 'w-3 h-3 hover:opacity-70'
                }`}
                style={{
                  background:
                    index === currentIndex
                      ? getCategoryColor(event.category, event.type)
                      : '#D1D5DB',
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 sm:mt-12">
          <div className="bg-white rounded-xl p-4 sm:p-6 text-center smooth-shadow">
            <div className="text-2xl sm:text-3xl font-bold text-ec2-pink mb-1">
              {allEvents.filter((e) => e.type === 'previous').length}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Events Held</div>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6 text-center smooth-shadow">
            <div className="text-2xl sm:text-3xl font-bold text-ec2-cyan mb-1">
              {allEvents.filter((e) => e.type === 'upcoming').length}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              Upcoming Events
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6 text-center smooth-shadow">
            <div className="text-2xl sm:text-3xl font-bold text-ec2-orange mb-1">
              {allEvents
                .filter((e) => e.participants)
                .reduce((sum, e) => sum + e.participants, 0)}
              +
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              Total Participants
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6 text-center smooth-shadow">
            <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-1">
              100%
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              Success Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsBanner;
