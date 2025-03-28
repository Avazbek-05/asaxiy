/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      "charcoal-blue": "#282830",
      "vivid-blue": "#006BFF",
      "light-blue": "#e6e8ee",
      "fire-orange": "#FE7300",
      "soft-steel": "#c2c6d1",
      "turquoise-blue": "#00bfaf",
      "text-color": "#858997",
      "blue-gray": "#64748b",
      "dark-blue": "#0f172a",
      "light-gray":"#f1f5f9"
    },
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
    },
  },
  plugins: [],
};
