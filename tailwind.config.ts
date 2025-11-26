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
        bg: {
          deep: "#020a05",
          main: "#051108",
          secondary: "#0a1f12",
          card: "rgba(10, 31, 18, 0.6)",
        },
        text: {
          primary: "#e8f5e0",
          muted: "#8fb896",
        },
        accent: {
          glow: "#4fffd0",
          soft: "rgba(79, 255, 208, 0.15)",
        },
        earth: "#3d5c3f",
        gold: "#c9a86c",
        warm: "#e8c4a0",
      },
      fontFamily: {
        display: ["var(--font-cormorant-garamond)"],
        body: ["var(--font-questrial)"],
      },
      animation: {
        'float-particle': 'float-particle 8s infinite',
        'shimmer': 'shimmer 8s linear infinite',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'ring-pulse': 'ring-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        'float-particle': {
          '0%': { opacity: '0', transform: 'translateY(100vh) scale(0)' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { opacity: '0', transform: 'translateY(-100px) scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'fadeInUp': {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'ring-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.1)', opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
