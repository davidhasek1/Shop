import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'

const GridLayout = ({ content }) => {
  return <Grid>{content}</Grid>
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
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