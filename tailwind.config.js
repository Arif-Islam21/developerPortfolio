/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D1B2A ",
        secondary: "#0D1B2A",
        accent: "#B22222",
        "accent-content": "#8B0000",
        "base-100": "#0D1B2A",
        "base-200": "#A3C1DA",
      },
    },
  },
  plugins: [require("daisyui")],
};
