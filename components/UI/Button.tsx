import styled, { css } from 'styled-components'
import { breakpoints } from 'utils/responsivity'

const ClassicButton = (props) => {
  const { styleType, children, onClick, icon, buttonType } = props

  switch (styleType) {
    case 'NORMAL':
      return (
        <NormalButton type={buttonType} isIcon={icon} onClick={onClick}>
          {icon}
          {children}
        </NormalButton>
      )
    case 'INVERT':
      return (
        <InvertButton type={buttonType} isIcon={icon} onClick={onClick}>
          {icon}
          {children}
        </InvertButton>
      )
    default:
      return (
        <Button type={buttonType} isIcon={icon} onClick={onClick}>
          {icon}
          {children}
        </Button>
      )
  }
}

type IconProps = {
  isIcon: boolean
}

const Button = styled.button<IconProps>`
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  background: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  font-weight: 600;
  padding: 15px 70px;

  ${breakpoints('padding', '', [{ L: '10px 70px;' }])}
`
const NormalButton = styled(Button)`
  &:hover {
    outline: 1px solid ${(props) => props.theme.black};
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
  }
`
const InvertButton = styled(Button)`
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.black};

  &:hover {
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
  }
`

export default ClassicButton
