import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

// Images and assets
import seekr from "../images/seekr.png"
import tyqcolor from "../images/tyqcolor.png"
import trevormain from "../images/trevor-main-page.png"

const CodingPage = () => {
  return (
    <Layout>
      <div class="callout">
        <h2 class="callout-txt">Projects</h2>
      </div>
      <Container>
        <ProjectContainer>
          <ImageOverlay>
            <Img src={seekr} alt="DevPoint Seekr" />
          </ImageOverlay>
          <TextOverlay>
            <StyledLink to="/seekr">
              <h3>DevPoint Seekr</h3>
              <P>
                A web application for keeping track of your job applications
                during the job hunt. Me and a team of 6 colleagues built this as
                our "capstone" project while studying full-stack web development
                at Devpoint Labs
              </P>
              <Tools>#RubyonRails, #Reactjs, #SCSS, #ReCharts, #PostgreSQL</Tools>
            </StyledLink>
          </TextOverlay>
        </ProjectContainer>
        <ProjectContainer>
          <ImageOverlay>
            <Img src={tyqcolor} alt="Ty Q. Color" />
          </ImageOverlay>
          <TextOverlay>
            <StyledLink to={"/tyqcolor"}>
              <h3>Ty Q. Color</h3>
              <P>
                A simple website built for Ty Watson, who does coloring books of
                cool trucks. He wanted something simple that he could use to put
                all of his coloring books in one place and market to more
                people.
              </P>
              <Tools>#Gatsbyjs, #Reactjs, #StyledComponents</Tools>
            </StyledLink>
          </TextOverlay>
        </ProjectContainer>
        <ProjectContainer>
          <ImageOverlay>
            <Img src={trevormain} alt="Trevor Watson main page" />
          </ImageOverlay>
          <TextOverlay>
            <StyledLink to={"/trevor"}>
              <h3>Trevor Watson</h3>
              <P>
                This site is a representation of me as a person, not just a web
                developer. We are more than our jobs, and I hope this site will
                continue to show many facets of my life.
              </P>
              <Tools>
                #Gatsbyjs, #Reactjs, #StyledComponents, #GraphQL, #InstagramAPI,
                #WordpressAPI, #HeadlessBlog, #CloudinaryAPI
              </Tools>
            </StyledLink>
          </TextOverlay>
        </ProjectContainer>
      </Container>
    </Layout>
  )
}

const P = styled.p`
  font-size: 16px;
`

const Img = styled.img`
  width: 100% !important;
  height: auto;
  transition: transform 0.2s linear;
`

const Tools = styled.span`
  font-size: 12px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const ImageOverlay = styled.div`
  position: relative;
  max-width: 400px;
  max-height: 290px;
  overflow: hidden;
  transition: 0.8s;
  opacity: 0.9;
  box-shadow: 1px 5px 5px black;
`

const TextOverlay = styled.div`
  position: absolute;
  max-width: 350px;
  max-height: 350px;
  text-align: center;
  opacity: 0;
  transition: 0.8s;
`

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  &:hover ${Img} {
    transform: scale(1.03);
  }

  &:hover ${ImageOverlay} {
    opacity: 0.1;
  }

  &:hover ${TextOverlay} {
    opacity: 1;
  }
`

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  column-gap: 0;
  row-gap: 0;
  flex-direction: row;
  justify-content: center;
`

export default CodingPage
