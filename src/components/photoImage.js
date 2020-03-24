import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MusicImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bnw.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      // style={{ width: "550px", margin: "auto" }}
    />
  )
}

export default MusicImage
