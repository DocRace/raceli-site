module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'light-gray': 'rgba(245, 245, 245, 0.8)',
        'dark-gray': 'rgba(30, 30, 30, 0.8)',
      },
    },
  },
  plugins: [],
}