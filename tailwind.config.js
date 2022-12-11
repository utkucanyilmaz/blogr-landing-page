/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        xl: "1110px",
      },
      colors: {
        "light-red": "hsl(356, 100%, 66%)",
        "very-light-red": "hsl(355, 100%, 74%)",
        "very-dark-blue": "hsl(208,49%,24%)",
        "grayish-blue": "hsl(240, 2%, 79%)",
        "very-dark-grayis-blue": "hsl(207, 13%, 34%)",
        "very-dark-black-blue": "hsl(240, 10%, 16%)",
        "gr-very-light-red": "hsl(13,100%,72%)",
        "gr-light-red": "hsl(353, 100%, 62%)",
        "gr-very-dark-gray-blue": "hsl(237, 17%, 21%)",
        "gr-very-dark-desaturared-blue": "hsl(237, 23%, 32%)",
      },

      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
