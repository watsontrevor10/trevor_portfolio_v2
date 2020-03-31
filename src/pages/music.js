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
      <div style={{ display: 'flex', flexFlow: 'wrap', height: '460px' }}>
        <iframe
          width="50%"
          height="100%"
          src="https://www.youtube.com/embed/QiufgqQ9mCQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="50%"
          height="100%"
          src="https://www.youtube.com/embed/oZHTrLui76c"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div style={{ textAlign: "center" }}>
        <p>More Coming Soon . . . </p>
      </div>
    </Layout>
  )
}

export default MusicPage
