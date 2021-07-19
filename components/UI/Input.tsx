import styled from 'styled-components'

//classic text field input
const Input = (props) => {
  const { inputType, placeholderValue, value, change } = props
  // TODO: add onclick handler and onChange and value props
  return (
    <StyledInput
      type={inputType}
      placeholder={placeholderValue}
      value={value}
      onChange={change}
    />
  )
}

const StyledInput = styled.input`
  width: 90%;
  padding: 15px;
  margin: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`

export default Input
