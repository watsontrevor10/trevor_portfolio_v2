import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {
  const projects = data.contentfulDevProjects
  // project description
  const value = projects.description.content[0].content[0].value

  // component looks for website and github and displays different depending on what is present in Contentful
  const SiteButtons = () => {
    const website = projects.website
    const github = projects.github

    if (website && github) {
      return (
        <div class="flex-content">
          <ButtonLink href={website} target="_blank" rel="noopener noreferrer">
            <div class="main-btn">Visit Site</div>
          </ButtonLink>
          <ButtonLink href={github} target="_blank" rel="noopener noreferrer">
            <div class="main-btn">Github</div>
          </ButtonLink>
          <Link to="/about" class="styled-link">
            <div class="main-btn">Hire Me</div>
          </Link>
        </div>
      )
    } else if (github === null && website) {
      return (
        <div class="flex-content">
          <ButtonLink href={website} target="_blank" rel="noopener noreferrer">
            <div class="main-btn">Visit Site</div>
          </ButtonLink>
          <Link to="/about" class="styled-link">
            <div class="main-btn">Hire Me</div>
          </Link>
        </div>
      )
    } else if (website === null && github) {
      return (
        <div class="flex-content">
          <ButtonLink href={github} target="_blank" rel="noopener noreferrer">
            <div class="main-btn">Github</div>
          </ButtonLink>
          <Link to="/about" class="styled-link">
            <div class="main-btn">Hire Me</div>
          </Link>
        </div>
      )
    } else {
      return (
        <div class="flex-content">
          <Link to="/about" class="styled-link">
            <div class="main-btn">Hire Me</div>
          </Link>
        </div>
      )
    }
  }

  // Main page
  return (
    <Layout>
      <SEO title={projects.projectName} description={value} />
      <div class="center">
        <TextContainer>
          <div>
            {/* Link to navigate to previous page */}
            <Link
              to={"/coding"}
              style={{ position: "absolute", top: "6.5em", right: "1em" }}
            >
              Back
            </Link>
          </div>
          <h2>{projects.projectName}</h2>
        </TextContainer>
        <div class="prj-text-cont">
          {/* Project Description */}
          <p>{value}</p>
          {/* Project development stack */}
          {projects.stack.map(stack => (
            <span>
              <strong>#{stack}</strong>{" "}
            </span>
          ))}
        </div>
        {/* Links to website, github and Hire Me page */}
        {/* conditional logic in case no website or github available on contentful */}
        <SiteButtons />
        <div class="img-container">
          {projects.screenshots.map(shots => (
            <Image src={shots.fluid.src} key={shots.fluid.src} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulDevProjects(contentful_id: { eq: $id }) {
      contentful_id
      projectName
      stack
      website
      github
      screenshots {
        fluid(maxWidth: 1000) {
          src
        }
      }
      description {
        content {
          content {
            value
          }
        }
      }
    }
  }
`

const Image = styled.img`
  width: 100%;
  margin: auto;
  align-content: center;
`
const TextContainer = styled.div`
  text-align: center;
  border-bottom: 1px solid;
  margin-bottom: 1em;
`

const ButtonLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export default BlogPost
