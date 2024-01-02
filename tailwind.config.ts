import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px"
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"]
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",

      },
      colors: {
        bodyColor: "#0A192F",       // Dark background color
        textGreen: "#64ffda",       // Vibrant green text color
        textLight: "#ccd6f6",       // Light text color
        textDark: "#8892b0",        // Dark text color
        hoverColor: "rgba(100, 255, 218, 0.1)",  // Light blue hover color
        primaryColor: "#3498db",    // Flat UI blue
        secondaryColor: "#e74c3c",  // Flat UI red
        accentColor: "#f39c12",     // Flat UI orange
        successColor: "#2ecc71",    // Flat UI green
        warningColor: "#f39c12",    // Flat UI yellow/orange
        dangerColor: "#e74c3c",     // Flat UI red
        infoColor: "#3498db",       // Flat UI blue
        darkGray: "#2c3e50",        // Dark gray
        lightGray: "#ecf0f1",       // Light gray
        borderColor: "#34495e",     // Border color
        backgroundGray: "#f8f9fa",  // Background gray
        linkColor: "#3498db",       // Link color
        purple: "#9b59b6",          // Purple
        teal: "#008080",            // Teal
        pink: "#e91e63",            // Pink
        yellow: "#f1c40f",          // Yellow
        darkGreen: "#006400",       // Dark green
        lightPurple: "#a569bd",     // Light purple
        coral: "#ff6f61",           // Coral
        lavender: "#967bb6",        // Lavender
        salmon: "#fa8072",          // Salmon
        navy: "#001f3f",            // Navy
        lightBlue: "#87CEEB",       // Light blue
        gold: "#ffd700",   
      }
    },
  },
  plugins: [],
}
export default config
