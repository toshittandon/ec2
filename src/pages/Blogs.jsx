import { useState } from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [filter, setFilter] = useState('All');

  const blogs = [
    {
      id: 1,
      title: 'Building a Startup in Berlin: Lessons from the Trenches',
      author: 'Sarah Chen',
      date: 'Oct 20, 2025',
      category: 'Entrepreneurship',
      readTime: '5 min read',
      image: '🚀',
      excerpt: 'Three years ago, I launched my first startup in Berlin. Here are the key lessons I learned navigating Europe\'s startup capital...',
      featured: true,
    },
    {
      id: 2,
      title: 'The Future of Community-Driven Innovation',
      author: 'Marcus Weber',
      date: 'Oct 15, 2025',
      category: 'Community',
      readTime: '7 min read',
      image: '🤝',
      excerpt: 'How grassroots movements are reshaping the entrepreneurial landscape in Berlin and beyond...',
      featured: false,
    },
    {
      id: 3,
      title: 'Sustainable Startups: Profit with Purpose',
      author: 'Elena Rodriguez',
      date: 'Oct 10, 2025',
      category: 'Sustainability',
      readTime: '6 min read',
      image: '🌱',
      excerpt: 'Exploring how modern entrepreneurs are building businesses that prioritize both profit and environmental impact...',
      featured: true,
    },
    {
      id: 4,
      title: 'Networking 101: Making Meaningful Connections',
      author: 'Alex Thompson',
      date: 'Oct 5, 2025',
      category: 'Career',
      readTime: '4 min read',
      image: '🎯',
      excerpt: 'Forget collecting business cards. Here\'s how to build genuine relationships that last...',
      featured: false,
    },
    {
      id: 5,
      title: 'From Idea to MVP in 30 Days',
      author: 'Lisa Schmidt',
      date: 'Sep 28, 2025',
      category: 'Entrepreneurship',
      readTime: '8 min read',
      image: '💡',
      excerpt: 'A practical guide to rapid prototyping and validation without breaking the bank...',
      featured: false,
    },
    {
      id: 6,
      title: 'Berlin\'s Startup Ecosystem: A 2025 Overview',
      author: 'David Park',
      date: 'Sep 22, 2025',
      category: 'Industry Insights',
      readTime: '10 min read',
      image: '🏙️',
      excerpt: 'An in-depth analysis of Berlin\'s thriving startup scene, key players, and emerging trends...',
      featured: true,
    },
    {
      id: 7,
      title: 'The Art of Pitching: Captivating Investors',
      author: 'Sophie Laurent',
      date: 'Sep 15, 2025',
      category: 'Entrepreneurship',
      readTime: '6 min read',
      image: '🎤',
      excerpt: 'Master the essential elements of a winning pitch deck and presentation style...',
      featured: false,
    },
    {
      id: 8,
      title: 'Community Service: The Unexpected Networking Tool',
      author: 'James Wilson',
      date: 'Sep 8, 2025',
      category: 'Community',
      readTime: '5 min read',
      image: '🌟',
      excerpt: 'How volunteering can expand your network while making a real difference in your community...',
      featured: false,
    },
    {
      id: 9,
      title: 'Work-Life Balance in the Startup World',
      author: 'Nina Patel',
      date: 'Sep 1, 2025',
      category: 'Career',
      readTime: '7 min read',
      image: '⚖️',
      excerpt: 'Maintaining your wellbeing while building your dream company is possible. Here\'s how...',
      featured: false,
    },
  ];

  const categories = ['All', 'Entrepreneurship', 'Community', 'Sustainability', 'Career', 'Industry Insights'];

  const filteredBlogs = filter === 'All' 
    ? blogs 
    : blogs.filter((blog) => blog.category === filter);

  const featuredBlogs = blogs.filter((blog) => blog.featured);
  const latestBlog = blogs[0];

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
      {latestBlog && (
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
                  <span className="text-8xl sm:text-9xl">{latestBlog.image}</span>
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

      {/* Blog Grid */}
      <section className="py-8 sm:py-12 px-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredBlogs.slice(1).map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-xl overflow-hidden smooth-shadow hover:smooth-shadow-hover transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <div
                  style={{
                    background: getCategoryGradient(blog.category),
                  }}
                  className="h-48 flex items-center justify-center"
                >
                  <span className="text-6xl">{blog.image}</span>
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

      {/* Newsletter CTA */}
      <section className="py-12 sm:py-16 px-4">
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
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-warm-charcoal focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-warm-charcoal rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
