import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const CodingPage = ({ data }) => {
  console.log(data)

  const content = data.allContentfulDevProjects.edges

  return (
    <Layout>
      <div class="callout">
        <h2 class="callout-txt">Projects</h2>
      </div>
      <Container>
        {content.map(project => (
          <ProjectContainer key={project.node.contentful_id}>
            <ImageOverlay>
              <Img
                src={project.node.mainImage.fluid.src}
                alt={project.node.projectName}
              />
            </ImageOverlay>
            <TextOverlay>
              <StyledLink to={"/project/" + project.node.slug}>
                <h3>{project.node.projectName}</h3>
                <P>{project.node.blurb}</P>
              </StyledLink>
            </TextOverlay>
          </ProjectContainer>
        ))}
      </Container>
    </Layout>
  )
}

// Query grabbing projects data from Contentful
export const query = graphql`
  query {
    allContentfulDevProjects {
      edges {
        node {
          projectName
          slug
          contentful_id
          stack
          blurb
          mainImage {
            fluid(maxWidth: 900) {
              src
            }
          }
        }
      }
    }
  }
`

// Styles
const P = styled.p`
  font-size: 16px;
`

const Img = styled.img`
  width: 100% !important;
  height: auto;
  transition: transform 0.2s linear;
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
