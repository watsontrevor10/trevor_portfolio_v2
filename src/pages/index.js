import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import CodingImage from "../components/codingImage"
import PhotoImage from "../components/photoImage"
import MusicImage from "../components/musicImage"
import WritingImage from "../components/writingImage"
import SEO from "../components/seo"
// import TextOverlay from "../components/textOverlay"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <StyledLink to={"coding"}>
          <ImageContainer>
            <ImageOverlay>
              <CodingImage />
            </ImageOverlay>
            <TextOverlay>
              <h1>Coding</h1>
            </TextOverlay>
          </ImageContainer>
        </StyledLink>
        <StyledLink to={"music"}>
          <ImageContainer>
            <ImageOverlay>
              <MusicImage />
            </ImageOverlay>
            <TextOverlay>
              <h1>Music</h1>
            </TextOverlay>
          </ImageContainer>
        </StyledLink>
        <StyledLink to={"photography"}>
          <ImageContainer>
            <ImageOverlay>
              <PhotoImage />
            </ImageOverlay>
            <TextOverlay>
              <h1>Photography</h1>
            </TextOverlay>
          </ImageContainer>
        </StyledLink>
        <StyledLink to={"writing"}>
          <ImageContainer>
            <ImageOverlay>
              <WritingImage />
            </ImageOverlay>
            <TextOverlay>
              <h1>Blog</h1>
            </TextOverlay>
          </ImageContainer>
        </StyledLink>
      </Container>
    </Layout>
  )
}

const ImageOverlay = styled.div`
  position: relative;
  width: 600px;
  opacity: 1;
  transition: 0.5s linear;
`

const TextOverlay = styled.div`
  position: absolute;
  max-width: 350px;
  text-align: center;
  opacity: 0;
  transition: 0.5s linear;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  break-inside: avoid-column;

  &:hover ${ImageOverlay} {
    opacity: 0.1;
  }

  &:hover ${TextOverlay} {
    opacity: 1;
  }
`

const Container = styled.div`
  column-count: 2;
  column-gap: 0;
  grid-row-gap: 0;
  position: relative;
  box-shadow: 1px 5px 5px black;
`

export default IndexPage
