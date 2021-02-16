const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          sm: '4rem',
          lg: '8rem',
          xl: '10rem',
          '2xl': '12rem',
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  },
};
