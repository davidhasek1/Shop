import { useState } from "react";
import styled from "styled-components";
import { breakpoints } from "../../utils/responsivity";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";

const TermsDialog = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(true);
  return isTermsOpen ? (
    <Modal closeModal={() => setIsTermsOpen(false)}>terms and Conditions</Modal>
  ) : null;
};

export default TermsDialog;
