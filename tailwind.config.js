/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure all React components are scanned for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        darkGradient: {
          100: '#0f172a', // Dark navy blue
          200: '#1e293b', // Medium blue-gray
          300: '#334155', // Light blue-gray
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out', // Fade-in animation
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
