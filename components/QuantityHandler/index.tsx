import styled from 'styled-components'
import {
  setCartTotal,
  setUpdateCart,
  setCartRemove,
} from '../../sagaStore/actions'
import { useDispatch } from 'react-redux'

const QuantityHandler = (props: {
  quantity: any
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  productID: string
}) => {
  const dispatch = useDispatch()

  //TODO cart 0 quantity => remove form cart
  /*   const checkZeroQuantity = () => {
    if (props.quantity <= 1) {
      const toRemoveItem = confirm(
        'Do you really want to delete this item from a cart?'
      )
      return toRemoveItem && dispatch(setCartRemove(props.productID))
    }
    return
  }
 */
  const addOne = () => {
    props.setQuantity((prevState) => prevState + 1)
    dispatch(setUpdateCart(props.productID, props.quantity + 1))
    dispatch(setCartTotal())
  }
  const substractOne = () => {
    props.setQuantity((prevState) => (props.quantity > 0 ? prevState - 1 : 1))
    dispatch(setUpdateCart(props.productID, props.quantity - 1))
    dispatch(setCartTotal())
  }

  const updateInputQuantity = (e) => {
    const newValue = e.target.value
    const inputValue = newValue ? parseInt(e.target.value) : ''
    //@ts-ignore
    props.setQuantity(inputValue)
    dispatch(setUpdateCart(props.productID, inputValue))
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
          onChange={updateInputQuantity}
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
