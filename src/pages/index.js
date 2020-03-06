import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import MusicImage from "../components/musicImage"
import SEO from "../components/seo"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <ImageWrapper>
        <StyledLink to='/coding'>
          <MusicImage />
        </StyledLink>
        <StyledLink to='music'>
          <MusicImage />
        </StyledLink>
        <StyledLink to='photography'>
          <MusicImage />
        </StyledLink>
        <StyledLink to='writing'>
          <MusicImage />
        </StyledLink>
      </ImageWrapper>
    </Layout>
  )
}

const ImageWrapper = styled.div`
  display: Flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 3em;
  .gatsby-image-wrapper {
    width: 500px;
    height: auto;
  }
`

const StyledLink = styled(Link)`
  margin: 1em;
  padding: 1em;
  max-width: 90%;
`

export default IndexPage
