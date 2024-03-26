module.exports = {
  darkMode: 'class',
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  theme: {
    fontFamily: {
      serif: ['et-book', 'Palatino', "Palatino Linotype", "Palatino LT STD", "Book Antiqua", 'Georgia', 'serif']
    },
    extend: {
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ]
}
