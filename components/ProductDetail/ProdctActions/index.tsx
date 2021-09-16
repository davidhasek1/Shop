import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import QuantitiyHandler from 'components/QuantityHandler'

const ProductActions = (props: {
  title: string
  buttonTitle: string
  onAddToCart: () => void
  quantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  productID: string
}) => {
  return (
    <Actions>
      <InputWrapper>
        {props.title}
        <QuantitiyHandler
          productID={props.productID}
          quantity={props.quantity}
          setQuantity={props.setQuantity}
          isCart={false}
        />
      </InputWrapper>
      <button onClick={props.onAddToCart} className={'inverted'}>
        {props.buttonTitle}
      </button>
    </Actions>
  )
}

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  margin: 20px 0;
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`
const Select = styled.select`
  background: none;
  outline: none;
  border: none;
  width: 30px;
`
export default ProductActions
