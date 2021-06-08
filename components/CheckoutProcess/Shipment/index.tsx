import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { breakpoints } from 'utils/responsivity'
import { Truck } from '@styled-icons/fa-solid/Truck'
import { RootStateOrAny, useSelector } from 'react-redux'
import { showOrderSummary } from 'store/actions/userCartActions'
import OrderSectionTitle from '../OrderSectionTitle'
import Button from 'components/UI/Button'

const Shipment = () => {
  const dispatch = useDispatch()
  const showNextSection = useSelector(
    (state: RootStateOrAny) => state.userCart.showShipment
  )
  const shipmentFormHandler = (e) => {
    e.preventDefault()
    dispatch(showOrderSummary())
  }
  return (
    <ShipmentDataContainer showShipment={showNextSection}>
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
          <ButtonWrapper>
            <Button>Back</Button>
            <Button>
              Continue
            </Button>
          </ButtonWrapper>
        </Form>
      </Right>
    </ShipmentDataContainer>
  )
}

type cartProps = {
  showShipment: boolean
}

const ShipmentDataContainer = styled.div<cartProps>`
  padding-top: 80px;
  display: ${({ showShipment }) => (showShipment ? 'flex' : 'none')};
  ${breakpoints('flex-direction', '', [{ 800: 'column' }])}
`
const Right = styled.div`
  width: 70%;
  ${breakpoints('width', '', [{ 800: '100%' }])}
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
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  padding: 10px 0;
`

export default Shipment
