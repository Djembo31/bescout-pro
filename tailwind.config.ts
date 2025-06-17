import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Unsere BeScout/n8n Farbpalette
        background: {
          DEFAULT: '#121212', // Haupt-Hintergrund
          light: '#1E1E1E',   // Sekundärer Hintergrund (für Karten)
        },
        primary: {
          DEFAULT: '#FFFFFF', // Haupt-Textfarbe
          dark: '#B3B3B3',   // Sekundäre Textfarbe
        },
        accent: {
          DEFAULT: '#9A4AFF', // Lila/Magenta Akzent
          hover: '#B57AFF',  // Hover für Akzent
          secondary: '#00C9A7' // Türkis Akzent
        },
        border: '#333333',
        success: '#28A745',
        danger: '#DC3545',
      },
    },
  },
  plugins: [],
}
export default config 