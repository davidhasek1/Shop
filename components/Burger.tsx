import styled from "styled-components";

const Burger = () => {
  return (
    <BurgerContainer>
      <BurgerLine />
      <BurgerLine />
      <BurgerLine />
    </BurgerContainer>
  );
};

const BurgerContainer = styled.div`
  height: 25px;
  width: 30px;
`;
const BurgerLine = styled.div`
  height: 3px;
  width: 30px;
  margin: 5px 0;
  background-color: #ffffff;
`;

export default Burger;
