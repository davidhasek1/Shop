import { breakpoints } from "utils/responsivity";
import { Close } from "@styled-icons/ionicons-solid/Close";
import { MagnifyingGlass } from "@styled-icons/entypo/MagnifyingGlass";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { openMobileMenu } from "../../store/actions/handlersActions";
import styled from "styled-components";
import Burger from "../Burger";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import NavigationLinks from './NavigationLinks'

const Navigation = () => {
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector((state: RootStateOrAny) => state.handlers);

  return (
    <NavWrapper>
      <Container>
        <NavigationLinks />
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
