import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass'
import styled from 'styled-components'


const SearchBox = () => {
  //TODO: Kliknu na lupu a vyjede popup s inputfield

  return <MagnifyingGlassStyled size={30} />
}
const MagnifyingGlassStyled = styled(MagnifyingGlass)`
  color: ${(props) => props.theme.white};
`
export default SearchBox
