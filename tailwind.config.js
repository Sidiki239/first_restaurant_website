module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {

      container:{
        center:true,
        padding:"15px"
      },
      colors:{
      accent:"#f94c25"
      },
    /*   backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }, */
    },
  },
  plugins: [require('flowbite/plugin'),  require('@tailwindcss/aspect-ratio'),],
}