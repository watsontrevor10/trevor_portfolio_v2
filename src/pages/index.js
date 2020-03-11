import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import CodingImage from "../components/codingImage"
import PhotoImage from "../components/photoImage"
import MusicImage from "../components/musicImage"
import WritingImage from "../components/writingImage"
import SEO from "../components/seo"
import TextOverlay from "../components/textOverlay"

const IndexPage = () => {
  const [toggleHover, setToggleHover] = useState(false)

  const hoverImage = () => {
    setToggleHover(!toggleHover)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <ImageWrapper>
        <StyledLink
          to="/coding"
          // onMouseEnter={() => hoverImage()}
          // onMouseLeave={() => hoverImage()}
        >
          <CodingImage />
          {/* {toggleHover ? (
            <StyleOverlay>
              <TextOverlay>
                <h2>Coding</h2>
              </TextOverlay>
            </StyleOverlay>
          ) : (
            ""
          )} */}
        </StyledLink>
        <StyledLink to="music">
          <MusicImage />
        </StyledLink>
        <StyledLink to="photography">
          <PhotoImage />
        </StyledLink>
        <StyledLink to="writing">
          <WritingImage />
        </StyledLink>
      </ImageWrapper>
    </Layout>
  )
}

const ImageWrapper = styled.div`
  display: Flex;
  position: relative;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 2em;
  .gatsby-image-wrapper {
    width: 550px;
    height: auto;
  }
`

const StyleOverlay = styled.div`
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const StyledLink = styled(Link)`
  margin: 5px;
  position: relative;
  max-width: 100%;
  box-shadow: 1px 5px 5px grey;
  transition: 300ms ease-in-out;
  color: white;
`

export default IndexPage
