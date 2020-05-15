import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

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
      <ImageContainer>
        {clImages.map((image, index) => (
          <Image src={image.node.secure_url} key={index} />
        ))}
      </ImageContainer>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  column-count: 2;
  column-gap: 0px;
  row-gap: 0px;
  line-height: 0;
`

const ImageContainer = styled.div`
  padding: 0px;
  break-inside: avoid-column;
`

const Image = styled.img`
  width: 100% !important;
`

export default Cloudinary
