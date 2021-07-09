import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import Button from 'components/UI/Button'
import Link from 'next/link'

const MainTitle = ({ headerTitle }) => {
  return (
    <TitleWrapper>
      <Title>{headerTitle}</Title>
      <ButtonWrapper>
        <Link href="/shop">
          <Button styleType={'NORMAL'}>Shop now</Button>
        </Link>
      </ButtonWrapper>
    </TitleWrapper>
  )
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
const ButtonWrapper = styled.div``

export default MainTitle
