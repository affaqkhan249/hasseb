/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-navy": "#11264D",
        "dark-navy": "#0D1F45",
        "brand-blue": "#1E4FA3",
        "brand-blue-hover": "#163D80",
        gold: "#C89B3C",
        "light-gold": "#D8B15A",
        "gold-hover": "#B6872F",
        "gray-light": "#E9E9E9",
        "input-border": "#DDDDDD",
        "focus-blue": "#0C8CE9",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        card: "25px",
      },
      boxShadow: {
        nav: "0 20px 45px rgba(13, 31, 69, 0.35)",
        card: "0 30px 60px rgba(13, 31, 69, 0.35)",
        gold: "0 12px 24px rgba(200, 155, 60, 0.35)",
        "gold-lg": "0 16px 30px rgba(200, 155, 60, 0.45)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
