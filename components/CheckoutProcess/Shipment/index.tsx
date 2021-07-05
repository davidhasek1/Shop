import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { breakpoints } from 'utils/responsivity'
import { Truck } from '@styled-icons/fa-solid/Truck'
import { RootStateOrAny, useSelector } from 'react-redux'
import { showOrderSummary, showShipment } from 'store/actions/userCartActions'
import OrderSectionTitle from '../OrderSectionTitle'
import Button from 'components/UI/Button'

const Shipment = () => {
  const dispatch = useDispatch()
  const showShipmentSection = useSelector(
    (state: RootStateOrAny) => state.userCart.showShipment
  )
  const showSummary = useSelector(
    (state: RootStateOrAny) => state.userCart.showSummary
  )

  const shipmentFormHandler = (e) => {
    e.preventDefault()
    dispatch(showOrderSummary(true))
  }
  return (
    <ShipmentDataContainer showShipment={showShipmentSection} showSummary>
      <OrderSectionTitle
        icon={<Truck size={40} />}
        title={'Shipment'}
        price={'999'}
      />
      <Divider />
      <Right>
        <Form onSubmit={shipmentFormHandler}>
          <FormContent>
            <div>
              <Input type="checkbox" /> PPL
            </div>
            <div>
              <Input type="checkbox" /> Česká pošta
            </div>
            <div>
              <Input type="checkbox" /> Zásilkovna
            </div>
          </FormContent>
          CAll na API PPL Zasilkovny a pošty
          <ButtonWrapper showShipment showSummary={showSummary}>
            <Button
              buttonType="button"
              onClick={() => dispatch(showShipment(false))}
            >
              Back
            </Button>
            <Button>Continue</Button>
          </ButtonWrapper>
        </Form>
      </Right>
    </ShipmentDataContainer>
  )
}

type CartProps = {
  showShipment: boolean
  showSummary: boolean
}

const ShipmentDataContainer = styled.div<CartProps>`
  padding-top: 80px;
  display: ${({ showShipment }) => (showShipment ? 'flex' : 'none')};
  ${breakpoints('flex-direction', '', [{ L: 'column' }])}
`
const Right = styled.div`
  width: 70%;
  ${breakpoints('width', '', [{ L: '100%' }])}
`
const Form = styled.form`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const FormContent = styled.div`
  text-align: left;
  display: flex;
`
const Input = styled.input``
const Divider = styled.div`
  border-left: 1px solid #ccc;
`
const ButtonWrapper = styled.div<CartProps>`
  display: ${({ showSummary }) => (showSummary ? 'none' : 'flex')};
  justify-content: space-between;
  width: 90%;
  margin: auto;
  padding: 10px 0;
`

export default Shipment
