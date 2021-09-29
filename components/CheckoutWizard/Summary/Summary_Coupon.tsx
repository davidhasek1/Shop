import styled from 'styled-components'

import CustomInput from 'components/General/CustomInput'

const CouponWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 2.5rem;
  ${(props) => props.theme.breakpoint.L} {
    max-width: 20rem;
    margin: auto;
  }
`
const Button = styled.button`
  padding: 0 15px;
  height: inherit;
  margin-left: 5px;
  border-radius: 5px;
  &:hover {
    outline: none;
    border: 1px solid #000;
  }
`
const SummaryCoupon = () => {
  return (
    <CouponWrapper>
      <CustomInput
        type={'text'}
        onChange={() => [
          /* TODO */
        ]}
        value={''}
        name={'coupon'}
        placeholder={'Apply coupon'}
      />
      <Button>Apply</Button>
    </CouponWrapper>
  )
}

export default SummaryCoupon
