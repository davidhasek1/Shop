import styled from "styled-components";
import { breakpoints } from "../../utils/responsivity";
import Modal from "./Modal";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { openPrivacyDialog } from "../../store/actions/handlersActions";

const Privacy = () => {
  const dispatch = useDispatch();
  const { isPrivacyOpen } = useSelector((state: RootStateOrAny) => state.handlers);
  return isPrivacyOpen ? (
    <Modal
      closeModal={() => {
        dispatch(openPrivacyDialog(false));
      }}
    >
      Privacy dialog
    </Modal>
  ) : null;
};

export default Privacy;
