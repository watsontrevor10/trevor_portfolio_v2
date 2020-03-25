import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MusicPage = () => {
  return (
    <Layout>
      <SEO
        title="music"
        description="Music of Trevor Watson, bass, jazz improv, jazz bassist"
      />
      <div
        style={{
          textAlign: "center",
          marginBottom: "2em",
          borderBottom: "1px solid",
        }}
      >
        <h1>Music</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <p>Coming Soon ... </p>
      </div>
    </Layout>
  )
}

export default MusicPage
