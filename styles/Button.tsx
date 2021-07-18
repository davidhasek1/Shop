import { css } from 'styled-components'

export const defaultButton = css`
  button {
    outline: none;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    font-weight: 600;
    padding: 10px 20px;

    &,
    * {
      transition: all 0.2s ease;
      &:hover {
        filter: brightness(1.1);
        outline: 1px solid ${(props) => props.theme.black};
        background: ${(props) => props.theme.white};
        color: ${(props) => props.theme.black};
      }
    }
    &.locked {
      opacity: 0.7 !important;
      pointer-events: none !important;
    }
    &.inverted {
      color: ${(props) => props.theme.black};
      background-color: ${(props) => props.theme.bgGray};
      border: 2px solid ${(props) => props.theme.black};
      &:hover {
        background-color: ${(props) => props.theme.black};
        color: ${(props) => props.theme.white};
      }
    }
    &.size {
      &--large {
        padding: 20px 40px;
      }
      &--small {
        padding: 5px 10px;
      }
    }
  }
`
