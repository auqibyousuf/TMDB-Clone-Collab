import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkBlue: "#032541",
        darkGrey: "#757575 ",
        purple: "#805BE7",
        lightBlue: "#01B4E4",
        lightBrown: "#897474",
        grey: "#D7D7D7",
        lightGrey: "E4E4E4",
      },
    },
    borderRadius: {
      sm: " 5px",
      md: "8px",
      lg: "16px",
      xl: "30px",
      full: "100%",
    },
  },
  plugins: [],
};
export default config;
