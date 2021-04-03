import styled from "styled-components";
import Navigation from "../components/Navigation";
import ShopNavigation from "../components/PageNavigation";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const isShop = router.pathname === "/shop";
  const isFav = router.pathname === "/shop/sale";
  const isSale = router.pathname === "/shop/favourites";

  const shopNav = isShop || isFav || isSale ? <ShopNavigation /> : null;

  return (
    <>
      <Navigation />
      {shopNav}
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: auto;
`;
export default Layout;
