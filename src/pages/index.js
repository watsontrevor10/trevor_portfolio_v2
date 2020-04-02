import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import CodingImage from "../components/codingImage"
import PhotoImage from "../components/photoImage"
import MusicImage from "../components/musicImage"
import WritingImage from "../components/writingImage"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div class="main-container">
        <Link class="styled-link" to={"/coding"}>
          <ImageContainer>
            <ImageOverlay>
              <CodingImage />
            </ImageOverlay>
            <TextOverlay>
              <h1>Coding</h1>
            </TextOverlay>
          </ImageContainer>
        </Link>
        <Link class="styled-link" to={"/photography"}>
          <ImageContainer>
            <ImageOverlay>
              <PhotoImage />
            </ImageOverlay>
            <TextOverlay>
              <h1>Photography</h1>
            </TextOverlay>
          </ImageContainer>
        </Link>
        <Link class="styled-link" to={"/writing"}>
          <ImageContainer>
            <ImageOverlay>
              <WritingImage />
            </ImageOverlay>
            <TextOverlay>
              <h1>Writing</h1>
            </TextOverlay>
          </ImageContainer>
        </Link>
        <Link class="styled-link" to={"/music"}>
          <ImageContainer>
            <ImageOverlay>
              <MusicImage />
            </ImageOverlay>
            <TextOverlay>
              <h1>Music</h1>
            </TextOverlay>
          </ImageContainer>
        </Link>
      </div>
    </Layout>
  )
}

const ImageOverlay = styled.div`
  width: 100%;
  height: auto;
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

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover ${ImageOverlay} {
    opacity: 0.1;
  }

  &:hover ${TextOverlay} {
    opacity: 1;
  }
`

export default IndexPage
