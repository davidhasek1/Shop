import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "../utils/responsivity";
import { Shop, Cart } from "@styled-icons/bootstrap";
import { MagnifyingGlass } from "@styled-icons/entypo/MagnifyingGlass";
import { StyledIconBase } from "@styled-icons/styled-icon";
import Burger from "./Burger";

const Navigation = () => {
  return (
    <NavWrapper>
      <Container>
        <LeftSide>
          <Link href="/">
            <Image
              src="/images/wellu.png"
              width={100}
              height={50}
              alt="shop logo"
            />
          </Link>
          {/* Display none pro mobily */}
          <Links>
            <StyledLink>
              <Link href="/shop">
                <a>
                  <Shop size={30} />
                  &nbsp;&nbsp;&nbsp;Shop
                </a>
              </Link>
            </StyledLink>
            <StyledLink>
              <Link href="/cart">
                <a>
                  <Cart size={30} />
                  &nbsp;&nbsp;&nbsp;Cart
                </a>
              </Link>
            </StyledLink>
          </Links>
        </LeftSide>
        <RightSide>
          <MagnifyingGlass size={35} />

          <BurgerWrapper>
            <Burger />
          </BurgerWrapper>
          {/* <SearchInput type="text" placeholder="Search" /> */}
        </RightSide>
      </Container>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  text-align: center;
  padding: 15px 0;
  background-color: #ffbac9;
  ${StyledIconBase} {
    color: #ffffff;
  }
`;
const Container = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: auto;
  display: flex;
`;

const LeftSide = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Links = styled.div`
  width: 100%;
  margin-left: 20px;
  display: flex;
  justify-content: flex-start;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 2px;
  ${breakpoints("display", "", [{ 600: "none" }])}
`;
const StyledLink = styled.div`
  margin: 0 15px;
  padding: 20px;
`;
const RightSide = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
  ${breakpoints("justify-content", "", [{ 600: "space-around" }])}
`;
const BurgerWrapper = styled.div`
  margin-left: 10px;
  ${breakpoints("display", "", [{ 800: "none" }], "min-width")}
  ${breakpoints("margin-left", "", [{ 600: 0 }])}
`;
const SearchInput = styled.input`
  padding: 10px 5px;
  min-width: 200px;
  width: 50%;
  background: none;
  border: none;
  border-bottom: 1px solid #ffffff;
  outline: none;
`;

export default Navigation;
