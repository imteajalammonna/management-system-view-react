/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#2E189C',
      'white': '#ffff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {
      backgroundImage:{
        'gradient-to-r': 'linear-gradient(to right, #290895, #69DCF2)',
        'gradient-to-b': 'linear-gradient(to bottom, #6b73ff, #000dff)',
        // Add more gradients as needed
      },
    },
  },
  plugins: [],
}

