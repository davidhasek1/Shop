import Link from 'next/link'
import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { useRouter } from 'next/router'

const ShopNavigation = () => {
  const router = useRouter()
  const activePath = router.pathname
  console.log(router.route)
  
  return (
    <PageNavWrapper>
      <Container>
        <Link href="/shop" passHref>
          <StyledLink active={activePath === '/shop'}>All</StyledLink>
        </Link>
        <Link href="/shop/favourites" passHref>
          <StyledLink active={activePath === '/shop/favourites'}>
            Favourites
          </StyledLink>
        </Link>
        <Link href="/shop/sale" passHref>
          <StyledLink active={activePath === '/shop/sale'}>Sale</StyledLink>
        </Link>
      </Container>
    </PageNavWrapper>
  )
}

type LinkProps = {
  active: boolean
}

const PageNavWrapper = styled.div`
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 2px 10px -6px ${(props) => props.theme.fade2};
`
const Container = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: auto;
  display: flex;
  text-align: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  ${breakpoints('padding', '', [{ 1200: '0 15px' }])}
`
const StyledLink = styled.a<LinkProps>`
  padding: 15px;
  text-shadow: 1px 0px 5px #cecece;
  border-bottom: ${(props) =>
    props.active
      ? `3px solid #ffbac9;`
      : null}; //is not possible to youse theme - then it is not working
  &:hover {
    border-bottom: 3px solid ${(props) => props.theme.pink};
  }
`

export default ShopNavigation
