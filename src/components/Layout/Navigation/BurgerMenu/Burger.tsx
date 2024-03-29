import styled from 'styled-components'

const BurgerContainer = styled.div`
  height: 25px;
  width: 30px;
`
const BurgerLine = styled.div`
  height: 1px;
  width: 30px;
  margin: 5px 0;
  border-radius: 45px;
  background-color: ${(props) => props.theme.black};
`
const BurgerLineShort = styled(BurgerLine)`
  width: 20px;
`
const Burger = ({ onClick }) => {
  return (
    <BurgerContainer onClick={onClick}>
      <BurgerLine />
      <BurgerLineShort />
      <BurgerLineShort />
    </BurgerContainer>
  )
}

export default Burger
