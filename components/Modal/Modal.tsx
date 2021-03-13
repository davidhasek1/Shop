import { ReactChild, MouseEventHandler } from "react"
import styled from "styled-components"
import { CloseCircle } from "@styled-icons/ionicons-solid/CloseCircle"

type Props = {
  closeModal: MouseEventHandler
  children: ReactChild
}

const Modal = ({ closeModal, children }: Props) => {
  return (
    <>
      <Backdrop onClick={closeModal} />
      <Window>
        <CloseButton onClick={closeModal}>
          <CloseCircleStyled size={25} />
        </CloseButton>
        {children}
      </Window>
    </>
  )
}

const Backdrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: #00000048;
  display: flex;
`
const CloseCircleStyled = styled(CloseCircle)`
  color: #ffbac9;
`
const Window = styled.div`
  position: absolute;
  height: auto;
  min-height: 500px;
  width: 70%;
  z-index: 2;
  background-color: #ffffff;
  border-radius: 10px;
  border: 3px solid #ffbac9;
  overflow-x: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const CloseButton = styled.div`
  width: 25px;
  height: 25px;
`
export default Modal
