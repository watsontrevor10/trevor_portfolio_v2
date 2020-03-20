import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

// Images and assets
import htmlLogo from "../images/html-logo.png"
import cssLogo from "../images/css3-logo.png"
import seekr from "../images/seekr.png"
import gatsbyIcon from "../images/gatsby-icon.png"
import railsIcon from "../images/rails.png"
import reactIcon from "../images/react.png"
import postgresLogo from "../images/postgres.png"
import tyqcolor from "../images/tyqcolor.png"

const CodingPage = () => {
  return (
    <Layout>
      <h1 align="center">Coding</h1>

      <div styles={{}}>
        <h3 align="center">Projects</h3>
      </div>
      <Container>
        <ProjectContainer>
          <ImageOverlay>
            <img src={seekr} />
          </ImageOverlay>
          <TextOverlay>
            <h3>DevPoint Seekr</h3>
          </TextOverlay>
        </ProjectContainer>
        <ProjectContainer>
          <ImageOverlay>
            <img src={tyqcolor} />
          </ImageOverlay>
          <TextOverlay>
            <a
              href="https://tyqcolor.com/"
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h3>Ty Q. Color</h3>
              <p style={{ fontSize: "16px" }}>
                I built this website for my uncle, who does coloring books of
                cool trucks. He wanted something simple that he could use to put
                all of his coloring books in one place and market to more
                people.
              </p>
              <Tools>#Gatsby, #React, #StyledComponents</Tools>
            </a>
          </TextOverlay>
        </ProjectContainer>
      </Container>
      <div>
        <h3 align="center">Skills and Platforms</h3>
      </div>
      <Container>
        <SkillsContainer>
          <img src={railsIcon} />
        </SkillsContainer>
        <SkillsContainer>
          <img src={reactIcon} />
        </SkillsContainer>
        <SkillsContainer>
          <img src={gatsbyIcon} />
        </SkillsContainer>
        <SkillsContainer>
          <img src={htmlLogo} />
        </SkillsContainer>
        <SkillsContainer>
          <img src={cssLogo} />
        </SkillsContainer>
        <SkillsContainer>
          <img src={postgresLogo} />
        </SkillsContainer>
      </Container>
    </Layout>
  )
}

const Tools = styled.span`
  margin: 0.2rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 12px;
  background-color: #eee;
`

const ImageOverlay = styled.div`
  position: relative;
  transition: 0.5s;
`

const TextOverlay = styled.div`
  position: absolute;
  max-width: 350px;
  text-align: center;
  opacity: 0;
  transition: 0.5s;
`

const SkillsContainer = styled.div`
  max-width: 200px;
  margin: 1em;
  display: flex;
  align-items: center;
  align-content: center;
`

const ProjectContainer = styled.div`
  max-width: 400px;
  display: flex;
  margin: 1em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  box-shadow: 1px 1px 0.5px grey;

  &:hover ${ImageOverlay} {
    opacity: 0.2;
  }

  &:hover ${TextOverlay} {
    opacity: 1;
  }
`

const Container = styled.div`
  display: Flex;
  flex-direction: row-responsive;
  flex-flow: for wrap;
  position: relative;
`

export default CodingPage
