import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogsAPI, newsletterAPI } from '../lib/api';
import { blogImagesAPI } from '../lib/storage';

const Blogs = () => {
  const [filter, setFilter] = useState('All');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null);
  const [isSubscribing, setIsSubscribing] = useState(false);

  // Fetch blogs from Appwrite
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const fetchedBlogs = await blogsAPI.getAll();
        setBlogs(fetchedBlogs);
        setError(null);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const categories = ['All', 'Entrepreneurship', 'Community', 'Sustainability', 'Career', 'Industry Insights'];

  const filteredBlogs = filter === 'All' 
    ? blogs 
    : blogs.filter((blog) => blog.category === filter);

  const featuredBlogs = blogs.filter((blog) => blog.featured);
  const latestBlog = blogs[0];

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    setNewsletterStatus(null);

    try {
      await newsletterAPI.subscribe(newsletterEmail);
      setNewsletterStatus({ type: 'success', message: 'Successfully subscribed! Check your inbox for confirmation.' });
      setNewsletterEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      if (error.message?.includes('duplicate')) {
        setNewsletterStatus({ type: 'error', message: 'This email is already subscribed!' });
      } else {
        setNewsletterStatus({ type: 'error', message: 'Failed to subscribe. Please try again.' });
      }
    } finally {
      setIsSubscribing(false);
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Entrepreneurship':
        return '#E91E63';
      case 'Community':
        return '#00BCD4';
      case 'Sustainability':
        return '#4CAF50';
      case 'Career':
        return '#FF8C00';
      case 'Industry Insights':
        return '#9C27B0';
      default:
        return '#666';
    }
  };

  const getCategoryGradient = (category) => {
    switch (category) {
      case 'Entrepreneurship':
        return 'linear-gradient(to bottom right, #E91E63, #C2185B)';
      case 'Community':
        return 'linear-gradient(to bottom right, #00BCD4, #2196F3)';
      case 'Sustainability':
        return 'linear-gradient(to bottom right, #4CAF50, #8BC34A)';
      case 'Career':
        return 'linear-gradient(to bottom right, #FF8C00, #FFD700)';
      case 'Industry Insights':
        return 'linear-gradient(to bottom right, #9C27B0, #E91E63)';
      default:
        return 'linear-gradient(to bottom right, #666, #999)';
    }
  };

  return (
    <div className="min-h-screen bg-warm-bg">
      {/* Hero Section */}
      <section className="bg-white pt-24 sm:pt-32 pb-12 sm:pb-16 px-4">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1
            style={{
              background: 'linear-gradient(to right, #FFD700, #E91E63, #00BCD4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            EC² Blog
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, stories, and lessons from Berlin's entrepreneurial community.
            Learn from founders, innovators, and change-makers.
          </p>
        </div>
      </section>

      {/* Featured Blog - Hero Style */}
      {!loading && !error && latestBlog && (
        <section className="py-8 sm:py-12 px-4">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-warm-charcoal">
              Latest Article
            </h2>
            <div
              style={{
                background: getCategoryGradient(latestBlog.category),
              }}
              className="rounded-2xl overflow-hidden smooth-shadow-hover"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-auto flex items-center justify-center bg-white/10">
                  {latestBlog.image ? (
                    <img 
                      src={blogImagesAPI.getPreview(latestBlog.image, 600, 400)} 
                      alt={latestBlog.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <span className={`text-8xl sm:text-9xl ${latestBlog.image ? 'hidden' : ''}`}>📝</span>
                </div>
                <div className="p-6 sm:p-8 md:p-10 text-white flex flex-col justify-center">
                  <div className="text-sm font-semibold mb-3 opacity-90">
                    {latestBlog.category} • {latestBlog.readTime}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                    {latestBlog.title}
                  </h3>
                  <p className="text-base sm:text-lg mb-6 opacity-90 leading-relaxed">
                    {latestBlog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{latestBlog.author}</div>
                      <div className="text-sm opacity-75">{latestBlog.date}</div>
                    </div>
                    <button className="px-6 py-3 bg-white text-warm-charcoal rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      {!loading && !error && (
        <section className="py-4 sm:py-8 px-4">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 sm:px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    filter === category
                      ? 'text-white shadow-lg scale-105'
                      : 'bg-white text-warm-charcoal hover:shadow-md'
                  }`}
                  style={
                    filter === category
                      ? { background: getCategoryGradient(category === 'All' ? 'Industry Insights' : category) }
                      : {}
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Loading State */}
      {loading && (
        <div className="text-center py-16">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-ec2-pink"></div>
          <p className="mt-4 text-gray-600">Loading blogs...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-16">
          <p className="text-xl text-red-500">{error}</p>
        </div>
      )}

      {/* Blog Grid */}
      {!loading && !error && (
        <section className="py-8 sm:py-12 px-4">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredBlogs.slice(1).map((blog) => (
                <article
                  key={blog.$id}
                  className="bg-white rounded-xl overflow-hidden smooth-shadow hover:smooth-shadow-hover transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  <div
                    style={{
                      background: getCategoryGradient(blog.category),
                    }}
                    className="h-48 flex items-center justify-center"
                  >
                    {blog.image ? (
                      <img 
                        src={blogImagesAPI.getPreview(blog.image, 400, 300)} 
                        alt={blog.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <span className={`text-6xl ${blog.image ? 'hidden' : ''}`}>📝</span>
                  </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      style={{ color: getCategoryColor(blog.category) }}
                      className="text-xs sm:text-sm font-semibold"
                    >
                      {blog.category}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-warm-charcoal line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 flex-1 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="border-t pt-4 mt-auto">
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <div className="font-semibold text-warm-charcoal">
                          {blog.author}
                        </div>
                        <div className="text-gray-500 text-xs">{blog.date}</div>
                      </div>
                      <button
                        style={{ color: getCategoryColor(blog.category) }}
                        className="font-semibold hover:underline"
                      >
                        Read →
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Newsletter CTA */}
      <section id="newsletter" className="py-12 sm:py-16 px-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            style={{
              background: 'linear-gradient(to right, #E91E63, #00BCD4)',
            }}
            className="rounded-2xl p-8 sm:p-12 text-center text-white smooth-shadow-hover"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Never Miss an Update
            </h2>
            <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Subscribe to our newsletter and get the latest articles, event updates,
              and exclusive insights delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={isSubscribing}
                className="flex-1 px-4 py-3 rounded-lg text-warm-charcoal focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
              />
              <button 
                type="submit" 
                disabled={isSubscribing}
                className="px-6 py-3 bg-white text-warm-charcoal rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {newsletterStatus && (
              <div
                className={`mt-6 p-4 rounded-lg max-w-md mx-auto ${
                  newsletterStatus.type === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {newsletterStatus.message}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
