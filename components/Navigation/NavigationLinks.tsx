import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "utils/responsivity";
import { Shop, Cart } from "@styled-icons/bootstrap";
import ItemsCounter from "../ItemsCounter";
import { useSelector, RootStateOrAny } from "react-redux";

const NavigationLinks = () => {
  const itemsCount = useSelector(
    (state: RootStateOrAny) => state.userCart.cartItems
  );
  return (
    <NavLinks>
      <Link href="/">
        <ImageLink>
          <Image
            src="/images/wellu.png"
            width={100}
            height={50}
            alt="shop logo"
          />
        </ImageLink>
      </Link>
      <Links>
        <StyledLink>
          <Link href="/shop">
            <a>
              <Shop size={25} />
              <LinkText>Shop</LinkText>
            </a>
          </Link>
        </StyledLink>
        <StyledLink>
          <Link href="/cart">
            <CartLink>
              <Cart size={25} />
              <LinkText>Cart</LinkText>
              <ItemsCounter count={itemsCount.length} />
            </CartLink>
          </Link>
        </StyledLink>
      </Links>
    </NavLinks>
  );
};

const NavLinks = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const ImageLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Links = styled.div`
  width: 100%;
  margin-left: 20px;
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.white};
  font-weight: 600;
  letter-spacing: 2px;
  ${breakpoints("display", "", [{ 800: "none" }])}
`;
const StyledLink = styled.div`
  margin: 0 15px;
  padding: 10px;
`;
const LinkText = styled.span`
  margin-left: 10px;
`;
const CartLink = styled.a`
  position: relative;
`;

export default NavigationLinks;
