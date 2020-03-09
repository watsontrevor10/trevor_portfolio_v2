import React, { useState, } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import MusicImage from "../components/musicImage"
import SEO from "../components/seo"
import CodingText from '../components/codingText'

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
          to='/coding'
          onMouseEnter={() => hoverImage()} onMouseLeave={() => hoverImage()}
        >
          <MusicImage />
          {toggleHover ?
            <div style={{ alignItems: 'center', position: 'absolute', top: 200, left: 0, right: 0, bottom: 0 }} >
              <CodingText />
            </div>
            : ''}
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
  position: relative;
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
  position: relative;s
  max-width: 90%;
  box-shadow: 1px 5px 5px grey;
  transition: 300ms ease-in-out;
`

export default IndexPage
