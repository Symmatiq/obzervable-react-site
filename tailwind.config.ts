import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#002F5F",  // Deep blue
          light: "#104A80",
          dark: "#00213F"
        },
        secondary: {
          DEFAULT: "#00B8A9",  // Vibrant teal
          light: "#0FDBCA",
          dark: "#008C82"
        },
        accent: {
          DEFAULT: "#F4F4F4",  // Soft grey
          dark: "#E0E0E0"
        }
      },
      fontFamily: {
        sans: ["Roboto", "Open Sans", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config; 