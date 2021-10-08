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
  onConfirm?: () => void
  onCancel?: () => void
}) => {
  return (
    <Wrapper>
      <ModalWindow
        title={props.title}
        message={props.message}
        onConfirm={props.onConfirm}
        onCancel={props.onCancel}
      />
    </Wrapper>
  )
}

export default ModalBody
