import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { openMobileMenu } from "../../store/actions/handlersActions";
import { Close } from "@styled-icons/ionicons-solid/Close";
import { MagnifyingGlass } from "@styled-icons/entypo/MagnifyingGlass";
import { breakpoints } from "utils/responsivity";
import styled from "styled-components";
import Burger from "../Burger";
import DropdownMenu from "../DropdownMenu";

const NavigationActions = () => {
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector(
    (state: RootStateOrAny) => state.handlers
  );

  return (
    <Actions>
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
    </Actions>
  );
};

const Actions = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
`;
const MagnifyingGlassStyled = styled(MagnifyingGlass)`
  color: ${(props) => props.theme.white};
`;
const BurgerWrapper = styled.div`
  margin-left: 20px;
  ${breakpoints("display", "", [{ 800: "none" }], "min-width")}
  ${breakpoints("margin-left", "", [{ 600: "15px" }])}
`;
const CloseStyled = styled(Close)`
  color: ${(props) => props.theme.white};
`;
const SearchInput = styled.input`
  padding: 10px 5px;
  min-width: 200px;
  width: 50%;
  background: none;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.white};
  outline: none;
`;
export default NavigationActions;
