import styled from 'styled-components'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { getCartItemsCount } from 'sagaStore/selectors'
import BurgerMenu from 'components/Layout/BurgerMenu'
import PriceSummary from 'components/CartSummaryIndicator'
import { useRouter } from 'next/router'
import { NavLinksType } from '.'
import StyledImage from 'components/General/Image'
import { ShoppingCart } from '@styled-icons/feather/ShoppingCart'

const NavigationLinks = (props: { navlinks: NavLinksType[] }) => {
  const itemsCount = useSelector(getCartItemsCount)
  const router = useRouter()

  return (
    <Wrapper>
      <BurgerWrapper>
        <BurgerMenu />
      </BurgerWrapper>
      <Links>
        <Link href="/">
          <a>
            <StyledImage
              imageSrc={'/images/wellu.png'}
              imageWidth={100}
              imageHeight={40}
              fitting={'contain'}
              layout={'fixed'}
            />
          </a>
        </Link>
        <DynamicLinks>
          {props.navlinks.map((link) => (
            <div>
              <Link href={link.href} passHref>
                <a>{link.content}</a>
              </Link>
            </div>
          ))}
        </DynamicLinks>
        <Link href="/cart">
          <CartLink>
            <PriceSummary />
            <ShoppingCart size={30} />
          </CartLink>
        </Link>
      </Links>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`
const Links = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  ${(props) => props.theme.breakpoint.M} {
  }
`
const CartLink = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`
const DynamicLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  ${(props) => props.theme.breakpoint.M} {
    display: none;
  }
`

const BurgerWrapper = styled.div`
  ${(props) => props.theme.breakpoint.XL} {
    display: none;
  }
  ${(props) => props.theme.breakpoint.M} {
    display: block;
  }
`
export default NavigationLinks
