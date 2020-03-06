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
        <MusicImage />
        <MusicImage />
        <MusicImage />
        <MusicImage />
    </ImageWrapper>
  </Layout>
)

const ImageWrapper = styled.div`
  display: Flex;
  flex-direction: row;
  justify-content: space-between;
  .gatsby-image-wrapper {
    width: 300px;
  }
`

export default IndexPage
