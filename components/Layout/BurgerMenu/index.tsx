import styled from 'styled-components'

import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { Close } from '@styled-icons/evil/Close'
import Burger from './Burger'
import { getOpenMobileMenu } from 'sagaStore/selectors'
import { setOpenMobileMenuAction } from 'sagaStore/actions'

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

type Props = {
  flexPosition: 'left' | 'right'
}

const BurgerWrapper = styled.div`
  display: flex;
  align-items: center;
`
const CloseStyled = styled(Close)`
  color: ${(props) => props.theme.black};
`

export default BurgerMenu
