import React from 'react'
import { Spinner3 } from '@styled-icons/evil/Spinner3'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
     transform: rotate(360deg);
  }
`

const SpinnerAnimated = styled(Spinner3)`
  animation: ${spin} 2s linear infinite;
`

const Spinner = (props: { spinnerSize?: number }) => (
  <SpinnerAnimated size={props.spinnerSize} />
)

export default Spinner
