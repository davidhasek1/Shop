import { useState, useEffect } from 'react'
import { breakpoints } from 'utils/responsivity'
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass'
import styled from 'styled-components'
import TextInput from 'components/UI/TextInput'
import { serachAll } from 'pages/api/Serachning/allProducts'

const SearchBox = () => {
  const [typing, setTyping] = useState('')

  useEffect(() => {
    console.log('USEEFFECT fetching')
    //const data = serachAll()

    return () => {
      console.log('clean up')
    }
  }, [typing])
  console.log(typing)
  return (
    <>
      <MagnifyingGlassStyled size={30} />
      <TextInputStyled
        inputType={'text'}
        placeholderValue="TEst placeholder"
        value={typing}
        change={(e) => {
          setTyping(e.target.value)
        }}
      />
    </>
  )
}
const MagnifyingGlassStyled = styled(MagnifyingGlass)`
  color: ${(props) => props.theme.white};
`
const TextInputStyled = styled(TextInput)`
  padding: 10px 5px;
  min-width: 200px;
  width: 50%;
  background: none;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.white};
  outline: none;
`
export default SearchBox
