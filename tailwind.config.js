// tailwind.config.js
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        colorOne: 'var(--color-one)',
        colorTwo: 'var(--color-two)',
        colorThree: 'var(--color-three)',
        colorFour: 'var(--color-four)',
      },
    }
  },
  plugins: []
}
