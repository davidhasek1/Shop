import { useState } from 'react'
import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'

const ProductActions = (props: {
  title: string
  buttonTitle: string
  onAddToCart: () => void
}) => {
  return (
    <Actions>
      <InputWrapper>
        {props.title}
        <Select>  {/* TODO: design + functionality */}
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Select>
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
  margin: 20px 0;
`
const Select = styled.select`
  background: none;
  outline: none;
  border: none;
  width: 30px;
`
export default ProductActions
