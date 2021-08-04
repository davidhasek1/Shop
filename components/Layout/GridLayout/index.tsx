import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'

const GridLayout = (props: { content: any; isBlogGrid?: boolean }) => {
  return <Grid blogGrid={props.isBlogGrid}>{props.content}</Grid>
}

export type GridProps = {
  blogGrid?: boolean
}
const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ blogGrid }) =>
    blogGrid ? 'auto auto auto' : 'auto auto auto auto'};
  grid-gap: 15px;
  justify-content: space-around;
  padding: 20px;
  max-width: 1200px;
  margin: 50px auto 25px auto;

  ${breakpoints('grid-template-columns', '', [
    { L: 'auto auto' },
    { M: 'auto' },
  ])};
  ${breakpoints('margin', '', [{ L: '50px 10px' }, { M: '50px 10px' }])}
`

export default GridLayout
