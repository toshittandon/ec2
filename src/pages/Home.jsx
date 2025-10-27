import { Link } from 'react-router-dom';
import ButtonPrimary from '../components/ButtonPrimary';
import FeatureCard from '../components/FeatureCard';
import EventsBanner from '../components/EventsBanner';

const Home = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-white pt-24 sm:pt-32 pb-16 sm:pb-20 px-4">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <img 
            src="/ec2.svg" 
            alt="EC² Logo" 
            className="h-12 sm:h-16 md:h-20 lg:h-24 mx-auto mb-4 sm:mb-6"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight px-2">
            <span className="text-warm-charcoal">Entrepreneurship and Community Club</span>
            <br />
            <span style={{
              background: 'linear-gradient(to right, #FFD700, #FF8C00, #E91E63, #00BCD4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }} className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">Igniting Berlin's Next Wave of Founders</span>
            <br />
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto px-4">
            Where entrepreneurship meets community impact. Join Berlin's most
            dynamic student organization fostering innovation and social change.
          </p>
          <Link to="/events">
            <ButtonPrimary>Explore Opportunities</ButtonPrimary>
          </Link>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 text-warm-charcoal">
            Why Join EC<sup>2</sup>?
          </h2>
          <p className="text-center text-gray-600 mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto text-base sm:text-lg px-4">
            We blend entrepreneurial spirit with community action to create
            lasting impact in Berlin and beyond.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon="💡"
              title="Innovate"
              description="Launch new ideas, test business concepts, and turn passion into action with those that share your passion."
            />
            <FeatureCard
              icon="🌍"
              title="Connect"
              description="Collaborate, network, and make friends with ambitious, creative peers."
            />
            <FeatureCard
              icon="🎤"
              title="Lead"
              description="Drive positive change in the local community and develop the leadership skills needed to command any stage, from the boardroom to the public forum."
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
          </div>
        </div>
      </section>

      {/* Events Banner */}
      <EventsBanner />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link to="/contact" className="w-full sm:w-auto">
              <ButtonPrimary>Get Involved</ButtonPrimary>
            </Link>
            <Link to="/events" className="w-full sm:w-auto">
              <button style={{
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #00BCD4, #2196F3)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box'
              }} className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-semibold text-warm-charcoal hover:bg-gradient-to-r hover:from-ec2-cyan hover:to-ec2-blue hover:text-white transition-all duration-300">
                Browse Events
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
