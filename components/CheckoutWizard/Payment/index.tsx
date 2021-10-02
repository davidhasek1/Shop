import styled from 'styled-components'

import CustomerForm from '../Informations/CustomerForm' //Pro faktuační adresu jinou než zasílací
import FormActions from '../FormActions'

import { inputsData } from '../Informations'

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
const Separator = styled.div`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.fade2};
  margin: 0 10px;
  width: 100%;
  margin: auto;
`

const Payment = (props: { finishCheckout: () => void }) => {
  return (
    <div>
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

      <div>Platební brána zde</div>

      <h3>Fakturace adresa jina než doručivací</h3>
      <CustomerForm inputsData={inputsData} />

      <FormActions
        step={props.finishCheckout}
        buttonCaption={'Complete payment'}
        linkCaption={'Back to shipping'}
      />
    </div>
  )
}

export default Payment
