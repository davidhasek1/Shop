import styled from 'styled-components'
import { setCartTotal, setUpdateCart } from '../../sagaStore/actions'
import { useDispatch } from 'react-redux'

const QuantityHandler = (props: {
  quantity: any
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  productID: string
}) => {
  const dispatch = useDispatch()
  const addOne = () => {
    props.setQuantity((prevState) => prevState + 1)
    dispatch(setUpdateCart(props.productID, props.quantity + 1))
    dispatch(setCartTotal())
  }
  const substractOne = () => {
    props.setQuantity((prevState) => (props.quantity > 0 ? prevState - 1 : 0))
    dispatch(setUpdateCart(props.productID, props.quantity - 1))
    dispatch(setCartTotal())
  }

  return (
    <Wrapper>
      <Container>
        <CountButton onClick={addOne}>+</CountButton>
        <InputStyled
          className={'numberInput'}
          type="number"
          value={props.quantity}
          onChange={(e) => props.setQuantity(parseInt(e.target.value))}
        />
        <CountButton onClick={substractOne}>-</CountButton>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.fade2};
  padding: 5px;
`
const CountButton = styled.button`
  padding: 5px 10px;
  background: none;
  color: ${(props) => props.theme.text};
  font-weight: 200;
  font-size: 16px;
  &:hover {
    color: ${(props) => props.theme.pink};
    outline: none;
    background: none;
  }
`

const InputStyled = styled.input`
  height: 100%;
  background: none;
`

export default QuantityHandler
