import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {
  const projects = data.contentfulDevProjects
  // project description
  const value = projects.description.content[0].content[0].value

  console.log(projects)
  return (
    <Layout>
      <SEO title={projects.projectName} description={value} />

      <div class="center">
        <div
          style={{
            textAlign: "center",
            borderBottom: "1px solid",
            marginBottom: "1em",
          }}
        >
          <div>
            <Link
              to={"/coding"}
              style={{ position: "absolute", top: "6.5em", right: "1em" }}
            >
              Back
            </Link>
          </div>
          <h2>{projects.projectName}</h2>
        </div>
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
        <div class="flex-content">
          <a
            href="https://trevorwatson.me/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div class="main-btn">Visit Site</div>
          </a>
          <Link to="/about" class="styled-link">
            <div class="main-btn">Hire Me</div>
          </Link>
        </div>
        <div class="img-container">
          {projects.screenshots.map(shots => (
            <Image src={shots.fluid.src} key={shots.fluid.src} />
          ))}
        </div>
        <div
          style={{
            textAlign: "center",
            maxWidth: "200px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></div>
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

const MainContainer = styled.div`
  margin: 5rem;
`

const Image = styled.img`
  width: 100%;
  margin: auto;
  align-content: center;
`

export default BlogPost
