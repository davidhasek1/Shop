//
//  TODO: Použít i pro Product detail
//

import styled from 'styled-components'
import { useState } from 'react'

const QuantityHandler = () => {
  //
  //TODO: add state to redux -> we gonna use it in cart and product detail
  //
  const [quantity, setQuantity] = useState(0)
  console.log(quantity)

  const addOne = () => {
    setQuantity((prevState) => prevState + 1)
  }
  const substractOne = () => {
    setQuantity((prevState) => (quantity > 0 ? prevState - 1 : 0))
  }

  return (
    <Wrapper>
      <Container>
        <CountButton onClick={addOne}>+</CountButton>
        <InputStyled
          className={'numberInput'}
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
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
