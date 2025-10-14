/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: '#000000',
          primary: '#203a54',
          text: '#ffffff',
          muted: '#718392',
        },
      },
    },
  },
  plugins: [],
}
