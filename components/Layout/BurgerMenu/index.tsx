import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { openMobileMenu } from 'store/actions/handlersActions'
import { Close } from '@styled-icons/evil/Close'
import Burger from './Burger'
import { getOpenMobileMenu } from 'sagaStore/selectors'
import {setOpenMobileMenuAction} from 'sagaStore/actions'

const BurgerMenu = ({ flexPosition }) => {
  const dispatch = useDispatch()
  const isMobileMenuOpen = useSelector(getOpenMobileMenu)
  return (
    <BurgerWrapper flexPosition={flexPosition}>
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

const BurgerWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  height: 100%;
  display: ${({ flexPosition }) => flexPosition === 'right' && 'none'};
  ${breakpoints('display', '', [{ L: 'none' }], 'min-width')}
`
const CloseStyled = styled(Close)`
  color: ${(props) => props.theme.black};
`

export default BurgerMenu
