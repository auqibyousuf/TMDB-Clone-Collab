import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "linear-gradient": "linear-gradient(90deg, #1ED5A9 0%, #01B4E4 100%)",
        ctaImage: "url('../public/images/join.jpeg')",
      },
      backgroundColor: {
        primaryColor: "#032541",
        buttonSwitchActive: {
          background: "linear-gradient(90deg, #C0FECF 0%, #1ED5A9 100%)",
        },
      },
      colors: {
        btnTextColor: "#01B4E4",
      },
      // fontFamily: {
      //   SourceSansPro: "Source Sans Pro",
      // },
      // background: {
      //   "linear-gradient": "(90deg, #1ED5A9 0%, #01B4E4 100%)",
      // },
    },
    screens: {
      mobile: "23.4375rem",
      // => @media (min-width: 40rem) { ... }
      tablet: "48rem",
      // => @media (min-width: 48rem) { ... }
      laptop: "64rem",
      // => @media (min-width: 64rem) { ... }
      desktop: "80rem",
    },
  },
  plugins: [],
};
export default config;
