module.exports = {
  content: ['index.html', 'src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f2eae2',
        'dark-cyan': '#3c8067',
        'very-dark-blue': '#1c232b',
        'dark-grayish-blue': '#6b7189',
      },
      letterSpacing: {
        5: '5px',
      },
      backgroundImage: {
        'product-desktop':
          "url('./src/assets/images/image-product-desktop.jpg')",
        'product-mobile': "url('./src/assets/images/image-product-mobile.jpg')",
      },
    },
  },
  plugins: [],
}
