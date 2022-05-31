module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/background.png')",
        'footer-image': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [],
}
