import styled from 'styled-components'

import FormActions from '../FormActions'
import CustomInput from 'components/General/CustomInput'

const Wrapper = styled.div``
const Summarization = styled.div`
  border: 1px solid ${(props) => props.theme.fade2};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
`
const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
`
const SummaryData = styled.div`
  width: 100%;
  text-align: left;
`
const Label = styled.div``
const ShippingMethods = styled.div`
  border: 1px solid ${(props) => props.theme.fade2};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`
const Separator = styled.div`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.fade2};
  margin: 0 10px;
  width: 100%;
  margin: auto;
`

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
`

const Shipping = (props: { paymentStep: () => void; stepBack: () => void }) => {
  return (
    <Wrapper>
      <Summarization>
        <ItemWrap>
          <SummaryData>
            <Label>Contact</Label>
            <div>content@content.zc</div>
          </SummaryData>
          <div>Change</div>
        </ItemWrap>
        <Separator />
        <ItemWrap>
          <SummaryData>
            <Label>Ship to</Label>
            <div>Adresa 25, Letkov, 326 00</div>
          </SummaryData>
          <div>Change</div>
        </ItemWrap>
      </Summarization>

      <h2>Shipping method</h2>
      <ShippingMethods>
        <Option>
          <CustomInput
            type={'radio'}
            isCheckbox
            onChange={() => {}}
            value={true}
            name={'checkbox'}
          />
          <div>Zásilkovna</div>
          <div>od 49,- Kč</div>
        </Option>
        <Separator />
        <Option>
          <CustomInput
            type={'radio'}
            isCheckbox
            onChange={() => {}}
            value={true}
            name={'checkbox'}
          />
          <div>Česká pošta</div>
          <div>od 99,- Kč</div>
        </Option>
      </ShippingMethods>
      <FormActions
        stepForward={props.paymentStep}
        stepBack={props.stepBack}
        buttonCaption={'Continue to payment'}
        linkCaption={'Back to customer'}
      />
    </Wrapper>
  )
}

export default Shipping
