# EC² Berlin - Entrepreneurship and Community Club

A modern, vibrant, and fully responsive website for EC² (Entrepreneurship and Community Club), a dynamic student organization based in Berlin, Germany. Built with React, Vite, and Tailwind CSS.

## � About EC²

EC² (Entrepreneurship and Community Club) is Berlin's premier student organization dedicated to:
- Fostering entrepreneurship and innovation
- Building strong community connections
- Empowering the next wave of founders and citizens
- Creating lasting impact through collaboration and social change

## �🎨 Design Philosophy

The website features a vibrant, energetic design inspired directly from the EC² logo colors:

### Color Palette
- **EC² Yellow**: `#FFD700` - Energy and optimism
- **EC² Orange**: `#FF8C00` - Creativity and enthusiasm  
- **EC² Pink**: `#E91E63` - Innovation and passion
- **EC² Magenta**: `#C2185B` - Bold leadership
- **EC² Cyan**: `#00BCD4` - Community and trust
- **EC² Blue**: `#2196F3` - Professionalism and reliability
- **EC² Green**: `#4CAF50` - Growth and sustainability
- **EC² Lime**: `#8BC34A` - Fresh ideas and vitality

### Design Elements
- Vibrant gradient text and backgrounds throughout
- Inline style gradients for maximum browser compatibility
- Smooth hover effects and transitions
- Clean white backgrounds for color vibrancy
- Modern card-based layouts with soft shadows
- Fully responsive design for all devices

## 🚀 Tech Stack

- **React 19.1.1** - Latest React for modern UI development
- **Vite 7.1.14** - Lightning-fast build tool with rolldown
- **Tailwind CSS 3.3.6** - Utility-first CSS framework with custom EC² colors
- **React Router DOM 6.20.0** - Seamless client-side routing
- **PostCSS 8.4.32** - CSS transformations
- **Autoprefixer 10.4.16** - Browser compatibility

## 📁 Project Structure

```
/src
├── /components          # Reusable components
│   ├── Header.jsx       # Fixed navigation with mobile menu & "Join the Club" button
│   ├── Footer.jsx       # Footer with EC² logo, links & social media
│   ├── ButtonPrimary.jsx # Gradient button component (Pink → Magenta)
│   └── FeatureCard.jsx  # Card component with pink border & hover effects
├── /pages               # Page components
│   ├── Home.jsx         # Landing page with hero, stats, features & events
│   ├── Events.jsx       # Events listing with category filters
│   ├── Team.jsx         # Leadership team with unique gradients per member
│   └── Contact.jsx      # Contact form, info & social links
├── /public
│   └── ec2.svg          # EC² logo
├── App.jsx              # Main app with routing
├── main.jsx             # App entry point
├── index.css            # Tailwind imports & custom utilities
└── tailwind.config.js   # Custom EC² color palette configuration
```

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd EC2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📄 Pages Overview

### 🏠 Home
- **Hero Section**: EC² logo, gradient headline, and mission statement
- **Stats**: 250+ Members displayed prominently
- **Value Proposition**: Three key pillars (Ideation Workshops, Local Impact Projects, Global Speaker Series)
- **Community Showcase**: "Berlin's Entrepreneurial Heartbeat" with gradient card
- **Upcoming Events**: Preview of next 3 events with category-based gradients
- **Call-to-Action**: "Ready to Make an Impact?" with dual-button CTA

### 📅 Events
- **Filterable Grid**: Category filters (All, Entrepreneurship, Community)
- **Event Cards**: 
  - Entrepreneurship events with Pink → Magenta gradient backgrounds
  - Community events with Cyan → Blue gradient backgrounds
  - Date, time, location, and description for each event
  - "Register Now" buttons with vibrant gradients
- **Responsive Layout**: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)

### 👥 Team
- **Leadership Grid**: 6 team members with unique gradient backgrounds
- **Member Cards**: Name, role, bio, and social links
- **Unique Gradients**: Each member has a different vibrant gradient (Pink, Cyan, Green, Yellow, Blue, Orange combinations)
- **Join CTA**: "Want to Join Our Team?" with application button
- **Values Section**: Mission-Driven, Collaborative, Innovation-Focused

### 📧 Contact
- **Contact Form**: Name, email, message fields with validation
- **Contact Info**: 
  - Email: info@ec2berlin.org
  - Location: Berlin, Germany
