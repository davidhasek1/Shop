import styled from "styled-components";
import { Shop, Cart } from "@styled-icons/bootstrap";
import { StyledIconBase } from "@styled-icons/styled-icon";
import Link from "next/link";
import { breakpoints } from "../utils/responsivity";

const DropdownMenu = () => {
  return (
    <DropdownWrapper>
      <Links>
        <Link href="/shop">
          <StyledLink>
            <LinkContainer>
              <Shop size={25} />
              <LinkText>Shop</LinkText>
            </LinkContainer>
          </StyledLink>
        </Link>
        <Link href="/cart">
          <StyledLink>
            <LinkContainer>
              <Cart size={25} />
              <LinkText>Cart</LinkText>
            </LinkContainer>
          </StyledLink>
        </Link>
      </Links>
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
  width: 50%;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 3px 11px 0px #777777;
  z-index: 2;
  ${StyledIconBase} {
    color: #ffbac9;
  }
  ${breakpoints("width", "", [{ 800: "100%" }, { 600: "200%" }])}
  ${breakpoints("display", "", [{ 800: "none" }], 'min-width')}
`;
const Links = styled.div`
  text-align: left;
  cursor: pointer;
`;
const StyledLink = styled.div`
  padding: 15px 10px;
`;
const LinkContainer = styled.a``;
const LinkText = styled.span`
  margin-left: 10px;
`;

export default DropdownMenu;
