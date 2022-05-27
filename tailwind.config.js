module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
