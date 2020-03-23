import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

// Images and assets
import seekr from "../images/seekr.png"
import tyqcolor from "../images/tyqcolor.png"

const CodingPage = () => {
  return (
    <Layout>
      <div style={{ marginBottom: '1em', borderBottom: '1px solid' }}>
        <h1 align="center">Web Development</h1>
      </div>
      <Container>
        <ProjectContainer>
          <ImageOverlay>
            <img src={seekr} />
          </ImageOverlay>
          <TextOverlay>
            <h3>DevPoint Seekr</h3>
            <p>
              A web application for keeping track of your job applications
              during the job hunt. Me and a team of 6 colleagues built this as
              our "capstone" project while studying full-stack web development
              at Devpoint Labs
            </p>
            <Tools>#RubyonRails, #React, #SCSS, #ReCharts, #PostgreSQL</Tools>
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
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>Ty Q. Color</h3>
              <p style={{ fontSize: "16px" }}>
                A simple website built for Ty Watson, who does coloring books of
                cool trucks. He wanted something simple that he could use to put
                all of his coloring books in one place and market to more
                people.
              </p>
              <Tools>#Gatsby, #React, #StyledComponents</Tools>
            </a>
          </TextOverlay>
        </ProjectContainer>
      </Container>
    </Layout>
  )
}

const Tools = styled.span`
  margin: 0.2rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 12px;
`

const ImageOverlay = styled.div`
  position: relative;
  transition: 0.5s;
  opacity: .9;
`

const TextOverlay = styled.div`
  position: absolute;
  max-width: 350px;
  text-align: center;
  opacity: 0;
  transition: 0.8s;
`

// const SkillsContainer = styled.div`
//   max-width: 200px;
//   margin: 1em;
//   display: flex;
//   align-items: center;
//   align-content: center;
// `

const ProjectContainer = styled.div`
  max-width: 400px;
  display: flex;
  margin: 0.3em;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover ${ImageOverlay} {
    opacity: 0.1;
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
