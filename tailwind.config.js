/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        line: '#06C755',
        m: {
          bg:    '#F0E6ED',
          light: '#C09AB5',
          mid:   '#9A6E8E',
          main:  '#6B4066',
          dark:  '#442940',
        },
        c: {
          gold:      '#C9A84C',
          'gold-lt': '#D4B96A',
          'gold-pl': '#F5ECD7',
          warm:      '#FAF8F3',
          text:      '#2C2A26',
          'text-md': '#5A574F',
          'warm-gr': '#8A8578',
          red:       '#C44D3F',
          green:     '#2D8A5E',
        },
      },
    },
  },
  plugins: [],
};
