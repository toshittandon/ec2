import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { eventsAPI } from '../lib/api';
import { eventImagesAPI } from '../lib/storage';
import PageTransition from '../components/PageTransition';
import AnimatedSection from '../components/AnimatedSection';

const Events = () => {
  const [filter, setFilter] = useState('Upcoming');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events from Appwrite
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const fetchedEvents = await eventsAPI.getAll();
        setEvents(fetchedEvents);
        setError(null);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Categorize events based on date
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day

  const upcomingEvents = events.filter(e => new Date(e.eventDate) >= today);
  const previousEvents = events.filter(e => new Date(e.eventDate) < today);

  const filteredEvents = 
    filter === 'Upcoming' ? upcomingEvents : 
    filter === 'Previous' ? previousEvents : 
    events;

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
    <PageTransition>
      <div className="min-h-screen bg-warm-bg pt-24 pb-16 px-4">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h1 style={{
              background: 'linear-gradient(to right, #FFD700, #E91E63, #00BCD4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Events
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Explore our upcoming workshops and networking events, or revisit the highlights 
              from our previous community initiatives. Join us in building Berlin's future.
            </p>
          </AnimatedSection>

          {/* Stats Summary */}
          <AnimatedSection delay={0.1} className="mb-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
            <motion.div 
              className="bg-white rounded-lg p-4 text-center shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-ec2-pink">{upcomingEvents.length}</div>
              <div className="text-sm text-gray-600">Upcoming</div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-lg p-4 text-center shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-gray-500">{previousEvents.length}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </motion.div>
          </AnimatedSection>

          {/* Filter Bar */}
          <AnimatedSection delay={0.2} className="mb-12 flex flex-wrap gap-4 justify-center">
            {['Upcoming', 'Previous'].map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                style={filter === category ? {
                  background: category === 'Upcoming' 
                    ? 'linear-gradient(to right, #E91E63, #C2185B)'
                    : 'linear-gradient(to right, #6B7280, #4B5563)'
                } : {}}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'text-white shadow-lg'
                    : 'bg-white text-warm-charcoal hover:bg-gray-100 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === 'Upcoming' ? '⭐ Upcoming Events' : '📅 Previous Events'}
              </motion.button>
            ))}
          </AnimatedSection>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-ec2-pink"></div>
            <p className="mt-4 text-gray-600">Loading events...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-16">
            <p className="text-xl text-red-500">{error}</p>
          </div>
        )}

        {/* Events Grid */}
        {!loading && !error && (
          <>
            {filteredEvents.length === 0 ? (
              <AnimatedSection>
                <div className="text-center py-16">
                  <p className="text-xl text-gray-600">
                    {filter === 'Upcoming' ? 'No upcoming events at the moment.' : 'No previous events to display.'}
                  </p>
                </div>
              </AnimatedSection>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <AnimatePresence mode="wait">
                  {filteredEvents.map((event, index) => {
                    const isPast = new Date(event.eventDate) < today;
                    
                    return (
                      <motion.div
                        key={event.$id}
                        className="bg-white rounded-xl overflow-hidden smooth-shadow hover:smooth-shadow-hover flex flex-col"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.1,
                          ease: [0.25, 0.4, 0.25, 1]
                        }}
                        whileHover={{ y: -8 }}
                      >
                        {/* Event Header */}
                        <div style={{
                          background: isPast
                            ? 'linear-gradient(to bottom right, #6B7280, #4B5563)'
                            : event.category === 'Entrepreneurship' 
                              ? 'linear-gradient(to bottom right, #E91E63, #C2185B)' 
                              : event.category === 'Community'
                                ? 'linear-gradient(to bottom right, #00BCD4, #2196F3)'
                                : 'linear-gradient(to bottom right, #4CAF50, #8BC34A)'
                        }} className="h-40 flex items-center justify-center relative">
                          {/* Status Badge */}
                          <div className="absolute top-3 right-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              isPast 
                                ? 'bg-white/20 backdrop-blur-sm' 
                                : 'bg-white/30 backdrop-blur-sm animate-pulse'
                            }`}>
                              {isPast ? '📅 Past' : '⭐ Upcoming'}
                            </span>
                          </div>
                          
                          {event.image ? (
                            <img 
                              src={eventImagesAPI.getPreview(event.image, 400, 300)} 
                              alt={event.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                          ) : null}
                          <span className={`text-white text-6xl sm:text-7xl ${event.image ? 'hidden' : ''}`}>
                            {getCategoryIcon(event.category)}
                          </span>
                        </div>

                        {/* Event Content */}
                        <div className="p-4 sm:p-6 flex-1 flex flex-col">
                          <div style={{
                            color: isPast ? '#6B7280' : event.category === 'Entrepreneurship' ? '#E91E63' : '#00BCD4'
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
                              <span className="font-medium">
                                {new Date(event.eventDate).toLocaleDateString('en-US', {
                                  month: 'long',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                                {event.eventDateEnd && new Date(event.eventDateEnd).toDateString() !== new Date(event.eventDate).toDateString() && (
                                  <span> - {new Date(event.eventDateEnd).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                  })}</span>
                                )}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2 text-base sm:text-lg">🕐</span>
                              <span>
                                {new Date(event.eventDate).toLocaleTimeString('en-US', {
                                  hour: 'numeric',
                                  minute: '2-digit',
                                  hour12: true
                                })}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2 text-base sm:text-lg">📍</span>
                              <span>{event.location}</span>
                            </div>
                          </div>

                          {event.link ? (
                            <motion.a
                              href={event.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                background: isPast 
                                  ? 'linear-gradient(to right, #6B7280, #4B5563)'
                                  : 'linear-gradient(to right, #E91E63, #C2185B)'
                              }} 
                              className="mt-4 w-full text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center block"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {isPast ? 'View Details' : 'Register Now'}
                            </motion.a>
                          ) : (
                            <motion.button 
                              style={{
                                background: isPast 
                                  ? 'linear-gradient(to right, #6B7280, #4B5563)'
                                  : 'linear-gradient(to right, #E91E63, #C2185B)'
                              }} 
                              className="mt-4 w-full text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                              disabled={isPast}
                              whileHover={!isPast ? { scale: 1.02 } : {}}
                              whileTap={!isPast ? { scale: 0.98 } : {}}
                            >
                              {isPast ? 'Event Completed' : 'Register Now'}
                            </motion.button>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}
          </>
        )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Events;
