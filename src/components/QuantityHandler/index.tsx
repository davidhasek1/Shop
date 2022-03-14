import styled from 'styled-components'
import { setCartTotal, setUpdateCart, setCartRemove } from 'sagaStore/actions'
import { useDispatch } from 'react-redux'

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
  ${(props) => props.theme.breakpoint.S} {
    padding: 5px;
  }
`

const InputStyled = styled.input`
  height: 100%;
  background: none;
  ${(props) => props.theme.breakpoint.S} {
    width: 1.5rem;
  }
`

const QuantityHandler = (props: {
  quantity: any
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  productID: string
  isCart: boolean
}) => {
  const dispatch = useDispatch()

  const checkZeroQuantity = () => {
    const toRemoveItem = confirm(
      'Do you really want to delete this item from a cart?'
    )
    if (toRemoveItem) {
      dispatch(setCartRemove(props.productID))
    } else {
      props.setQuantity(1)
      dispatch(setUpdateCart(props.productID, 1))
    }
    dispatch(setCartTotal())
  }

  const addOne = () => {
    props.setQuantity((prevState) => prevState + 1)
    props.isCart && dispatch(setUpdateCart(props.productID, props.quantity + 1))
    props.isCart && dispatch(setCartTotal())
  }
  const substractOne = () => {
    if (props.quantity > 1) {
      props.setQuantity((prevState) => (props.quantity > 0 ? prevState - 1 : 0))
      props.isCart &&
        dispatch(setUpdateCart(props.productID, props.quantity - 1))
      props.isCart && dispatch(setCartTotal())
    } else {
      props.isCart && checkZeroQuantity()
    }
  }

  const updateInputQuantity = (e) => {
    const newValue = e.target.value
    const inputValue = newValue ? parseInt(newValue) : ''
    //@ts-ignore
    props.setQuantity(inputValue)

    if (inputValue >= 1) {
      dispatch(setUpdateCart(props.productID, inputValue))
      dispatch(setCartTotal())
    } else if (inputValue === 0 || inputValue < 0) {
      // <= sign didn't work
      props.isCart && checkZeroQuantity()
    }
  }

  return (
    <Wrapper>
      <Container>
        <CountButton onClick={addOne}>+</CountButton>
        <InputStyled
          className={'numberInput'}
          type="number"
          value={props.quantity}
          onChange={updateInputQuantity}
        />
        <CountButton onClick={substractOne}>-</CountButton>
      </Container>
    </Wrapper>
  )
}

export default QuantityHandler
