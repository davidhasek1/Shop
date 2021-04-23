import styled from "styled-components"
import { StyledIconBase } from "@styled-icons/styled-icon"
import { Heart } from "@styled-icons/fa-solid/Heart"
import Link from 'next/link'

const Shipment = () => {
  return (
    <ShipmentDataContainer>
      <Wrapper>
        <Title>
          <Heart size={40} />
          &nbsp;Thank you!&nbsp;
          <Heart size={40} />
        </Title>
        <Button>
          <Link href="/">
            Back Home
          </Link>
        </Button>
      </Wrapper>
    </ShipmentDataContainer>
  )
}

const ShipmentDataContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  width: 100%;
`
const Title = styled.h1`
  ${StyledIconBase} {
    color: ${(props) => props.theme.pink};
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  padding: 10px 0;
`
const Button = styled.button`
  padding: 15px 20px;
  background-color: ${(props) => props.theme.pink};
  outline: none;
  border: none;
  border-radius: 25px;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  font-weight: 600;
  cursor: pointer;
`;

export default Shipment
