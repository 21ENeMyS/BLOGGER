/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", ...defaultTheme.fontFamily.serif],
        body: ["Roboto", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        primary: "#FFF",
        second: "#000",
        accent_1: "#E54004",
        accent_1_hover: "#B73100",
        accent_2: "#3B792F",
        warning: "#FFCC00",
        error: "#CC3300",
        success: "#339900",
      },
    },
  },
  plugins: [],
};
