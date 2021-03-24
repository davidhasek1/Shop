import { css } from 'styled-components'

export const breakpoints = (
  cssProp: string = 'padding', // the CSS property to apply to the breakpoints
  cssPropUnits: string = '', // the units of the CSS property (can set equal to "" and apply units to values directly)
  values: Array<Object> = [], // array of objects, e.g. [{ 800: 60 }, ...] <-- 800 (key) = screen breakpoint, 60 (value) = CSS prop breakpoint
  mediaQueryType: string = 'max-width' // media query breakpoint type, i.e.: max-width, min-width, max-height, min-height
) => {
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [Object.keys(value)[0], Object.values(value)[0]]
    return (mediaQueries += `
    @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
      ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
    }
    `)
  }, '')
  // @ts-ignore
  return css([breakpointProps])
}
