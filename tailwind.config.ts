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
        primary: "#5b58fd", // Simplified to a single hex code
        "primary-light": "#7296FF",
        "primary-dark": "#3358D6",
        secondary: {
          DEFAULT: "#1EC8B3",  // Obzervable teal
          light: "#42E6D1",
          dark: "#17A091"
        },
        accent: {
          DEFAULT: "#F8F8F8",  // Light gray
          dark: "#E6E6E6"
        }
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "system-ui", "-apple-system", "sans-serif"]
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