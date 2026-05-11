/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      colors: {
        /* DESKER FURSYSGROUP DESIGN SYSTEM - Primary */
        'desker-black':    '#282828', // DESKER BLACK  (K90)
        'desker-dark-gray':'#515151', // DESKER DARK GRAY (K70)
        'desker-light-gray':'#B3B3B3',// DESKER LIGHT GRAY (K30)
        /* Grayscale */
        'gray-10': '#F0F0F0',
        'gray-20': '#D6D6D6',
        'gray-40': '#969696',
        'gray-50': '#7E7E7E',
        'gray-60': '#616161',
        'gray-80': '#414141',
        'gray-90': '#353535',
        /* Semantic aliases */
        'bg-primary':   '#F0F0F0', // GRAY 10
        'bg-surface':   '#FFFFFF', // WHITE
        'text-primary': '#282828', // DESKER BLACK
        'text-secondary':'#515151',// DESKER DARK GRAY
        'text-muted':   '#B3B3B3', // DESKER LIGHT GRAY
        'border-default':'#D6D6D6',// GRAY 20
        accent:         '#282828', // DESKER BLACK
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [],
}

