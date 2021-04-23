import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "../../utils/responsivity";
import { Plus, Minus } from "@styled-icons/entypo";
import { Trash } from "@styled-icons/bootstrap/Trash";

const CartItem = () => {
  return (
    <ItemContainer>
      <CartImage>
        <Image src="/images/product.jpg" width={130} height={130} />
      </CartImage>
      <CartImgMobile>
        <Image
          src="/images/product.jpg"
          width={50}
          height={50}
          layout="responsive"
        />
      </CartImgMobile>
      <Description>
        <Title>Item #n</Title>
        <Text>
          bkdwidnw u wiufw fj wfeefe fh f ef e=f efef f eíáf fíejf eíájf e=fe
          fíehf ehf eáf eáf íf eífjeíf fíeh j
        </Text>
      </Description>
      <ItemActions>
        <ChangeCount>
          <Button>
            <Plus size={20} />
          </Button>
          <Count>5</Count>
          <Button>
            <Minus size={20} />
          </Button>
        </ChangeCount>
        <Delete>
          <Trash size={20} />
        </Delete>
      </ItemActions>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 15px auto;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  ${breakpoints("flex-direction", "", [{ 600: "column" }])}
`;
const CartImage = styled.div`
  display: flex;
  ${breakpoints("display", "", [{ 600: "none" }])}
`;
const CartImgMobile = styled.div``;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
`;
const Title = styled.h2`
  margin: 0;
  text-align: left;
  padding-left: 10px;
  font-size: 20px;
`;
const Text = styled.p`
  margin: 0;
  text-align: left;
  padding-left: 10px;
  font-size: 14px;
`;
const ItemActions = styled.div`
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  ${breakpoints("flex-direction", "", [{ 600: "row" }])}
  ${breakpoints("padding", "", [{ 600: "15px 0" }])}
`;
const ChangeCount = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoints("flex-direction", "", [{ 600: "row" }])}
`;
const Button = styled.button`
  padding: 5px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
const Delete = styled(Button)`
  padding: 0 5px;
  margin-left: 5px;
`;
const Count = styled.span`
  padding: 8px;
`;

export default CartItem;
