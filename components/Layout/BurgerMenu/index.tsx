import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { openMobileMenu } from 'store/actions/handlersActions'
import { Close } from '@styled-icons/evil/Close'
import Burger from './Burger'

const BurgerMenu = ({ flexPosition }) => {
  const dispatch = useDispatch()
  const { isMobileMenuOpen } = useSelector(
    (state: RootStateOrAny) => state.handlers
  )
  return (
    <BurgerWrapper flexPosition={flexPosition}>
      {isMobileMenuOpen ? (
        <CloseStyled
          onClick={() => dispatch(openMobileMenu(false))}
          size={35}
        />
      ) : (
        <Burger onClick={() => dispatch(openMobileMenu(true))} />
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
