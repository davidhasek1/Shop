import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Layout from '../components/Layout'

const NavWrapper = styled.div`
  text-align: center;
  padding: 15px 0;
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
      <Layout>
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
              <Link href="/shop">Shop</Link>
            </StyledLink>
            <StyledLink>
              <Link href="/cart">Cart</Link>
            </StyledLink>
          </Links>
        </LeftSide>
      </Layout>
    </NavWrapper>
  );
};

export default Navigation;
