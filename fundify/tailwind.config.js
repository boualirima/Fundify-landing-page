/** @type {import('tailwindcss').Config} */
export default {
  content: [
   './src/*.{jsx,js}' ,
   './src/component/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        italiana: ['Italiana', 'serif'],
        jf: ['Jacques Francois', 'serif'],
      },
        colors :{
        myyellowf:'#F0B716',
        myyellowc:'#FBF3DA',
        mygreenc:'#508D4E', 
      }
    },
  },
  plugins: [],
}

