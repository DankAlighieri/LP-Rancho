import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mango: {
          orange: "#FF8A1C",
          dark: "#D96E0D",
        },
        leaf: {
          olive: "#92982E",
          fresh: "#4F7D32",
        },
        green: {
          deep: "#24391F",
          dark: "#0F230B",
        },
        cream: "#F8F3E6",
        sand: "#E8D7B8",
        earth: "#7A4A24",
        harvest: "#F6C744",
        charcoal: "#222222",
        soft: "#11140F",
        muted: "#6F6F64",
      },
      fontFamily: {
        heading: ["Montserrat", "Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 42px rgba(36, 57, 31, 0.08)",
        lift: "0 24px 46px rgba(36, 57, 31, 0.13)",
      },
      maxWidth: {
        site: "1180px",
      },
      textShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
