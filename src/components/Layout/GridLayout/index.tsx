import styled from 'styled-components'
import { GridProps } from 'types'

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ blogGrid }) =>
    blogGrid ? 'auto auto auto' : 'auto auto auto auto'};
  grid-gap: 15px;
  justify-content: space-around;
  padding: 20px;
  max-width: 1200px;
  margin: 50px auto 25px auto;
  ${(props) => props.theme.breakpoint.L} {
    grid-template-columns: auto auto;
    margin: 50px 10px;
  }
  ${(props) => props.theme.breakpoint.M} {
    grid-template-columns: auto;
    margin: 50px 10px;
  }
`

const GridLayout = (props: { content: any; isBlogGrid?: boolean }) => {
  return <Grid blogGrid={props.isBlogGrid}>{props.content}</Grid>
}

export default GridLayout
