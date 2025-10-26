const Team = () => {
  const leadership = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'President',
      bio: 'Computer Science major passionate about social entrepreneurship and tech for good.',
      image: '👩‍💼',
    },
    {
      id: 2,
      name: 'Maximilian Weber',
      role: 'VP Community',
      bio: 'Urban Planning student dedicated to sustainable community development in Berlin.',
      image: '👨‍💼',
    },
    {
      id: 3,
      name: 'Amara Okafor',
      role: 'Head of Events',
      bio: 'Business Administration major with experience organizing large-scale tech conferences.',
      image: '👩‍🎤',
    },
    {
      id: 4,
      name: 'Lars Bergström',
      role: 'VP Entrepreneurship',
      bio: 'Engineering student and founder of two successful startups in the AI space.',
      image: '👨‍🔬',
    },
    {
      id: 5,
      name: 'Priya Sharma',
      role: 'Head of Communications',
      bio: 'Communications major specializing in digital marketing and brand strategy.',
      image: '👩‍💻',
    },
    {
      id: 6,
      name: 'Thomas Müller',
      role: 'Treasurer',
      bio: 'Finance student managing EC² budget and corporate partnerships.',
      image: '👨‍💻',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-warm-bg">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 style={{
            background: 'linear-gradient(to right, #FFD700, #E91E63, #00BCD4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Leadership Team
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Meet the passionate individuals driving EC²'s mission to empower
            Berlin's next generation of entrepreneurs and community leaders.
          </p>
        </div>

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
              <div
                key={member.id}
                className={`bg-white rounded-2xl overflow-hidden smooth-shadow hover:smooth-shadow-hover transition-all duration-300 hover:-translate-y-2 ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Profile Image Placeholder */}
                <div style={{ background: gradients[index] }} className="h-56 sm:h-64 flex items-center justify-center">
                  <span className="text-7xl sm:text-9xl">{member.image}</span>
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
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
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
            </div>
          );
          })}
        </div>

        {/* Join the Team Section */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 smooth-shadow text-center">
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
          <button style={{
            background: 'linear-gradient(to right, #E91E63, #C2185B)'
          }} className="text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Apply for Leadership
          </button>
        </div>

        {/* Values Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center bg-white rounded-xl p-6 smooth-shadow">
            <div className="text-4xl sm:text-5xl mb-4">🎯</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-warm-charcoal">
              Mission-Driven
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We're committed to fostering entrepreneurship and community impact
              in Berlin.
            </p>
          </div>
          <div className="text-center bg-white rounded-xl p-6 smooth-shadow">
            <div className="text-4xl sm:text-5xl mb-4">🤝</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-warm-charcoal">
              Collaborative
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We believe in the power of teamwork and diverse perspectives.
            </p>
          </div>
          <div className="text-center bg-white rounded-xl p-6 smooth-shadow sm:col-span-2 md:col-span-1">
            <div className="text-4xl sm:text-5xl mb-4">🚀</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-warm-charcoal">
              Innovation-Focused
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We encourage bold ideas and creative problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
