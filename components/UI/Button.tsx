import styled, { css } from "styled-components";

const ClassicButton = (props) => {
  const { children, onClick, icon, buttonType } = props

  return (
    <Button type={buttonType} isIcon={icon} onClick={onClick}>
      {icon}
      {children}
    </Button>
  )
};

type IconProps = {
  isIcon: boolean;
};

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
          padding: 15px 20px;
          background: ${(props) => props.theme.pink};
          border-radius: 25px;
          text-transform: uppercase;
          color: ${(props) => props.theme.white};
          font-weight: 600;
        `}
`;

export default ClassicButton;
