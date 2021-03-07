import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Shop, Cart } from "@styled-icons/bootstrap";
import { MagnifyingGlass } from "@styled-icons/entypo/MagnifyingGlass";
import { StyledIconBase } from "@styled-icons/styled-icon";

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
`;
const StyledLink = styled.div`
  margin: 0 15px;
  padding: 20px;
`;
const RightSide = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Navigation = () => {
  return (
    <NavWrapper>
      <Container>
        <LeftSide>
          <Link href="/">
            <Image
              src="/images/wellu.png"
              width={150}
              height={75}
              alt="shop logo"
            />
          </Link>

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
          &nbsp;&nbsp;&nbsp;
          <SearchInput type="text" placeholder="Search" />
        </RightSide>
      </Container>
    </NavWrapper>
  );
};

export default Navigation;
