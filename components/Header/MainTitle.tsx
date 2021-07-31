import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
//import Button from 'components/UI/Button' //TODO delete this file
import Link from 'next/link'

const MainTitle = (props: {
  headerTitle: string
  isHomePage: boolean
  children?: any
}) => {
  return (
    <TitleWrapper>
      <Title>{props.headerTitle}</Title>
      {props.children}
      <ButtonWrapper isHomePage={props.isHomePage}>
        <Link href="/shop">
          <Button>Shop now</Button>
        </Link>
      </ButtonWrapper>
    </TitleWrapper>
  )
}

type Props = {
  isHomePage: boolean
}

const TitleWrapper = styled.div`
  position: absolute;
  font-size: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  text-align: left;
  ${breakpoints('width', '', [{ L: '90%' }])}
  ${breakpoints('text-align', '', [{ L: 'center' }])}
`
const Title = styled.h1`
  ${breakpoints('font-size', '', [{ L: '40px' }, { M: '25px' }])}
`
const ButtonWrapper = styled.div<Props>`
  display: ${({ isHomePage }) => !isHomePage && 'none'};
`
const Button = styled.button`
  padding: 15px 60px;
  ${breakpoints('padding', '', [{ M: '10px 40px' }])}
`

export default MainTitle
