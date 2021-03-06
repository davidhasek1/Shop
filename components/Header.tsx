import Image from "next/image";
import styled from "styled-components";

const HeaderContainer = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;
const HeaderContent = styled.div`
  
`

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Image src="/" width={600} height={300} />
      </div>
      <HeaderContent>
        <div>
          <h1>Title of mew suprt product feffefe!</h1>
        </div>
        <div>Show more...</div>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
