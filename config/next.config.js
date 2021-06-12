const production = process.env.NODE_ENV === 'production'

export const url = production
  ? 'https://www.yoursite.com'  //Změnit na prod url
  : 'http://localhost:1337'
