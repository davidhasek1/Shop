import Link from "next/link";
import styled from "styled-components";

const PageNavWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  margin: auto;
  padding-left: 10%;
  background-color: #ffffff;
`;
const StyledLink = styled.a`
  margin: 15px;
  padding: 5px 20px;
  background: none;
  border: none;
  outline: none;
  border-radius: 20px;
  background-color: #f7faff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartNavigation = () => {
  return (
    <PageNavWrapper>
      <Link href="/" passHref>
        <StyledLink>Last purchases</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>Something for you</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>Help</StyledLink>
      </Link>
    </PageNavWrapper>
  );
};

export default CartNavigation;
