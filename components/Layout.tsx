import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: auto;
`;

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
