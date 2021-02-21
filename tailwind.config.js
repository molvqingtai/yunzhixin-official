module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: '#6F83AC',
        minor: '#3B4D76'
      },
      backgroundSize: {
        '15%': '15%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
