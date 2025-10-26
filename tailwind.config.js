/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // EC² Logo Color Palette
        'ec2-yellow': '#FFD700',
        'ec2-orange': '#FF8C00',
        'ec2-pink': '#E91E63',
        'ec2-magenta': '#C2185B',
        'ec2-cyan': '#00BCD4',
        'ec2-blue': '#2196F3',
        'ec2-green': '#4CAF50',
        'ec2-lime': '#8BC34A',
        
        // Primary colors for layout
        'warm-bg': '#FAFAFA',
        'warm-accent': '#E91E63',
        'warm-charcoal': '#1a1a1a',
        'warm-beige': '#F5F5F5',
      },
      backgroundImage: {
        'ec2-gradient': 'linear-gradient(135deg, #FFD700 0%, #FF8C00 25%, #E91E63 50%, #C2185B 75%, #2196F3 100%)',
        'ec2-gradient-alt': 'linear-gradient(135deg, #00BCD4 0%, #2196F3 33%, #4CAF50 66%, #8BC34A 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
