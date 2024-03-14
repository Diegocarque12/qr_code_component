/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      blue: "#2C7DFA",
      blueShade: "#3685FF",
      darkNavy: "#1F314F",
      grey: "#7D889E",
      lightGrey: "#D5E1EF",
      white: "#fff",
    },
    fontSize: {
      body: "15px",
      heading: "22px",
    },
  },
  plugins: [],
};
