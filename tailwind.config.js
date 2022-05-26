module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
