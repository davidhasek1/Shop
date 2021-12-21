import React from 'react'

import styled, { css } from 'styled-components'

//BUG: smazat a použít ikonu + keyframes na rotaci - jednodušší a bez problémů

const Spinner = (props: { spinnerSize?: number }) => (
  <StyledSpinner spinnerSize={props.spinnerSize} viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
)

const StyledSpinner = styled.svg<{ spinnerSize: number }>`
  animation: rotate 1s linear infinite;

  ${(props) =>
    props.spinnerSize
      ? css`
          width: ${props.spinnerSize}px;
          height: ${props.spinnerSize}px;
        `
      : css`
          width: 50px;
          height: 50px;
        `}

  & .path {
    stroke: ${(props) => props.theme.pink};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

export default Spinner
