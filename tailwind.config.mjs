/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#526762",
        secondary: "#92ddcb",
        dark: {
          1: "#010101",
          2: "#111114",
        },
      },
      backgroundImage: {
        "intro-background": "url(/background.jpg)",
      },

      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
        myriad: ["var(--font-myriad)", ...fontFamily.sans]
      },

      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] pt-4 mx-auto px-5 md:px-10 lg:px-20 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-inter font-medium text-[2.2rem] leading-[2.8rem]  md:leading-[3.75rem] lg:leading-[3.75rem] lg:text-[2.8rem]  xl:text-[3.2rem] xl:leading-[3.75rem] 2xl:text-[3.5rem]":
            {},
        },
        ".h2": {
          "@apply font-medium text-[1.6rem] leading-[1.8rem] md:text-[1.75rem] md:leading-[1.75rem] lg:leading-[1.8rem] xl:text-[2rem] xl:leading-[2.2rem]":
            {},
        },
        ".h3": {
          "@apply font-bold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem]  lg:text-[3.50rem] lg:leading-[4.0625rem] xl:text-[3.80rem] xl:leading-[4.5rem]":
            {},
        },
        ".h4": {
          "@apply font-medium text-xl md:text-3xl md:leading-[2.75rem] lg:leading-[4.0625rem] xl:text-4xl xl:leading-[3.5rem]":
            {},
        },
        ".body-1": {
          "@apply font-poppins font-normal  text-[0.9rem] lg:text-lg": {},
        },
      });
    }),
    animations,
  ],
};
