import { useSelector, useDispatch, RootStateOrAny } from "react-redux"
import { openMobileMenu } from "../../store/actions/handlersActions"
import { Close } from "@styled-icons/ionicons-solid/Close"
import { breakpoints } from "utils/responsivity"
import styled from "styled-components"
import Burger from "../Burger"
import DropdownMenu from "../DropdownMenu"
import SearchBox from "components/SearchBox"

const NavigationActions = () => {
  const dispatch = useDispatch()
  const { isMobileMenuOpen } = useSelector(
    (state: RootStateOrAny) => state.handlers
  )

  return (
    <Actions>
    
      <SearchBox />
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
  )
}

const Actions = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
`
const BurgerWrapper = styled.div`
  margin-left: 20px;
  ${breakpoints("display", "", [{ 800: "none" }], "min-width")}
  ${breakpoints("margin-left", "", [{ 600: "15px" }])}
`
const CloseStyled = styled(Close)`
  color: ${(props) => props.theme.white};
`
export default NavigationActions
