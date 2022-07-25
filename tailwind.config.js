/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      noto: ["Noto Sans", "sans-serif"],
      fira: ["Fira Sans", "sans-serif"],
      arimo: ["Arimo", "sans-serif"],
    },
    extend: {
      colors: {
        "brand-dark-100": "#2C1B19",
        "brand-green-light": "#B5C730",
        "brand-red-20": "#785450",
        "brand-red-40": "#734643",
        "brand-red-60": "#715A55",
        "brand-dark-blue": "#333672",
        "brand-dark-gray": "#848199",
        "brand-gray": "#74829F",
      },
      boxShadow: {
        "icon-box": "0px 14px 42px 0 #F1E5E1",
        "price-box": "0px 14px 55px 0 rgba(74,83,188,0.08)",
      },
      backgroundPosition: {
        "top-center": "top center",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
