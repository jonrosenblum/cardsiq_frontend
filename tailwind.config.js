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
    },
  },
  plugins: [],
};
