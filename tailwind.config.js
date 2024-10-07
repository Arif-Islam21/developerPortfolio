/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merriWeather: `"Merriweather", serif`,
      },
      colors: {
        // primary: "#0D1B2A ",
        primary: "#1F1F1F ",
        textColor: "#F7F7F7",
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
