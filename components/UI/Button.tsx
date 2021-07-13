import styled, { css } from 'styled-components'
import { breakpoints } from 'utils/responsivity'

const CustomButton = (props) => {
  const {
    styleType,
    paddingValue,
    children,
    onClick,
    icon,
    buttonType,
    width,
    height,
  } = props

  switch (styleType) {
    case 'NORMAL':
      return (
        <NormalButton
          width={width}
          height={height}
          paddingValue={paddingValue}
          type={buttonType}
          isIcon={icon}
          onClick={onClick}
        >
          {icon}
          {children}
        </NormalButton>
      )
    case 'INVERT':
      return (
        <InvertButton
          width={width}
          height={height}
          paddingValue={paddingValue}
          type={buttonType}
          isIcon={icon}
          onClick={onClick}
        >
          {icon}
          {children}
        </InvertButton>
      )
    default:
      return (
        <Button
          width={width}
          height={height}
          paddingValue={paddingValue}
          type={buttonType}
          isIcon={icon}
          onClick={onClick}
        >
          {icon}
          {children}
        </Button>
      )
  }
}

type Props = {
  isIcon: boolean
  width: number
  height: number
  paddingValue: any
}

const Button = styled.button<Props>`
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  background: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  font-weight: 600;
  font-size: 12px;

  padding: ${({ paddingValue }) => (paddingValue ? paddingValue : '10px 15px')};
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  white-space: nowrap;

  ${({ width }) => (width ? breakpoints('width', '', [{ M: '150px' }]) : null)}
  ${breakpoints('font-size', '', [{ M: '12px' }])}
  ${breakpoints('padding', '', [{ M: '8px' }])}
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
  background-color: ${(props) => props.theme.bgGray};
  border: 2px solid ${(props) => props.theme.black};

  &:hover {
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
  }
`

export default CustomButton
