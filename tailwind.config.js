/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        colors: {
          primary: "#725ACA", 
          secondary: "#A289FC",
          accent: "#D9FFA6",
          purple: {
            200: '#d3beff',
            300: '#b89eff',
            400: '#9c7eff',
            500: '#8259ff', // Couleur principale
            600: '#6c40ff',
            700: '#5022ff',
            800: '#3905ff',
          },
          green: {
            200: '#d1ffba', // Couleur menthe claire pour le bas de page
            300: '#b2ff94',
            400: '#8aff5f',
            500: '#66ff33',
          }
        },
        borderWidth: {
          '16': '16px', // Pour le triangle du bouton play
        },
        fontFamily: {
          lato: ['Lato', 'sans-serif'],
          montserrat: ['Montserrat', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }