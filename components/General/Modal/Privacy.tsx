import styled from "styled-components";
import Modal from "./Modal";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { openPrivacyDialog } from "store/actions/handlersActions";

const Privacy = () => {
  const dispatch = useDispatch();
  const { isPrivacyOpen } = useSelector(
    (state: RootStateOrAny) => state.handlers
  );
  return isPrivacyOpen ? (
    <Modal
      closeModal={() => {
        dispatch(openPrivacyDialog(false));
      }}
    >
      <PrivacyWrapper>
        <Title>Privacy Policy</Title>
      
      </PrivacyWrapper>
    </Modal>
  ) : null;
};

const PrivacyWrapper = styled.div`
  padding: 25px;
`;
const Title = styled.h1`
  text-align: center;
`;

export default Privacy;
