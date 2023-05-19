/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "company-card": "350px",
      },
      width: {
        "company-card": "280px",
      },
    },
  },
  plugins: [],
};
