import styled from "styled-components";
import { breakpoints } from "../../utils/responsivity";
import Modal from "./Modal";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { openPrivacyDialog } from "../../store/actions/handlersActions";
import mock from "../../mock/terms.json";

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
        {mock.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          );
        })}
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
