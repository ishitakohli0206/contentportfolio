import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF7F0",
        "paper-alt": "#F2ECDF",
        ink: "#1C1914",
        "ink-soft": "#5C574C",
        "ink-faint": "#8B8577",
        claret: "#6E2B2E",
        "claret-soft": "#8A4A45",
        line: "#E3DBC8",
        "line-dark": "#332C22",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      letterSpacing: {
        wideish: "0.04em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
