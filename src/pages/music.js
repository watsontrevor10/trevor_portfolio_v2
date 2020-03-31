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
      <IframeContainer>
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
      </IframeContainer>
      <ProjectContainer>
        <div style={{ textAlign: "center" }}>
          <h2>3# Trio</h2>
        </div>
        <div>
          <p>
            Three Sharp is a jazz trio located in beautiful Utah Valley. Since
            2015, the trio has been active around the state of Utah performing
            for weddings, private parties, and corporate events. Playing mostly
            reimagined jazz standards and familiar tunes, the trio creates a
            classy atmosphere for any occasion.
          </p>
        </div>
        <a
          href="https://www.threesharp.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Visit>Visit Site</Visit>
        </a>
      </ProjectContainer>
    </Layout>
  )
}

const Visit = styled.div`
  border: 1px solid;
  max-width: 10rem;
  text-align: center;
  margin: auto;
`

const IframeContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  column-gap: 1rem;
  height: 20rem;
  width: 100%;
  padding: 2rem 1rem 2.5rem 1rem;
`

const ProjectContainer = styled.div`
  padding: 2rem 1.5rem 0 1.5rem;
  border-top: 1px solid;
`
export default MusicPage
