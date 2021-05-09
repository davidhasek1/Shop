import { useDispatch } from "react-redux";
import { breakpoints } from "utils/responsivity";
import {
  openTermsDialog,
  openPrivacyDialog,
} from "store/actions/handlersActions";
import styled from "styled-components";
import Link from "next/link";

const FooterLinks = () => {
  const dispatch = useDispatch();
  return (
    //create classic pages
    <Links>
      <a onClick={() => dispatch(openTermsDialog(true))}>
        Terms &amp; Conditions
      </a>
      <a onClick={() => dispatch(openPrivacyDialog(true))}>Privacy Policy</a>

      <Link href="/contact">Contact</Link>
    </Links>
  );
};
const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  ${breakpoints("order", "", [{ 800: 1 }])}
  ${breakpoints("justify-content", "", [{ 800: "space-around" }])}
  ${breakpoints("flex-direction", "", [{ 600: "column" }])}
  ${breakpoints("padding", "", [{ 800: "20px 0" }])}
`;
export default FooterLinks;
