import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import tailwindcssTypography from "@tailwindcss/typography";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      creepster: ['Creepster', 'cursive'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% center' },
          '50%': { backgroundPosition: '-200% center' },
        },
        'sweep-mask': {
          '0%': {
            left: '-100%',
          },
          '50%, 100%': {
            left: '100%',
          }
        }
      },
      animation: {
        shimmer: 'shimmer 4s ease-in-out infinite',
        'sweep-mask': 'sweep-mask 2s ease-out forwards',
      }
    },
  },
  plugins: [
    tailwindcssTypography,
    daisyui,
  ],
  daisyui: {
    themes: [{
      light: {
        ...require("daisyui/src/theming/themes")["emerald"],
        primary: '#D42422',
        neutral: '#dee2df',
        'neutral-content': '#67646E',
        'base-100': '#FAFAFA',
        'base-200': '#E5E5E5',
        'base-300': '#F0F0F0',
        'base-content': '#262626',
      },
    }, {
      dark: {
        ...require("daisyui/src/theming/themes")["dark"],
        primary: '#D42422',
        // primary: '#80CA90',
        neutral: '#404040',
        'neutral-content': '#A1A1A1',
        'base-100': '#171717',
        'base-200': '#262626',
        'base-300': '#000000',
        'base-content': '#eeeeee',
      }
    }],
  },
};
export default config;
