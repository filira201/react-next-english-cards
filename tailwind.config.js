/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "xm": "400px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    extend: {
      boxShadow: {
        "custom": "rgba(0, 0, 0, 0.02) 0px 12px 32px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
      }
    }
  },

  plugins: [],
};
