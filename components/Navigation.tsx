import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const NavWrapper = styled.div`
  display: flex;
  text-align: center;
  margin: auto;
  padding: 5px 0;
`;

const Navigation = () => {
  return (
    <NavWrapper>
      <Image src="/" width={150} height={50} alt="shop logo"/>
      <Link href="/shop">Shop</Link>
      <Link href="/shop">Cart</Link>
    </NavWrapper>
  );
};

export default Navigation;
