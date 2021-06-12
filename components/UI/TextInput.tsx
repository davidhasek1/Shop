import styled from 'styled-components'

//classic text field input
const TextInput = (props) => {
  const { inputType, placeholderValue, value, change } = props
  // TODO: add onclick handler and onChange and value props
  return (
    <Input
      type={inputType}
      placeholder={placeholderValue}
      value={value}
      onChange={change}
    />
  )
}

const Input = styled.input`
  width: 90%;
  padding: 15px;
  margin: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`

export default TextInput
