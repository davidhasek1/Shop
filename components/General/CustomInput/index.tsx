import styled, { css } from 'styled-components'

const CustomInput = (props: {
  type: string
  placeholder?: string
  value: any
  onChange: (e) => void
  name: string
  text?: string
  isName?: boolean
  isSurename?: boolean
  isCheckbox?: boolean
}) => {
  return (
    <>
      <Input
        isName={props.isName}
        isSurename={props.isSurename}
        isCheckbox={props.isCheckbox}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
      />
      {props.text}
    </>
  )
}

const Wrapper = styled.div``
const Input = styled.input<{
  isName: boolean
  isSurename: boolean
  isCheckbox: boolean
}>`
  width: ${({ isCheckbox }) => (isCheckbox ? '20px' : '100%')};
  padding: 12px 20px;
  ${({ isName, isSurename }) =>
    isName
      ? css`
          margin: 8px 5px 8px 0;
        `
      : isSurename
      ? css`
          margin: 8px 0 8px 5px;
        `
      : css`
          margin: 8px 0px;
        `}
  box-sizing: border-box;

  background: none;
  border: 1px solid ${(props) => props.theme.fade2};
  border-radius: 4px;
  ${({ isCheckbox }) =>
    isCheckbox &&
    css`
      accent-color: ${(props) => props.theme.pink};
      padding: 20px;
    `}
`

export default CustomInput
