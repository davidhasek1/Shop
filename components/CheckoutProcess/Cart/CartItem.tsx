import styled from "styled-components"
import { breakpoints } from "utils/responsivity"
import { Plus, Minus } from "@styled-icons/entypo"
import { Trash } from "@styled-icons/bootstrap/Trash"
import Button from "components/UI/Button"
import StyledImage from "components/Image"

const CartItem = () => {
  return (
    <ItemContainer>
      <StyledImage
        imageSrc={"/images/testimgW.jpg"}
        imageWidth={150}
        imageHeight={150}
        scaleing={false}
        fitting={"cover"}
      />
      <Description>
        <Title>Item #n</Title>
        <Text>
          bkdwidnw u wiufw fj wfeefe fh f ef e=f efef f eíáf fíejf eíájf e=fe
          fíehf ehf eáf eáf íf eífjeíf fíeh j
        </Text>
      </Description>
      <ItemActions>
        <ChangeCount>
          <Button
            onClick={() => console.log("inc")}
            icon={<Plus size={20} />}
          />
          <Count>5</Count>
          <Button
            onClick={() => console.log("dec")}
            icon={<Minus size={20} />}
          />
        </ChangeCount>
        <Delete
          onClick={() => console.log("delete")}
          icon={<Trash size={20} />}
        />
      </ItemActions>
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 15px auto;
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  overflow: hidden;
  ${breakpoints("flex-direction", "", [{ 600: "column" }])}
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
`
const Title = styled.h2`
  margin: 0;
  text-align: left;
  padding-left: 10px;
  font-size: 20px;
`
const Text = styled.p`
  margin: 0;
  text-align: left;
  padding-left: 10px;
  font-size: 14px;
`
const ItemActions = styled.div`
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  ${breakpoints("flex-direction", "", [{ 600: "row" }])}
  ${breakpoints("padding", "", [{ 600: "15px 0" }])}
`
const ChangeCount = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoints("flex-direction", "", [{ 600: "row" }])}
`
const Delete = styled(Button)`
  padding: 25px;
`
const Count = styled.span`
  padding: 8px;
`

export default CartItem
