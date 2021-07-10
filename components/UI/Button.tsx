import styled, { css } from 'styled-components'
import { breakpoints } from 'utils/responsivity'

const ClassicButton = (props) => {
  const { styleType, children, onClick, icon, buttonType } = props

  switch (styleType) {
    case 'NORMAL':
      return (
        <Button type={buttonType} isIcon={icon} onClick={onClick}>
          {icon}
          {children}
        </Button>
      )
    case 'INVERT':
      return (
        <InvertButton type={buttonType} onClick={onClick}>
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

const InvertButton = styled.button`
  padding: 15px 70px;

  outline: none;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.black};
  text-transform: uppercase;
  cursor: pointer;
`

const Button = styled.button<IconProps>`
  outline: none;
  border: none;
  cursor: pointer;
  ${({ isIcon }) =>
    isIcon
      ? css`
          background: transparent;
          padding: 0;
        `
      : css`
          //TODO: opropsovat props a použít v konkretních casech
          padding: 15px 70px;
          background: ${(props) => props.theme.black};
          text-transform: uppercase;
          color: ${(props) => props.theme.white};
          font-weight: 600;
          &:hover {
            outline: 1px solid ${(props) => props.theme.black};
            background: ${(props) => props.theme.white};
            color: ${(props) => props.theme.black};
          }
          ${breakpoints('padding', '', [{ L: '10px 70px;' }])}
        `}
`

export default ClassicButton
