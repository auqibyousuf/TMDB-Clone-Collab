import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      mobile: "23.4375rem",
      // => @media (min-width: 40rem) { ... }
      tablet: "40rem",
      // => @media (min-width: 40rem) { ... }

      laptop: "64rem",
      // => @media (min-width: 64rem) { ... }
    },
    backgroundColor: {
      headerColor: "#032541;",
    },
  },
  plugins: [],
};
export default config;
