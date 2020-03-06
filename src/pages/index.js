import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import MusicImage from "../components/musicImage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ImageWrapper>
        <StyledMusicImage />
        <StyledMusicImage />
        <StyledMusicImage />
        <StyledMusicImage />
    </ImageWrapper>
  </Layout>
)

const ImageWrapper = styled.div`
  display: Flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 6em;
  .gatsby-image-wrapper {
    width: 300px;
  }
`

const StyledMusicImage = styled(MusicImage)`
  margin: 1em;
  padding: 2px;
  
`

export default IndexPage
