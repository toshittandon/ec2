import { useState } from 'react';
import { motion } from 'framer-motion';
import ButtonPrimary from '../components/ButtonPrimary';
import { contactAPI } from '../lib/api';
import PageTransition from '../components/PageTransition';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      // Submit only user-provided fields; API will set status internally
      await contactAPI.create(formData);
      setSubmitStatus({ type: 'success', message: 'Thank you for your message! We\'ll get back to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 bg-warm-bg">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <AnimatedSection className="mb-12 sm:mb-16 text-center">
            <h1 style={{
              background: 'linear-gradient(to right, #FFD700, #E91E63, #00BCD4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Have questions? Want to collaborate? We'd love to hear from you.
              Reach out and let's start a conversation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-16">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <div className="bg-white rounded-2xl p-6 sm:p-8 smooth-shadow">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-warm-charcoal">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-warm-charcoal mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-accent focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-warm-charcoal mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-accent focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-warm-charcoal mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-accent focus:border-transparent transition-all"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-warm-charcoal mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-accent focus:border-transparent transition-all resize-none"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
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

              <ButtonPrimary type="submit" className="w-full" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message'}
              </ButtonPrimary>
            </form>
          </div>
        </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection direction="right" delay={0.2} className="space-y-8">
            {/* Info Cards */}
            <div className="bg-white rounded-2xl p-8 smooth-shadow">
              <h3 className="text-2xl font-bold mb-6 text-warm-charcoal">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <div className="font-semibold text-warm-charcoal">
                      Email
                    </div>
                    <a
                      href="mailto:info@ec2berlin.org"
                      className="text-ec2-pink hover:text-ec2-magenta hover:underline transition-colors"
                    >
                      info@ecsquare.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <div className="font-semibold text-warm-charcoal">
                      Location
                    </div>
                    <p className="text-gray-600">
                      Berlin, Germany
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 smooth-shadow">
              <h3 className="text-2xl font-bold mb-6 text-warm-charcoal">
                Follow Us
              </h3>
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/ec2_berlin?igsh=MWU3OWJpY3o1ZHFicA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-700 hover:text-ec2-pink transition-colors group"
                >
                  <div className="w-12 h-12 bg-warm-bg rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-ec2-pink group-hover:to-ec2-magenta transition-all">
                    <svg
                      className="w-6 h-6 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <span className="font-semibold">Instagram</span>
                </a>

                <a
                  href="https://www.linkedin.com/groups/13286322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-700 hover:text-ec2-blue transition-colors group"
                >
                  <div className="w-12 h-12 bg-warm-bg rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-ec2-cyan group-hover:to-ec2-blue transition-all">
                    <svg
                      className="w-6 h-6 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="font-semibold">LinkedIn</span>
                </a>

                <a
                  href="https://chat.whatsapp.com/G1oZA23TBaDAfzf83LmfmI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-700 hover:text-ec2-green transition-colors group"
                >
                  <div className="w-12 h-12 bg-warm-bg rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-ec2-green group-hover:to-ec2-lime transition-all">
                    <svg
                      className="w-6 h-6 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <span className="font-semibold">WhatsApp Group</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* FAQ Section */}
        <AnimatedSection delay={0.3} className="bg-white rounded-2xl p-8 smooth-shadow">
          <h2 className="text-3xl font-bold mb-8 text-warm-charcoal text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg text-warm-charcoal mb-2">
                How can I join EC²?
              </h3>
              <p className="text-gray-600">
                Simply attend one of our events or fill out the membership form
                on our website. Membership is open to all students!
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-warm-charcoal mb-2">
                Are events free?
              </h3>
              <p className="text-gray-600">
                Most events are free for members. Some special workshops may
                have a small fee to cover materials.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-warm-charcoal mb-2">
                Can non-students participate?
              </h3>
              <p className="text-gray-600">
                While we're primarily a student organization, we welcome alumni
                and community members at many of our events.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-warm-charcoal mb-2">
                How often do you meet?
              </h3>
              <p className="text-gray-600">
                We host 2-3 events per month, ranging from workshops to
                networking events and community service projects.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
    </PageTransition>
  );
};

export default Contact;
