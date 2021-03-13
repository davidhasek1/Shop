import styled from "styled-components"
import { StyledIconBase } from "@styled-icons/styled-icon"
import { CheckCircle } from "@styled-icons/boxicons-solid/CheckCircle"

const SendOrder = () => {
  return (
    <SendOrderContainer>
      <Left>
        <Title>
          <CheckCircle size={40} />
          &nbsp;Summary
        </Title>
        <Price>1000,- Kč</Price>
      </Left>
      <Divider />
      <Right>
        <CustomerDataWrapper>
          <DeliveryTable>
            <Head>
              <tr>
                <HeadData colSpan={2}>Doručovací adresa</HeadData>
              </tr>
            </Head>
            <TableBody>
              <tr>
                <Data>Jméno a příjmení:</Data>
                <Data>David Hašek</Data>
              </tr>
              <tr>
                <Data>Ulice:</Data>
                <Data>Vrbová 145</Data>
              </tr>
              <tr>
                <Data>Město:</Data>
                <Data>Plzeň</Data>
              </tr>
              <tr>
                <Data>PSČ:</Data>
                <Data>32600</Data>
              </tr>
              <tr>
                <Data>Stát</Data>
                <Data>Česká republika</Data>
              </tr>
              <tr>
                <Data>Společnost:</Data>
                <Data></Data>
              </tr>
            </TableBody>
          </DeliveryTable>
          <InvoiceTable>
            <Head>
              <tr>
                <HeadData colSpan={2}>Fakturační údaje</HeadData>
              </tr>
            </Head>
            <TableBody>
              <tr>
                <Data>Jméno a příjmení:</Data>
                <Data>David Hašek</Data>
              </tr>
              <tr>
                <Data>Ulice:</Data>
                <Data>Vrbová 145</Data>
              </tr>
              <tr>
                <Data>Město:</Data>
                <Data>Plzeň</Data>
              </tr>
              <tr>
                <Data>PSČ:</Data>
                <Data>32600</Data>
              </tr>
              <tr>
                <Data>Stát</Data>
                <Data>Česká republika</Data>
              </tr>
              <tr>
                <Data>Společnost:</Data>
                <Data></Data>
              </tr>
            </TableBody>
          </InvoiceTable>
        </CustomerDataWrapper>
        <ContactData>
          <ContactTable>
            <Head>
              <tr>
                <HeadData colSpan={4}>Kontaktní údaje</HeadData>
              </tr>
            </Head>
            <TableBody>
              <tr>
                <Data>E-mail:</Data>
                <Data>David@Hašek.com</Data>
                <Data>Telefon:</Data>
                <Data>777 777 777</Data>
              </tr>
            </TableBody>
          </ContactTable>
        </ContactData>

        {/* TOTO bude tabulka  se sumarizací položek objednávky*/}
        <ContactData>
          <ContactTable>
            <Head>
              <tr>
                <HeadData colSpan={4}>Souhrn objednávky</HeadData>
              </tr>
            </Head>
            <TableBody>
              <tr>
                <Data>E-mail:</Data>
                <Data>David@Hašek.com</Data>
                <Data>Telefon:</Data>
                <Data>777 777 777</Data>
              </tr>
            </TableBody>
          </ContactTable>
        </ContactData>

        <ShipData>
          <ShippingTable>
            <Head>
              <tr>
                <HeadData colSpan={4}>Doprava</HeadData>
              </tr>
            </Head>
            <TableBody>
              <tr>
                <Data>PPL Dobírka</Data>
                <Data>100,- kč</Data>
              </tr>
            </TableBody>
          </ShippingTable>
        </ShipData>
        <ButtonWrapper>
          <Button>Back</Button>
          <Button>Finish</Button>
        </ButtonWrapper>
      </Right>
    </SendOrderContainer>
  )
}

const SendOrderContainer = styled.div`
  padding-top: 80px;
  display: flex;
`
const Left = styled.div`
  width: 30%;
`
const Right = styled.div`
  width: 70%;
`
const Title = styled.h1`
  ${StyledIconBase} {
    color: #ffbac9;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`
const Price = styled.h3``

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
const Button = styled.button`
  padding: 15px 20px;
  background-color: #ffbac9;
  outline: none;
  border: none;
  border-radius: 25px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`
const CustomerDataWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
`
const DeliveryTable = styled.table`
  width: 50%;
  margin-right: 5px;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
`
const InvoiceTable = styled(DeliveryTable)`
  margin-left: 5px;
`
const ContactData = styled(CustomerDataWrapper)`
  width: 90%;
`
const ShipData = styled(ContactData)``

const ContactTable = styled.table`
  width: 100%;
  margin: 25px 0;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
`
const ShippingTable = styled(ContactTable)`
  margin-bottom: 25px;
`
const TableBody = styled.tbody`
  text-align: left;
`
const Head = styled.thead``
const Data = styled.td`
padding: 10px;

background-color: #ffffff;
`
const HeadData = styled(Data)`
  background-color: #ffbac9;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 500;
`
export default SendOrder
