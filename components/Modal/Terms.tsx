import styled from "styled-components";
import { breakpoints } from "../../utils/responsivity";
import Modal from "./Modal";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { openTermsDialog } from "../../store/actions/handlersActions";
import mock from "../../mock/terms.json";
const TermsDialog = () => {
  const dispatch = useDispatch();
  const { isTermsOpen } = useSelector(
    (state: RootStateOrAny) => state.handlers
  );

  return isTermsOpen ? (
    <Modal closeModal={() => dispatch(openTermsDialog(false))}>
      <TermsWrapper>
        <Title>Terms &amp; Conditions</Title>
        {mock.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          );
        })}
      </TermsWrapper>
    </Modal>
  ) : null;
};

const TermsWrapper = styled.div`
  padding: 25px;
`;
const Title = styled.h1`
  text-align: center;
`;
export default TermsDialog;
