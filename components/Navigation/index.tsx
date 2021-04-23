import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "../../utils/responsivity";
import { Shop, Cart } from "@styled-icons/bootstrap";
import { Close } from "@styled-icons/ionicons-solid/Close";
import { MagnifyingGlass } from "@styled-icons/entypo/MagnifyingGlass";
import { StyledIconBase } from "@styled-icons/styled-icon";
import Burger from "../Burger";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import ItemsCounter from "../ItemsCounter";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { openMobileMenu } from "../../store/actions/handlersActions";

const Navigation = () => {
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector((state: RootStateOrAny) => state.handlers);
  const itemsCount = useSelector((state: RootStateOrAny) => state.userCart.cartItems);
  return (
    <NavWrapper>
      <Container>
        <LeftSide>
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
        </LeftSide>
        <RightSide>
          <MagnifyingGlassStyled size={30} />
          {/* <SearchInput type="text" placeholder="Search" /> */}

          <BurgerWrapper>
            {isMobileMenuOpen ? (
              <CloseStyled
                onClick={() => dispatch(openMobileMenu(false))}
                size={35}
              />
            ) : (
              <Burger onClick={() => dispatch(openMobileMenu(true))} />
            )}
          </BurgerWrapper>
          {isMobileMenuOpen ? <DropdownMenu /> : null}
        </RightSide>
      </Container>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  text-align: center;
  padding: 15px 0;
  background-color: ${(props) => props.theme.pink};
`;
const Container = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: auto;
  display: flex;
  ${breakpoints("padding", "", [{ 1200: "0 15px" }])}
`;

const LeftSide = styled.div`
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
  color: #ffffff;
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
const RightSide = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
`;
const MagnifyingGlassStyled = styled(MagnifyingGlass)`
  color: #ffffff;
`;
const BurgerWrapper = styled.div`
  margin-left: 20px;
  ${breakpoints("display", "", [{ 800: "none" }], "min-width")}
  ${breakpoints("margin-left", "", [{ 600: "15px" }])}
`;
const CloseStyled = styled(Close)`
  color: #ffffff;
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
