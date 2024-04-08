
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`
module.exports = {
  darkMode: 'class',
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  theme: {
    extend: {
      typography: {
        lg: {
          css: {
            fontSize: '1.3rem',
            h1: {
              fontWeight: 'normal',
              fontSize: '2.25rem',
              a: {
                textDecoration: 'none',
              }
            },
            h2: {
              fontWeight: 'normal',
              a: {
                textDecoration: 'none',
              }
            },
            h3: {
              fontWeight: 'normal',
              a: {
                textDecoration: 'none',
              }
            },
            h4: {
              fontWeight: 'normal',
              a: {
                textDecoration: 'none',
              }
            },
          },
        },
        invert: {
          css: {
          }
        }
      },
    },
    fontFamily: {
      serif: ['et-book', 'Palatino', "Palatino Linotype", "Palatino LT STD", "Book Antiqua", 'Georgia', 'serif']
    },
    fontSize: {
      sm: '1.0rem',
      base: '1.35rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
