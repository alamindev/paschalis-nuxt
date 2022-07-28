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
      inter: ["inter", "sans-serif"],
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
        "brand-gray-light": "#FEFEFE",
        "brand-dark-200": "#2D3A3F",
        "brand-blue": "#0072FF",
        "brand-blue-900": "#0181FF",
        "brand-blue-50": "#CDE6FF",
        "brand-lime": "#00C6FF",
      },
      boxShadow: {
        "icon-box": "0px 14px 42px 0 #F1E5E1",
        "price-box": "0px 14px 55px 0 rgba(74,83,188,0.08)",
        common: "9px 28px 68px 0 rgba(49,83,211,0.12)",
        "sign-up":
          "0 30px 39px 0 rgba(1,133,255,0.14), inset 0 2px 13px 0 rgba(255,255,255,.52)",
        user: "0 30px 39px 0 rgba(1,133,255,0.14), inset 0 1.7px 8.5px 0 rgba(255,255,255,.52)",
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
