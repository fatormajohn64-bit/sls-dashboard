/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sls: {
          bg: '#0f172a',
          card: '#1e293b',
          border: '#334155',
          green: '#10b981',
          purple: '#8b5cf6',
          muted: '#94a3b8',
          red: '#ef4444'
        }
      }
    },
  },
  plugins: [],
}
