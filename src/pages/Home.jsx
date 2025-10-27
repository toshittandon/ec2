import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ButtonPrimary from '../components/ButtonPrimary';
import FeatureCard from '../components/FeatureCard';
import EventsBanner from '../components/EventsBanner';
import PageTransition from '../components/PageTransition';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center bg-white pt-24 sm:pt-32 pb-16 sm:pb-20 px-4">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.img 
              src="/ec2.svg" 
              alt="EC² Logo" 
              className="h-12 sm:h-16 md:h-20 lg:h-24 mx-auto mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1]
              }}
            />
            <motion.h1 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-warm-charcoal">Entrepreneurship and Community Club</span>
              <br />
              <motion.span 
                style={{
                  background: 'linear-gradient(to right, #FFD700, #FF8C00, #E91E63, #00BCD4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }} 
                className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Igniting Berlin's Next Wave of Founders
              </motion.span>
              <br />
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Where entrepreneurship meets community impact. Join Berlin's most
              dynamic student organization fostering innovation and social change.
            </motion.p>
            <motion.a
              href="https://chat.whatsapp.com/G1oZA23TBaDAfzf83LmfmI"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(to right, #E91E63, #C2185B)'
              }}
              className="px-6 sm:px-8 py-3 rounded-lg font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Club
            </motion.a>
          </div>
        </section>

      {/* Value Proposition Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 text-warm-charcoal">
              Why Join EC<sup>2</sup>?
            </h2>
            <p className="text-center text-gray-600 mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto text-base sm:text-lg px-4">
              We blend entrepreneurial spirit with community action to create
              lasting impact in Berlin and beyond.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon="💡"
              title="Innovate"
              description="Launch new ideas, test business concepts, and turn passion into action with those that share your passion."
              delay={0}
            />
            <FeatureCard
              icon="🌍"
              title="Connect"
              description="Collaborate, network, and make friends with ambitious, creative peers."
              delay={0.1}
            />
            <FeatureCard
              icon="🎤"
              title="Lead"
              description="Drive positive change in the local community and develop the leadership skills needed to command any stage, from the boardroom to the public forum."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Community Showcase */}
      <section style={{
        background: 'linear-gradient(to bottom right, #2c2c2c, #1a1a1a)'
      }} className="py-12 sm:py-16 md:py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="px-4">
                <h2 style={{
                  background: 'linear-gradient(to right, #FFD700, #E91E63, #00BCD4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Berlin's Entrepreneurial Heartbeat
                </h2>
                <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  Located in the heart of Europe's startup capital, EC² brings
                  together ambitious students, experienced mentors, and industry
                  leaders to create a vibrant ecosystem of innovation.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  From hackathons to community service, from pitch competitions
                  to cultural exchanges, we're building more than just
                  startups—we're building a better Berlin.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.2), rgba(0, 188, 212, 0.2))',
                backdropFilter: 'blur(10px)'
              }} className="rounded-2xl p-6 sm:p-8">
                <div className="aspect-video bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl md:text-6xl">🏙️</span>
                </div>
                <p className="text-center mt-4 text-gray-300 text-sm sm:text-base">
                  Berlin: Where Innovation Meets Tradition
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Events Banner */}
      <EventsBanner />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 style={{
              background: 'linear-gradient(to right, #FF8C00, #E91E63, #2196F3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
              Join EC² and become part of Berlin's most innovative student
              community. Let's build the future together.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <ButtonPrimary>Get Involved</ButtonPrimary>
                </motion.div>
              </Link>
              <Link to="/events" className="w-full sm:w-auto">
                <motion.button 
                  style={{
                    border: '2px solid transparent',
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #00BCD4, #2196F3)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box'
                  }} 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-semibold text-warm-charcoal hover:bg-gradient-to-r hover:from-ec2-cyan hover:to-ec2-blue hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Events
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};

export default Home;
