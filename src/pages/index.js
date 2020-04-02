import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
// Styles
import styled from "styled-components"
import ImgCont from "../styles/ImageCont"
import ImgOverlay from "../styles/ImgOverlay"
import TxtOverlay from "../styles/TxtOverlay"
import Layout from "../components/layout"
// Images
import CodingImage from "../components/codingImage"
import PhotoImage from "../components/photoImage"
import MusicImage from "../components/musicImage"
import WritingImage from "../components/writingImage"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div class="main-container">
        <Link class="styled-link" to={"/coding"}>
          <ImageContainer>
            <ImgOverlay>
              <CodingImage />
            </ImgOverlay>
            <TxtOverlay>
              <h1>Coding</h1>
            </TxtOverlay>
          </ImageContainer>
        </Link>
        <Link class="styled-link" to={"/photography"}>
          <ImageContainer>
            <ImgOverlay>
              <PhotoImage />
            </ImgOverlay>
            <TxtOverlay>
              <h1>Photography</h1>
            </TxtOverlay>
          </ImageContainer>
        </Link>
        <Link class="styled-link" to={"/writing"}>
          <ImageContainer>
            <ImgOverlay>
              <WritingImage />
            </ImgOverlay>
            <TxtOverlay>
              <h1>Writing</h1>
            </TxtOverlay>
          </ImageContainer>
        </Link>
        <Link class="styled-link" to={"/music"}>
          <ImageContainer>
            <ImgOverlay>
              <MusicImage />
            </ImgOverlay>
            <TxtOverlay>
              <h1>Music</h1>
            </TxtOverlay>
          </ImageContainer>
        </Link>
      </div>
    </Layout>
  )
}

// const ImageOverlay = styled.div`
//   width: 100%;
//   height: auto;
//   opacity: 1;
//   transition: 0.5s linear;
// `

// const TextOverlay = styled.div`
//   position: absolute;
//   max-width: 350px;
//   text-align: center;
//   opacity: 0;
//   transition: 0.5s linear;
// `

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover ${ImgOverlay} {
    opacity: 0.1;
  }

  &:hover ${TxtOverlay} {
    opacity: 1;
  }
`

export default IndexPage
