import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'
import { Close } from '@styled-icons/evil/Close'
import { getOpenMobileMenu } from 'sagaStore/selectors'
import { setOpenMobileMenuAction } from 'sagaStore/actions'

import Burger from './Burger'

const BurgerMenu = () => {
  const dispatch = useDispatch()
  const isMobileMenuOpen = useSelector(getOpenMobileMenu)
  return (
    <BurgerWrapper>
      {isMobileMenuOpen ? (
        <CloseStyled
          onClick={() => dispatch(setOpenMobileMenuAction(false))}
          size={35}
        />
      ) : (
        <Burger onClick={() => dispatch(setOpenMobileMenuAction(true))} />
      )}
    </BurgerWrapper>
  )
}

const BurgerWrapper = styled.div`
  display: none;

  ${(props) => props.theme.breakpoint.M} {
    display: flex;
    align-items: center;
  }
`
const CloseStyled = styled(Close)`
  color: ${(props) => props.theme.black};
`

export default BurgerMenu
