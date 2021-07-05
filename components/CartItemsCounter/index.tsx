import styled from 'styled-components'

const CartItemsCounter = ({ count }) => {
  return (
    <CounterWrapper>
      <Inner>{count}</Inner>
    </CounterWrapper>
  )
}
const Inner = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 55%;
  right: 47%;
  transform: translate(50%, -50%);
`
const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;

  width: 20px;
  height: 20px;
  border-radius: 100%;
  font-size: 12px;
  position: absolute;
  top: -10px;
  right: -10px;
`
export default CartItemsCounter
