const production = process.env.NODE_ENV === 'production'

export const url = production
  ? 'http://localhost:1337' //Změnit na prod url
  : 'http://localhost:1337'
