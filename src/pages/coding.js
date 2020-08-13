import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

// Images and assets
import seekr from "../images/seekr.png"
import tyqcolor from "../images/tyqcolor.png"
import trevormain from "../images/trevor-main-page.png"
import rpsMain from "../images/rps-main.png"

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
          <ProjectContainer>
            <ImageOverlay>
              <Img
                src={project.node.mainImage.fluid.src}
                alt={project.node.projectName}
              />
            </ImageOverlay>
            <TextOverlay>
              <StyledLink to="/seekr">
                <h3>DevPoint Seekr</h3>
                <P>
                  {console.log(project.node.description.content.content)}
                  {project.node.description.content.content}
                </P>
                #
                {project.node.stack.map(stacks => (
                  <Tools>#{stacks} | </Tools>
                ))}
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
          contentful_id
          stack
          description {
            content {
              content {
                value
              }
            }
          }
          mainImage {
            fluid(maxWidth: 500) {
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
