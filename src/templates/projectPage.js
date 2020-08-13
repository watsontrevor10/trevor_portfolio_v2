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
      <SEO
        title={projects.projectName}
        description={value}
      />
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
          <p>{value}</p>
          <span>
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #GatsbyJS
            </a>
            {", "}
            <a
              href="https://www.postgresql.org/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #ReactJS
            </a>
            {", "}
            <a
              href="https://styled-components.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #StyledComponents
            </a>
            {", "}
            <a
              href="https://graphql.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #GraphQL
            </a>
            {", "}
            <a
              href="https://www.contentful.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #Contentful
            </a>
            {", "}
            <a
              href="https://cloudinary.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #Cloudinary
            </a>
          </span>
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
            <Image src={shots.fluid.src} />
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
        fluid(maxWidth: 400) {
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
