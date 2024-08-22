import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  themes: [
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens : {
        'sm':'770px'
      },
      keyframes: {
        "fly-in-up": {
          "0%": {
              opacity: "0",
              transform: "translate3d(0, 1500px, 0)",
              transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "60%": {
              opacity: "1",
              transform: "translate3d(0, -20px, 0)"
          },
          "75%": {
              transform: "translate3d(0, 10px, 0)"
          },
          "90%": {
              transform: "translate3d(0, -5px, 0)"
          },
          "100%": {
              transform: "translate3d(0, 0, 0)"
          },
      },
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      'light',
      {
        'dark': {
          ...require("daisyui/src/theming/themes")["dark"],
          "neutral":"#FFFFFF",
          "info":"#3a373d" 
        }
      },
      {
        'default': {
          ...require("daisyui/src/theming/themes")["default"],
          "primary":"#000000"
        }
      }
    ],
  }
};
export default config;
