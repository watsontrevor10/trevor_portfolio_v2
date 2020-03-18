import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

// Images and assets
import htmlLogo from "../images/html-logo.png"
import cssLogo from "../images/css3-logo.png"
import seekr from "../images/dpl-seeker.png"
import gatsbyIcon from "../images/gatsby-icon.png"
import railsIcon from "../images/rails.png"
import reactIcon from "../images/react.png"
import postgresLogo from "../images/postgres.png"

const CodingPage = () => {
  return (
    <Layout>
      <h1 align="center">Coding</h1>

      <div styles={{}}>
        <h3 align="center">Projects</h3>
      </div>
      <Container>
        <ProjectImage>
          <div style={{ margin: "1em" }}>
            <h3>DevPoint Seekr</h3>
          </div>
          <img src={seekr} />
        </ProjectImage>
      </Container>
      <div>
        <h3 align="center">Skills and Platforms</h3>
      </div>
      <Container>
        <SKillsImage>
          <img src={railsIcon} />
        </SKillsImage>
        <SKillsImage>
          <img src={reactIcon} />
        </SKillsImage>
        <SKillsImage>
          <img src={gatsbyIcon} />
        </SKillsImage>
        <SKillsImage>
          <img src={htmlLogo} />
        </SKillsImage>
        <SKillsImage>
          <img src={cssLogo} />
        </SKillsImage>
        <SKillsImage>
          <img src={postgresLogo} />
        </SKillsImage>
      </Container>
    </Layout>
  )
}

const SKillsImage = styled.div`
  max-width: 200px;
  margin: 1em;
  /* border: 2px solid black; */
  display: flex;
  align-items: center;
  align-content: center;
`

const ProjectImage = styled.div`
  max-width: 500px;
  margin: 1em;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  box-shadow: 3px 2px 1px grey;
`

const Container = styled.div`
  display: Flex;
  flex-direction: row-responsive;
  flex-flow: for wrap;
  position: relative;
`

export default CodingPage
