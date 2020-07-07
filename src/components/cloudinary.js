import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Cloudinary = () => {
  const data = useStaticQuery(graphql`
    query CloudinaryImages {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
            tags
          }
        }
      }
    }
  `)

  const clImages = data.allCloudinaryMedia.edges

  return (
    <MainContainer>
      {clImages.map((image, index) => (
        <ImageContainer key={index}>
          <Image src={image.node.secure_url} />
        </ImageContainer>
      ))}
    </MainContainer>
  )
}

const MainContainer = styled.div`
  column-count: 2;
  -moz-column-count: 2;
  -webkit-column-count: 2;
  grid-gap: 0;
  line-height: 0;
`

const ImageContainer = styled.div`
  padding: 0;
  margin: 0;
  break-inside: avoid-column;
  height: auto !important;
`

const Image = styled.img`
  width: 100% !important;
  height: auto !important;
`

export default Cloudinary
