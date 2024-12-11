/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        borderRadiusMove: {
          "0%, 100%": { borderRadius: "31% 69% 45% 55% / 45% 60% 40% 55% " },
          "25%": { borderRadius: "50% 50% 32% 68% / 57% 39% 61% 43%" },
          "50%": { borderRadius: "60% 40% 50% 50% / 39% 60% 40% 61%" },
          "75%": { borderRadius: "25% 75% 27% 73% / 67% 26% 74% 33%" },
        },
      },
      animation: {
        "border-radius-move": "borderRadiusMove 5s infinite",
      },
      fontFamily: {
        merriWeather: `"Merriweather", serif`,
      },
      colors: {
        // primary: "#0D1B2A ",
        primary: "#1F1F1F ",
        "text-Color": "#F0BF6C",
        secondary: "#0D1B2A",
        accent: "#F70000",
        // accent: "#B22222",
        "accent-content": "#8B0000",
        "base-100": "#0D1B2A",
        "base-200": "#A3C1DA",
      },
    },
  },
  plugins: [require("daisyui")],
};
