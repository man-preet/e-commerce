// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // Important for React
    theme: {
      extend: {
        colors: {
          brand: {
            primary: "#FF6F61",
            secondary: "#32CD32",
            accent: "#2196F3",
          },
        },
      },
    },
    plugins: [],
  }
  