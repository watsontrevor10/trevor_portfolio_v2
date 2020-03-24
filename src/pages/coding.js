import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

// Images and assets
import seekr from "../images/seekr.png"
import tyqcolor from "../images/tyqcolor.png"

const CodingPage = () => {
  return (
    <Layout>
      <div style={{ marginBottom: "1em", borderBottom: "1px solid" }}>
        <h1 align="center">Web Development</h1>
      </div>
      <Container>
        <ProjectContainer>
          <ImageOverlay>
            <Img src={seekr} />
          </ImageOverlay>
          <TextOverlay>
            <Link
              to="/seekr"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>DevPoint Seekr</h3>
              <p>
                A web application for keeping track of your job applications
                during the job hunt. Me and a team of 6 colleagues built this as
                our "capstone" project while studying full-stack web development
                at Devpoint Labs
              </p>
              <Tools>#RubyonRails, #React, #SCSS, #ReCharts, #PostgreSQL</Tools>
            </Link>
          </TextOverlay>
        </ProjectContainer>
        <ProjectContainer>
          <ImageOverlay>
            <Img src={tyqcolor} />
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

const Img = styled.img`
  width: 100% !important;
  height: 430px;
  transition: transform .2s;
`

const Tools = styled.span`
  font-size: 12px;
`

const ImageOverlay = styled.div`
  position: relative;
  max-width: 595px;
  max-height: 430px;
  transition: 0.5s;
  opacity: 0.9;
  box-shadow: 1px 5px 5px black;
`

const TextOverlay = styled.div`
  position: absolute;
  max-width: 350px;
  text-align: center;
  opacity: 0;
  transition: 0.8s;
`

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  break-inside: avoid-column;

  Img:hover {
    transform: scale(1.03)
  }

  &:hover ${ImageOverlay} {
    opacity: 0.1;
  }


  &:hover ${TextOverlay} {
    opacity: 1;
  }
`

const Container = styled.div`
  column-count: 2;
  column-gap: 1em;
  row-gap: 1em;
  max-height: 432px;
  position: relative;
`

export default CodingPage
