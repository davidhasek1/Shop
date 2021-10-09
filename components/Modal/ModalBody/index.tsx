import { Dispatch } from 'hoist-non-react-statics/node_modules/@types/react'
import styled from 'styled-components'

import ModalWindow from './Window'

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: auto;
  overflow-y: hidden;
  z-index: 200;
`

const ModalBody = (props: {
  title?: string
  message: string
  close: boolean
  children: any
  isConfirmModal: boolean

  setIsConfirmed: (value) => any
  onClose?: () => void
}) => {
  return (
    !props.close && (
      <Wrapper>
        <ModalWindow
          title={props.title}
          message={props.message}
          onClose={props.onClose}
          children={props.children}
          setIsConfirmed={props.setIsConfirmed}
          isConfirmModal={props.isConfirmModal}
        />
      </Wrapper>
    )
  )
}

export default ModalBody
