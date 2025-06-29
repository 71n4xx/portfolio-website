/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '150px',       // => @media (min-width: 640px) { ... }
      md: '500px',       // => @media (min-width: 768px) { ... }
      lg: '1024px',      // => @media (min-width: 1024px) { ... }
      xl: '1280px',      // => @media (min-width: 1280px) { ... }
      '2xl': '1200px',     // => @media (min-width: 1536px) { ... }
    },
    extend: {
      
      boxShadow:{
        yellowShadow: '10px 10px 150px 100px rgba(247, 206, 70, 0.5)',
        pinkShadow: '10px 10px 200px 150px rgba(254, 88, 96, 0.5)',
      },
      colors: {
        yellow: "#F7CE46",
        darkViolet: "#1B1622",
        lightViolet: "#807393",
        mediumViolet: "#36313F",
        white: "#FFFFFF",
        gradient1: "#F7CE46",
        gradient2: "#FAB54F",
        gradient3: "#FA9952",
        gradient4: "#FB8B54",
        gradient5: "#FC745A",
        gradient6: "#FE5860",
        bgDark: '#2A2630',
      },
      fontFamily: {
        body: ['Poppins'],
        special: ['Montserrat'],
      },
    },
  },
  plugins: [],
}
