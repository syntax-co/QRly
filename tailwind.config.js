/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        colors: {
            colorOne:'var(--color-one)',
            colorTwo:'var(--color-two)',
            colorThree:'var(--color-three)',
            colorFour:'var(--color-four)'
          
        },
        borderRadius: {
          sm: 'calc(0.625rem - 4px)',
          md: 'calc(0.625rem - 2px)',
          lg: '0.625rem',
          xl: 'calc(0.625rem + 4px)'
        }
      }
    },
    plugins: []
  };
  