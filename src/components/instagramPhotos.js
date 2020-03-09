import React, { useState, useEffect } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Instagram = () => {
  const [photoData, setPhotoData] = useState('')

  // <StaticQuery
  //   query={graphql`
    const query = graphql`
    query {
        allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 12) {
    edges {
      node {
        id
        caption
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}`
  

const photos = ({ data }) => {
  data.allInstaNode.edges.map((photo, i) => {
    return (
      <div key={i}>
        <Img fluid={photo.node.fluid} />
      </div>
    )
  })
}


return (
  <div>
    {photos}
  </div>
)
}


export default Instagram