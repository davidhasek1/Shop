import styled from 'styled-components'

import Informations from './Informations'
import Summary from './Summary'
import CustomImage from 'components/General/Image'

const CheckoutWizard = () => {
  return (
    <Container>
      {/* TODO: Create stapes logic */}

      <ProccessContainer>
        <CustomImage
          imageSrc={'/images/wellu.png'}
          imageHeight={70}
          imageWidth={150}
          fitting={'contain'}
        />
        <Informations />
      </ProccessContainer>
      <SummaryContainer>
        <Summary />
      </SummaryContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const ProccessContainer = styled.div`
  padding: 25px 25px 25px 15%;
`
const SummaryContainer = styled.div`
  width: 60%;
  padding: 25px 15% 25px 25px;
  background-color: #9b9b9b;
`

export default CheckoutWizard
