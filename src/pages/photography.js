import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
// import Photos from '../components/instagramPhotos'

const PhotoPage = ({ data }) => {
console.log(data)
console.log(data.allInstaNode.edges)


    const photos = (data) => {
        data.allInstaNode.edges.map((photo, i) => {
            return (
                <div key={i}>
                    <Img fluid={photo.node.localFile.childImagesharp.fluid} />
                </div>
            )
        })
    }

    return (
        <Layout>
            <h1>Photography</h1>
            {photos}
        </Layout>
    )
}


export const query = graphql`
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


export default PhotoPage