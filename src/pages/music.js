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
          <p>
            Three Sharp was formed as pianist Ammon Doman, drummer Matt Tippetts
            reunited after many years. We had each performed with one another in
            college, but never in the same group. We decided to jam one day long
            after we had all graduated, and we have been a group ever since.
          </p>
        </div>
        <a
          href="https://www.threesharp.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div class="main-btn">Visit Site</div>
        </a>
      </ProjectContainer>
      <ProjectContainer>
        <div style={{ textAlign: "center" }}>
          <h2>23rd Army Band</h2>
        </div>
        <div>
          <p>
            I have been performing professionally for the 23rd Army Band for
            over 10 years. I am currently the Principle Bassist.
          </p>
          <p>
            I perform a wide variety of roles in the unit; bassist and backup
            singer for the rock band Article 15, leader and bassist for the jazz
            combo Sensational Seven, and bassist and percussionist for the
            concert band. I also perform other duties such as social media
            promotion, mentoring fellow soldiers, logistics, and event
            coordination.
          </p>
        </div>
        <a
          href="https://www.facebook.com/23rdarmyband"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div class="main-btn">Visit Site</div>
        </a>
      </ProjectContainer>
    </Layout>
  )
}

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
  padding: 2rem 0 2rem 0;
  margin: 0 1rem 0 1rem;
  border-top: 1px solid;
`

export default MusicPage
