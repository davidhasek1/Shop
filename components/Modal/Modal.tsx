import { ModalProps } from "../../types/types";
import styled from "styled-components";
import { CloseCircle } from "@styled-icons/ionicons-solid/CloseCircle";
import { breakpoints } from "../../utils/responsivity";

const Modal = ({ closeModal, children }: ModalProps) => {
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
  );
};

const Backdrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: #00000048;
  display: flex;
`;
const Window = styled.div`
  position: fixed;
  max-height: 80vh;
  width: 70%;
  z-index: 2;
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  border: 3px solid ${(props) => props.theme.pink};
  overflow-y: scroll;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${breakpoints("width", "", [{ 800: "90%" }, { 600: "100%" }])}
`;
const CloseCircleStyled = styled(CloseCircle)`
  color: ${(props) => props.theme.pink};
`;
const CloseButton = styled.div`
  position: sticky;
  top: 2px;
  left: 2px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
export default Modal;
