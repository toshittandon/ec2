import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { teamAPI, teamApplicationsAPI } from '../lib/api';
import { teamImagesAPI } from '../lib/storage';
import PageTransition from '../components/PageTransition';
import AnimatedSection from '../components/AnimatedSection';

const AboutUs = () => {
  const [leadership, setLeadership] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    program: '',
    interestedRole: '',
    motivation: '',
    experience: '',
    linkedin: ''
  });

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const teamData = await teamAPI.getAll();
        setLeadership(teamData);
      } catch (err) {
        console.error('Error fetching team members:', err);
        setError('Failed to load team members. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      await teamApplicationsAPI.create(formData);
      setSubmitStatus({ 
        type: 'success', 
        message: 'Application submitted successfully! We\'ll review it and get back to you soon.' 
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        university: '',
        program: '',
        interestedRole: '',
        motivation: '',
        experience: '',
        linkedin: ''
      });
      setTimeout(() => {
        setShowApplicationForm(false);
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to submit application. Please try again.' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-warm-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-warm-accent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading team members...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-warm-bg flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 bg-warm-bg">
        <div className="container mx-auto px-4 sm:px-6">
          {/* About Us Header */}
          <AnimatedSection className="mb-12 text-center">
            <h1 style={{
              background: 'linear-gradient(to right, #FFD700, #E91E63, #00BCD4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Us
            </h1>
          </AnimatedSection>

          {/* About Us Description & Vision */}
          <AnimatedSection delay={0.1} className="mb-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-12 smooth-shadow">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center">
                Welcome to EC² - where possibilities meet action. We are more than just a club; 
                we are a vibrant community of aspiring entrepreneurs, innovators, and change-makers.
              </p>
              
              {/* Vision Section */}
              <div className="bg-gradient-to-br from-warm-accent/10 to-warm-peach/10 rounded-xl p-6 sm:p-8 border-l-4 border-warm-accent">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-warm-charcoal flex items-center justify-center">
                  <span className="mr-3"></span>
                  Our Vision
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
                  A place to find possibilities and transform ideas into real-world startups and solutions. 
                  Our entrepreneurship club is a collaborative community where we come together to 
                  continuously learn and share experiences.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Our Team Section Header */}
          <AnimatedSection delay={0.2} className="mb-12 text-center">
            <h2 style={{
              background: 'linear-gradient(to right, #E91E63, #00BCD4, #4CAF50)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Team
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Meet the passionate individuals driving EC²'s mission to empower
              Berlin's next generation of entrepreneurs and community leaders.
            </p>
          </AnimatedSection>

        {/* Team Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {leadership.map((member, index) => {
            const gradients = [
              'linear-gradient(to bottom right, #E91E63, #C2185B)',
              'linear-gradient(to bottom right, #00BCD4, #2196F3)',
              'linear-gradient(to bottom right, #4CAF50, #8BC34A)',
              'linear-gradient(to bottom right, #FFD700, #FF8C00)',
              'linear-gradient(to bottom right, #2196F3, #4CAF50)',
              'linear-gradient(to bottom right, #FF8C00, #E91E63)'
            ];
            const textColors = [
              '#E91E63',
              '#00BCD4',
              '#4CAF50',
              '#FF8C00',
              '#2196F3',
              '#C2185B'
            ];
            
            return (
              <motion.div
                key={member.$id}
                className={`bg-white rounded-2xl overflow-hidden smooth-shadow hover:smooth-shadow-hover ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                whileHover={{ y: -8 }}
              >
                {/* Profile Image Placeholder */}
                <div style={{ background: gradients[index] }} className="h-56 sm:h-64 flex items-center justify-center overflow-hidden relative">
                  {member.image ? (
                    <img
                      src={teamImagesAPI.getPreview(member.image, 400, 400)}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                  ) : null}
                  <span 
                    className={`text-7xl sm:text-9xl ${member.image ? 'hidden' : ''} absolute`}
                  >
                    {member.image ? null : '👤'}
                  </span>
                </div>

                {/* Member Info */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 text-warm-charcoal">
                    {member.name}
                  </h3>
                  <div style={{ color: textColors[index] }} className="font-semibold mb-4 text-sm sm:text-base">
                  {member.role}
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{member.bio}</p>

                {/* Social Links */}
                <div className="flex space-x-4 mt-6">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: textColors[index] }}
                      className="hover:opacity-80 transition-opacity"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                  <a
                    href="#"
                    style={{ color: textColors[index] }}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          );
          })}
        </div>

        {/* Join the Team Section */}
        <AnimatedSection delay={0.2} className="bg-white rounded-2xl p-8 sm:p-12 smooth-shadow text-center">
          <h2 style={{
            background: 'linear-gradient(to right, #FF8C00, #E91E63, #2196F3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto px-4">
            We're always looking for passionate individuals to help lead EC².
            Applications for leadership positions open each semester.
          </p>
          <motion.button 
            onClick={() => setShowApplicationForm(true)}
            style={{
              background: 'linear-gradient(to right, #E91E63, #C2185B)'
            }} 
            className="text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now!!!
          </motion.button>
        </AnimatedSection>

        {/* Application Form Popup */}
        {showApplicationForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-2xl w-full my-8 max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-warm-charcoal">
                  Want to Join our Team?
                </h3>
                <button
                  onClick={() => {
                    setShowApplicationForm(false);
                    setSubmitStatus(null);
                  }}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmitApplication} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-warm-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-accent focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-warm-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-accent focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-warm-charcoal mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-accent focus:border-transparent"
                      placeholder="+49 123 456 7890"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-warm-charcoal mb-2">
                      University *
                    </label>
                    <input
                      type="text"
                      name="university"
                      value={formData.university}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-accent focus:border-transparent"
                      placeholder="Your university"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-warm-charcoal mb-2">
                      Program/Major *
                    </label>
                    <input
                      type="text"
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-accent focus:border-transparent"
                      placeholder="Your program"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-warm-charcoal mb-2">
                    Interested Role *
                  </label>
                  <select
                    name="interestedRole"
                    value={formData.interestedRole}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-accent focus:border-transparent"
                  >
                    <option value="">Select a role</option>
                    <option value="President">President</option>
                    <option value="VP Community">VP Community</option>
                    <option value="VP Entrepreneurship">VP Entrepreneurship</option>
                    <option value="Head of Events">Head of Events</option>
                    <option value="Head of Communications">Head of Communications</option>
                    <option value="Treasurer">Treasurer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-warm-charcoal mb-2">
                    Why do you want to join EC²? *
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-accent focus:border-transparent resize-none"
                    placeholder="Tell us about your motivation..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-warm-charcoal mb-2">
                    Relevant Experience *
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-accent focus:border-transparent resize-none"
                    placeholder="Share your relevant experience..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-warm-charcoal mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-accent focus:border-transparent"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                {submitStatus && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-800'
                        : 'bg-red-50 text-red-800'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowApplicationForm(false);
                      setSubmitStatus(null);
                    }}
                    className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      background: 'linear-gradient(to right, #E91E63, #C2185B)'
                    }}
                    className="flex-1 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Values Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { icon: '🎯', title: 'Mission-Driven', desc: 'We\'re committed to fostering entrepreneurship and community impact in Berlin.' },
            { icon: '🤝', title: 'Collaborative', desc: 'We believe in the power of teamwork and diverse perspectives.' },
            { icon: '🚀', title: 'Innovation-Focused', desc: 'We encourage bold ideas and creative problem-solving.' }
          ].map((value, index) => (
            <motion.div 
              key={value.title}
              className={`text-center bg-white rounded-xl p-6 smooth-shadow ${index === 2 ? 'sm:col-span-2 md:col-span-1' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl sm:text-5xl mb-4">{value.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-warm-charcoal">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default AboutUs;
