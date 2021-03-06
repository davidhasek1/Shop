import Image from "next/image";
import styled from "styled-components";

const Item = styled.div`
  max-width: 300px;
`
const Title = styled.h3`
  text-align: left;
  padding-left: 10px;
`


const ContentItem = () => {
  return (
    <Item>
      <Image src="/" width={300} height={200} />
      <div>
        <Title>Title of section whe you can find top products</Title>
        <span>read further..</span>
      </div>
    </Item>
  );
};

export default ContentItem;
