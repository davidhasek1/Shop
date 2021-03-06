import Link from "next/link";
import styled from "styled-components";

const PageNavWrapper = styled.div`
  height: 50px;
  display: flex;
  text-align: center;
  margin: auto;
  padding-left: 10%;
`;
const StyledLink = styled.a`
  margin: 5px;
  padding: 2px 20px;
  background: none;
  border: none;
  outline: none;
  border-radius: 20px;
  background-color: #f7faff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageNavigation = () => {
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
    </PageNavWrapper>
  );
};

export default PageNavigation;
