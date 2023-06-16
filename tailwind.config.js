const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lapsus", ...defaultTheme.fontFamily.sans],
        mont: ["Mont"],
        shock: ["NulShock"],
        comic: ["Comic Neue"],
      },
      colors: {
        body: "#0A0C0F",
        primary: "#FBDFA1",
        secondary: "#C58E63",
      },
      boxShadow: {
        btn: "2px 2px 0px #B8B8B8",
      },
      backgroundSize: {
        fill: "100% 100%",
      },
      backgroundImage: {
        hero: 'url("/hero-bg.png")',
        tokenomicsText: 'url("/tokenomics-text.png")',
      },
    },
  },
  plugins: [],
};
