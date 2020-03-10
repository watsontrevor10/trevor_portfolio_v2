import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Photos from '../components/instagramPhotos'

const PhotoPage = ({ data }) => {
  // const [photoData, setPhotoData] = useState([])

  const photoDisplay = () => {
    data.allInstaNode.edges.map((photo, i) => {
      console.log(photo.node.localFile.childImageSharp.fluid)
      return (
        <div key={i}>
          <Img fluid={photo.node.localFile.childImageSharp.fluid} />
          <p>{photo.node.localFile.childImageSharp.fluid}</p>
          <p>{photo}</p>
        </div>
      )
    })
  }

  return (
    <Layout>
      <h1>Photography</h1>
      <div>
        <Photos />
      </div>
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
              fluid(maxWidth: 5, jpegQuality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default PhotoPage
