import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { Heart } from "@styled-icons/fa-solid/Heart";
import { useRouter } from "next/router";
import Button from "components/UI/Button";

const ThankYouSection = () => {
  const router = useRouter();
  return (
    <ShipmentDataContainer>
      <Wrapper>
        <Title>
          <Heart size={40} />
          &nbsp;Thank you!&nbsp;
          <Heart size={40} />
        </Title>
        <Button onClick={() => router.push("/")}>Back Home</Button>
      </Wrapper>
    </ShipmentDataContainer>
  );
};

const ShipmentDataContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
`;
const Title = styled.h1`
  ${StyledIconBase} {
    color: ${(props) => props.theme.pink};
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ThankYouSection;
