import styled from "styled-components"
import { breakpoints } from "utils/responsivity"

const AboutSection = ({ children }) => {
  return (
    <AboutWrapper>
      <div>
        <h1>About WellU 💁🏽‍♀️</h1>
      </div>
      <ContentWrapper>{children}</ContentWrapper>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.div``
const ContentWrapper = styled.div`
  text-align: justify;
  ${breakpoints('padding', '', [{1200: '10px'}])}
`
export default AboutSection
