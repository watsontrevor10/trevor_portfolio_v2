import React from "react"
import Layout from "../components/layout"
import Photos from '../components/instagramPhotos'
import SEO from '../components/seo'

const PhotoPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Photography" />
      <div>
        <div style={{ textAlign: 'center', marginBottom: '2em', borderBottom: '1px solid' }}>
          <h2>Photography</h2>
        </div>
        <Photos />
      </div>
    </Layout>
  )
}

export default PhotoPage
