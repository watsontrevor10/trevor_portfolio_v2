import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
// Styles
import { TxtOverlay, ImgOverlay, ImgCont } from "../styles/ImgOverlay"
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
          <ImgCont>
            <ImgOverlay>
              <CodingImage />
            </ImgOverlay>
            <TxtOverlay>
              <h1>Coding</h1>
            </TxtOverlay>
          </ImgCont>
        </Link>
        <Link class="styled-link" to={"/photography"}>
          <ImgCont>
            <ImgOverlay>
              <PhotoImage />
            </ImgOverlay>
            <TxtOverlay>
              <h1>Photography</h1>
            </TxtOverlay>
          </ImgCont>
        </Link>
        <Link class="styled-link" to={"/writing"}>
          <ImgCont>
            <ImgOverlay>
              <WritingImage />
            </ImgOverlay>
            <TxtOverlay>
              <h1>Writing</h1>
            </TxtOverlay>
          </ImgCont>
        </Link>
        <Link class="styled-link" to={"/music"}>
          <ImgCont>
            <ImgOverlay>
              <MusicImage />
            </ImgOverlay>
            <TxtOverlay>
              <h1>Music</h1>
            </TxtOverlay>
          </ImgCont>
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage
