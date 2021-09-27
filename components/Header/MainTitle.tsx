import styled from 'styled-components'
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
  ${(props) => props.theme.breakpoint.L} {
    width: 90%;
    text-align: center;
  }
`
const Title = styled.h1`
  ${(props) => props.theme.breakpoint.L} {
    font-size: 40px;
  }
`
const ButtonWrapper = styled.div<Props>`
  display: ${({ isHomePage }) => !isHomePage && 'none'};
`
const Button = styled.button`
  padding: 15px 60px;
  ${(props) => props.theme.breakpoint.M} {
    padding: 10px 40px;
  }
`

export default MainTitle
