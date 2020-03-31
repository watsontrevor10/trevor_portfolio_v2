import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const MusicPage = () => {
  return (
    <Layout>
      <SEO
        title="music"
        description="Music of Trevor Watson, bass, jazz improv, jazz bassist"
      />
      {/* <div
        style={{
          textAlign: "center",
          marginBottom: "2em",
          borderBottom: "1px solid",
        }}
      >
        <h1>Music</h1>
      </div> */}
      <div
        style={{
          display: "flex",
          flexFlow: "wrap",
          justifyContent: "center",
          columnGap: "1rem",
          height: "20rem",
          width: "100%",
          paddingTop: "2em",
        }}
      >
        <iframe
          title="CoronaCollab #1"
          width="550rem"
          height="100%"
          src="https://www.youtube.com/embed/QiufgqQ9mCQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          title="Recorda-me"
          width="550rem"
          height="100%"
          src="https://www.youtube.com/embed/oZHTrLui76c"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Layout>
  )
}

export default MusicPage
