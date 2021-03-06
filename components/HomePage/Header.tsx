import Image from "next/image";
import styled from "styled-components";

const HeaderContainer = styled.div`
  padding: 40px 0;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
`;
const HeaderContent = styled.div`
  width: 50%;
`;
const Paragraph = styled.p`
  text-align: left;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Image src="/" width={600} height={300} />
      </div>
      <HeaderContent>
        <div>
          <h1>Title of mew suprt product feffefe!</h1>
          <Paragraph>
            fijwí íáfjw fíjw fíwájw fijwí íáfjw fíjw fíwájw fijwí íáfjw fíjw
            fíwájw fijwí íáfjw fíjw fíwájwfijwí íáfjw fíjw fíwájw fijwí íáfjw
            fíjw fíwájw fijwí íáfjw fíjw fíwájw fijwí íáfjw fíjw fíwájw fijwí
            íáfjw fíjw fíwájw fijwí íáfjw fíjw fíwájwfijwí íáfjw fíjw fíwájw
          </Paragraph>
        </div>
        <button>Show more...</button>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
