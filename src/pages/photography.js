import React from "react"
import Layout from "../components/layout"
import Photos from '../components/instagramPhotos'

const PhotoPage = ({ data }) => {

  return (
    <Layout>
      {/* <h1>Photography</h1> */}
      <div>
        <div style={{ textAlign: 'center', marginBottom: '2em', borderBottom: '1px solid' }}>
          <h1>Photography</h1>
        </div>
        <Photos />
      </div>
    </Layout>
  )
}

export default PhotoPage
