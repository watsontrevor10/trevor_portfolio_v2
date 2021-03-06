import React from "react"
import Layout from "../components/layout"
// import Photos from "../components/instagramPhotos"
import SEO from "../components/seo"
import Cloudinary from "../components/cloudinary"

const PhotoPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Photography" />
      <div>
        <div class="callout">
          <h2 class="callout-txt">Photography</h2>
        </div>
        <Cloudinary />
      </div>
    </Layout>
  )
}

export default PhotoPage
