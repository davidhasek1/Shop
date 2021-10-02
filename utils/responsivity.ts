//
// DEFS
//
export type BreakpointEnumType = 'XS' | 'S' | 'M' | 'L' | 'XL'

const breakpoints = {
  XL: '1600px',
  L: '1200px',
  M: '800px',
  S: '600px',
  XS: '400px',
}

//
// BREAKPOINT OBJECT
//
const breakpointGen: any = {}
Object.entries(breakpoints).forEach((entry) => {
  const size = entry[0]
  const value = entry[1]
  breakpointGen[size] = `@media screen and (max-width: ${value})` //vytvoří se hlavičky: do breakpointGen objektu se na pozici size (XL) přiřadí hlavička s hodnotou pro XL
  //pro každou SIZE se vygeneruje hlavička
})

export const breakpoint: typeof breakpointGen = breakpointGen
