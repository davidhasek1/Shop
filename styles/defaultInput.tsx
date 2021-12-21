import { css } from 'styled-components'

export const defaultInput = css`
  input {
    border: none;
    border-radius: 0;
    outline: none;
  }
  &,
  * {
  }
  &.numberInput {
    text-align: center;
    width: 50px;

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    &input[type='number'] {
      -moz-appearance: textfield;
    }
  }
`