- **Social Media Links**:
  - Instagram: [@ec2_berlin](https://www.instagram.com/ec2_berlin?igsh=MWU3OWJpY3o1ZHFicA==)
  - LinkedIn: [EC² Group](https://www.linkedin.com/groups/13286322)
  - WhatsApp: [Join Community](https://chat.whatsapp.com/G1oZA23TBaDAfzf83LmfmI)
- **FAQ Section**: Common questions about membership and involvement

## ✨ Key Features

### Responsive Design
- **Mobile-First**: Optimized for phones (< 640px)
- **Tablet Support**: 2-column layouts (640px - 1024px)
- **Desktop**: Full 3-column grids (> 1024px)
- **Working Mobile Menu**: Hamburger menu with slide-down navigation
- **Adaptive Typography**: Text sizes scale from sm → md → lg → xl

### Vibrant Color System
- **Gradient Text**: All major headings use vibrant multi-color gradients
- **Inline Styles**: Gradient backgrounds using inline styles for maximum compatibility
- **Category Colors**: Events and team members color-coded for visual hierarchy
- **Hover Effects**: Interactive color transitions on buttons and links

### Navigation
- **Fixed Header**: Stays visible while scrolling
- **Scroll Effects**: Background changes from transparent to solid on scroll
- **Mobile Menu**: Toggle menu with "Join the Club" button
- **"Join the Club" Button**: Direct WhatsApp group link in header

### Performance
- **Vite Build**: Lightning-fast hot module replacement (HMR)
- **Code Splitting**: Optimized bundle sizes with React Router
- **Production Ready**: Minified and optimized for deployment

## 🎨 Color System

### EC² Logo Colors
```javascript
{
  'ec2-yellow': '#FFD700',      // Energy & Optimism
  'ec2-orange': '#FF8C00',      // Creativity & Enthusiasm
  'ec2-pink': '#E91E63',        // Innovation & Passion
  'ec2-magenta': '#C2185B',     // Bold Leadership
  'ec2-cyan': '#00BCD4',        // Community & Trust
  'ec2-blue': '#2196F3',        // Professionalism
  'ec2-green': '#4CAF50',       // Growth & Sustainability
  'ec2-lime': '#8BC34A',        // Fresh Ideas & Vitality
}
```

### Layout Colors
```javascript
{
  'warm-bg': '#f7f3f0',         // Light background
  'warm-linen': '#FAF0E6',      // Section backgrounds
  'warm-charcoal': '#2c2c2c',   // Primary text & dark sections
  'warm-accent': '#d9534f',     // Legacy accent (replaced with EC² colors)
}
```

## 🔧 Customization

### Adding New Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'your-color': '#hexcode',
    },
  },
}
```

### Creating Gradient Text
Use inline styles for maximum compatibility:
```jsx
<h1 style={{
  background: 'linear-gradient(to right, #FFD700, #E91E63, #00BCD4)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
}} className="text-4xl font-bold">
  Your Gradient Text
</h1>
```

### Creating Gradient Backgrounds
```jsx
<div style={{
  background: 'linear-gradient(to bottom right, #E91E63, #C2185B)'
}} className="p-8 rounded-xl">
  Your Content
</div>
```

## 📱 Social Media

- **Instagram**: [@ec2_berlin](https://www.instagram.com/ec2_berlin?igsh=MWU3OWJpY3o1ZHFicA==)
- **LinkedIn**: [EC² Group](https://www.linkedin.com/groups/13286322)
- **WhatsApp Community**: [Join Here](https://chat.whatsapp.com/G1oZA23TBaDAfzf83LmfmI)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist/` directory.

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Vercel auto-detects Vite configuration
4. Deploy!

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Environment Variables
No environment variables required for basic deployment.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Add YourFeature'`
4. Push to branch: `git push origin feature/YourFeature`
5. Submit a pull request

## 📝 License

MIT License

Copyright (c) 2025 EC² Berlin - Entrepreneurship and Community Club

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 👥 Contact

- **Email**: info@ec2berlin.org
- **Location**: Berlin, Germany
- **Website**: [Coming Soon]

## 🙏 Acknowledgments

- EC² logo design and color palette
- Berlin's vibrant startup and student community
- All EC² members and supporters

---

**Built with ❤️ for EC² Berlin**

*Igniting Berlin's Next Wave of Founders and Citizens*
    },
  },
}
```

### Adding New Pages
1. Create component in `/src/pages`
2. Add route in `/src/App.jsx`
3. Add navigation link in `/src/components/Header.jsx`

### Modifying Events
Edit the `events` array in `/src/pages/Events.jsx` to add/remove events.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is part of EC² Berlin's digital presence.

## 👥 Contributors

Built for the Entrepreneurship and Community Club at TU Berlin.

---

**EC² Berlin** - Igniting Berlin's Next Wave of Founders and Citizens 🚀

