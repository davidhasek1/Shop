import { useState } from 'react'
import styled from 'styled-components'

import Informations from './Informations'
import Shipping from './Shipping'
import Summary from './Summary'

import CustomImage from 'components/General/Image'

const CheckoutWizard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showInformations, setShowInformations] = useState(true)
  const [showShipping, setShowShipping] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  console.log(showInformations)

  const shippingStep = () => {
    //save customer data do reduxu

    setShowInformations(false)
    setShowShipping(true)
  }

  console.log(showInformations, showShipping)

  return (
    <Container>
      {/* TODO: Create stapes logic */}

      <Wrapper>
        <LayoutContainer>
          <ImageContainerMobile>
            <CustomImage
              imageSrc={'/images/wellu.png'}
              imageHeight={70}
              imageWidth={150}
              fitting={'contain'}
            />
          </ImageContainerMobile>
          <SummaryContainerMobile>
            <SummaryBar onClick={toggle}>Show order summary</SummaryBar>

            <Summary onToggle={isOpen} />
          </SummaryContainerMobile>

          <ProccessContainer>
            <ImageContainer>
              <CustomImage
                imageSrc={'/images/wellu.png'}
                imageHeight={70}
                imageWidth={150}
                fitting={'contain'}
              />
            </ImageContainer>

            {showInformations && <Informations shippingStep={shippingStep} />}
            {showShipping && <Shipping />}
            {/* ... next steps */}
          </ProccessContainer>
        </LayoutContainer>

        <SummaryContainer>
          <Summary onToggle={true} />
        </SummaryContainer>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;

  background-color: #fff;
  display: flex;
`
const Wrapper = styled.div`
  display: flex;
  ${(props) => props.theme.breakpoint.M} {
    //TODO: maybe L size ? test it
    flex-direction: column;
  }
`
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ImageContainer = styled.div`
  ${(props) => props.theme.breakpoint.L} {
    display: none;
  }
`
const ImageContainerMobile = styled.div`
  order: -1;
  margin: 20px 15px;
  ${(props) => props.theme.breakpoint.XL} {
    display: none;
  }
  ${(props) => props.theme.breakpoint.L} {
    display: flex;
  }
`

const ProccessContainer = styled.div`
  width: 100%;
  padding: 2.5rem 2.5rem 2.5rem 10%;
  ${(props) => props.theme.breakpoint.M} {
    padding: 1rem;
  }
`
const SummaryContainer = styled.div`
  padding: 2.5rem 5% 2.5rem 2.5rem;
  width: 60%;
  background-color: #fafafa;
  border-left: 1px solid ${(props) => props.theme.pink};
  ${(props) => props.theme.breakpoint.M} {
    display: none;
  }
`

const SummaryContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`

const SummaryBar = styled.div`
  background-color: #fafafa;
  border: 1px solid ${(props) => props.theme.pink};
  padding: 15px 0;

  ${(props) => props.theme.breakpoint.XL} {
    display: none;
  }
  ${(props) => props.theme.breakpoint.M} {
    display: block;
  }
`

export default CheckoutWizard
