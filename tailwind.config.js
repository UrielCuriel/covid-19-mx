const {
  colors: { red, gray },
} = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    colors: { red, gray },
    extend: {
      fill: (theme) => ({
        red: theme("colors.red"),
      }),
    },
  },
  variants: {
    fill: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
