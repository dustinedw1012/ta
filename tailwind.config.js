/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    safelist: [
   {
    pattern: /./, // the "." means "everything"
   },
  ],
  theme: {
    colors: { 'dark_green': { DEFAULT: '#132011', 100: '#040704', 200: '#080d07', 300: '#0c140b', 400: '#101b0e', 500: '#132011', 600: '#375e31', 700: '#5b9a51', 800: '#8ec087', 900: '#c7dfc3' }, 'reseda_green': { DEFAULT: '#87907B', 100: '#1b1d18', 200: '#363a30', 300: '#515748', 400: '#6b7461', 500: '#87907b', 600: '#9ea694', 700: '#b6bcaf', 800: '#cfd2ca', 900: '#e7e9e4' }, 'reseda_green': { DEFAULT: '#687039', 100: '#15160b', 200: '#292d17', 300: '#3e4322', 400: '#535a2d', 500: '#687039', 600: '#929d4f', 700: '#b0ba77', 800: '#cad1a4', 900: '#e5e8d2' }, 'ash_gray': { DEFAULT: '#CACEBD', 100: '#2a2d21', 200: '#555a43', 300: '#7f8764', 400: '#a5ac8e', 500: '#cacebd', 600: '#d4d7c9', 700: '#dfe1d7', 800: '#e9ebe4', 900: '#f4f5f2' }, 'dark_moss_green': { DEFAULT: '#54531F', 100: '#111106', 200: '#22220d', 300: '#333313', 400: '#454419', 500: '#54531f', 600: '#8f8d35', 700: '#bfbe53', 800: '#d5d38c', 900: '#eae9c6' } },
    extend: {},
  },
  plugins: [],
}

