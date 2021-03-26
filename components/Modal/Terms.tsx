import styled from "styled-components";
import { breakpoints } from "../../utils/responsivity";
import Modal from "./Modal";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { openTermsDialog } from "../../store/actions/handlersActions";

const TermsDialog = () => {
  const dispatch = useDispatch();
  const { isTermsOpen } = useSelector(
    (state: RootStateOrAny) => state.handlers
  );

  return isTermsOpen ? (
    <Modal closeModal={() => dispatch(openTermsDialog(false))}>
      terms and Conditions
    </Modal>
  ) : null;
};

export default TermsDialog;
