import { StyledIconBase } from "@styled-icons/styled-icon";
import {
  FacebookCircle,
  Twitter,
  Instagram,
} from "@styled-icons/boxicons-logos";
import { breakpoints } from "utils/responsivity";
import styled from "styled-components";

const SocialLinks = () => {
  return (
    <Socials>
      <a href="http://www.facebook.com/">
        <FacebookCircle size={30} />
      </a>
      <a href="http://www.twitter.com/">
        <Twitter size={30} />
      </a>
      <a href="http://www.instagram.com/">
        <Instagram size={30} />
      </a>
    </Socials>
  );
};

const Socials = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${StyledIconBase} {
    color: #bfbfbf;
    margin: 0 15px;
    &:hover {
      color: #808080;
    }
  }
  ${breakpoints("padding", "", [{ 800: "20px 0" }])}
`;

export default SocialLinks;
