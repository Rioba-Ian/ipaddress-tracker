/** @type {import('tailwindcss').Config} */
export default {
 content: ["./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
  extend: {
   colors: {
    "very-dark-grey": "hsl(0,0%,17%)",
    "dark-grey": "hsl(0,0%,59%)",
   },
  },
 },
 plugins: [],
};
