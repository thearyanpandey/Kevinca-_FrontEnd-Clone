/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
     {
      fontFamily: {
        bebas: ["Bebas Neue", ...defaultTheme.fontFamily.sans],
        'fk-display' : ['FK Display', 'sans-serif']
      },
    },
    
    transitionTimingFunction: {
      'custom': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    },
    // colors:{
    //   backgound: "#0B0B0B",
    //   backgoundContrast: "#111",
    //   textWhite: "#FDF2E6",
    //   white: "#fff"
    // },
    scale: {
      '200': '2',
    },
    fontSize:{
      xs: "0.75rem", // 12px (12/16)
      sm: "0.85rem", // 14px
      base: "1.0625rem", // 17px
      lg: ["1.1875rem", "1.21"], // 19px
      xl: "1.3125rem", // 21px
      "2xl": "1.5rem", // 20px
      "3xl": "1.75rem", // 28px
      "4xl": ["2.5rem", "1.1"], // 40px
      "5xl":[ "4.5rem", "1.05"], // 72px
      "8xl": ["6rem", "0.9"],  //Line height divide by 40
      "9xl": ["6.25rem", "0.9"]  //Line height divide by 40
    },

    keyframes: {
      fade: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
    animation: {
      fade: 'fade 0.1s ease-in-out',
    },

    // keyframes: {
    //   "carousel-move": {
    //     "0%": { transform: "translateX(0)" },
    //     "100%": { transform: "translateX(-100%)" },
    //   },
    // },
    // animation: {
    //   "carousel-move": "carousel-move var(--duration,80s) infinite",
    // },
  },
  plugins: [],
}
