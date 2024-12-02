/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}","./src/*.{js,jsx,ts,tsx}","./index.html"],
  theme: {
    extend: {
      colors: {
        'oxford-blue': '#0c1b3d',
        'school-bus-yellow': '#ffdd00',
        'glaucous': '#0f224d',
        'ghost-white': '#f8f7ff',
        'lavender': '#e6e6fa',
        'slate-gray': '#798A9E',
        'tabs-gray': '#f5f5f5',
        'secondary-color': '#4b4b4b',
      },
      spacing: {
        '18': '4.5rem',
        '38': '9.5rem',
        '39': '9.75rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '60': '15rem',
        '68': '17rem',
        '76': '19rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '100': '25rem',
        '108': '27rem',
        '116': '29rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '164': '41rem',
        '192': '48rem',
        '224': '56rem',
      }
    },
    fontFamily: {
      'display': ['Manrope'],
      'body': ['Inter'],
    }
  },
  plugins: [],
}

