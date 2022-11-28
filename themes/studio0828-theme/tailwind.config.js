const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['content/**/*.md', 'layouts/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
        'display': ['Ultra'],
      },
    },
  },
  plugins: [],
}