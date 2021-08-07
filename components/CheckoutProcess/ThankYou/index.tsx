import styled from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'
import { Heart } from '@styled-icons/fa-solid/Heart'
import { useRouter } from 'next/router'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'

const ThankYouSection = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  /* TODO: refactor checkout porcess + saga */

  /* const showNextSection = useSelector(
    (state: RootStateOrAny) => state.userCart.showThankYou
  ) */
  return (
    <ThankyouContainer showThankYou={true}>
      <Wrapper>
        <Title>
          <Heart size={40} />
          &nbsp;Thank you!&nbsp;
          <Heart size={40} />
        </Title>
        <Button onClick={() => router.push('/')}>Back Home</Button>
      </Wrapper>
    </ThankyouContainer>
  )
}
type Props = {
  showThankYou: boolean
}

const ThankyouContainer = styled.div<Props>`
  height: 100vh;
  display: ${({ showThankYou }) => (showThankYou ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  width: 100%;
`
const Title = styled.h1`
  ${StyledIconBase} {
    color: ${(props) => props.theme.pink};
  }
  display: flex;
  align-items: center;
  justify-content: center;
`
const Button = styled.button``
export default ThankYouSection
