import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "../utils/responsivity";
import { useRouter } from "next/router";

const ShopNavigation = () => {
  const router = useRouter();
  const query = router.query.categoryID;
  console.log(query);
  return (
    <PageNavWrapper>
      <Container>
        <Link href="/shop/1" passHref>
          <StyledLink active={query === "1"}>All</StyledLink>
        </Link>
        <Link href="/shop/2" passHref>
          <StyledLink active={query === "2"}>Favourites</StyledLink>
        </Link>
        <Link href="/shop/3" passHref>
          <StyledLink active={query === "3"}>Sale</StyledLink>
        </Link>
      </Container>
    </PageNavWrapper>
  );
};

type LinkProps = {
  active: boolean;
};

const PageNavWrapper = styled.div`
  background-color: #ffffff;
`;
const Container = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: auto;
  display: flex;
  text-align: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  ${breakpoints("padding", "", [{ 1200: "0 15px" }])}
`;
const StyledLink = styled.a<LinkProps>`
  padding: 15px;
  text-shadow: 1px 0px 5px #cecece;
  border-bottom: ${(props) => (props.active ? "3px solid #ffbac9" : null)};
  &:hover {
    border-bottom: 3px solid #ffbac9;
  }
`;

export default ShopNavigation;
