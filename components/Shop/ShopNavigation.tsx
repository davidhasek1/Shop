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

const ShopNavigation = () => {
  return (
    <PageNavWrapper>
      <Link href="/" passHref>
        <StyledLink>All</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>Favourites</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>Sale</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>All</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>Favourites</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>Sale</StyledLink>
      </Link>
    </PageNavWrapper>
  );
};

export default ShopNavigation;
