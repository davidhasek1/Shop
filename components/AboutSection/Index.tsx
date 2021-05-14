import styled from "styled-components"
import { breakpoints } from "utils/responsivity"
import Heading from "components/Heading"

const AboutSection = ({ aboutContent }) => {
  return (
    <AboutWrapper>
      <Heading>About WellU (CMS) 💁🏽‍♀️</Heading>
      <ContentWrapper>{aboutContent}</ContentWrapper>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.div`
  padding: 100px 0 50px 0;
`
const ContentWrapper = styled.div`
  text-align: justify;
  ${breakpoints("padding", "", [{ 1200: "10px" }])}
`
export default AboutSection
