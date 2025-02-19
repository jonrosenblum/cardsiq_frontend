/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      plusJakarta: ["Plus Jakarta Sans", "serif"],
    },
    extend: {
      colors: {
        primary: "#070707",
        secondary: "#7B66FF",
        color: "#1D1F2C",
        lightGray: "#F7F7FC",
        grayBorder: "#E9E9EA",
        grayBlack: "#4A4C56",
        danger: "#CB121D",
      },
      backgroundImage: {
        gradient: "linear-gradient(to right, #8CEEFF, #887AFF, #8CEEFF)",
        gradientHover: "linear-gradient(to right, #887AFF, #887AFF, #887AFF)",
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'fade-out': 'fadeOut 0.3s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
