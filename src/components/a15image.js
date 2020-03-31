import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const A15Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "a15hafb.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{ width: "100% !important" }}
    />
  )
}

export default A15Image
