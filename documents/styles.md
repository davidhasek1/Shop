## Responsivity

- When you implement responsivity to the styles use it like that:
  `${breakpoints('font-size', '', [{ M: '40px' }, { S: '10px' }])}`

- !IMPORTATNT:
  - Pay attention in declaring objects in an array - HAVE TO be in DESCANDING order for correct functionality! (XL, L , M, S, XS, ...)
