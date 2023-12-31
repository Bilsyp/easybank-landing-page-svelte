/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        Dark_Blue: "hsl(233, 26%, 24%)",
        Lime_Green: "hsl(136, 65%, 51%)",
        Bright_Cyan: "hsl(192, 70%, 51%)",

        Grayish_Blue: "hsl(233, 8%, 62%)",
        Light_Grayish_Blue: "hsl(220, 16%, 96%)",
        Very_Light_Gray: "hsl(0, 0%, 98%)",
      },
      screens: {
        tablet: "578px",
        desktop: "1025px",
      },
    },
  },
  plugins: [],
};
