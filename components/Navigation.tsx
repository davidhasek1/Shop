import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding-left: 10%;
  background-color: #6648cd;
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

const Navigation = () => {
  return (
    <NavWrapper>
      <LeftSide>
        <Image
          src="/images/wellu.png"
          width={150}
          height={75}
          alt="shop logo"
        />

        <Links>
          <StyledLink>
            <Link href="/shop">Shop</Link>
          </StyledLink>
          <StyledLink>
            <Link href="/shop">Cart</Link>
          </StyledLink>
        </Links>
      </LeftSide>
    </NavWrapper>
  );
};

export default Navigation;
