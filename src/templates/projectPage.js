import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }) => (
  <Layout>
    <SEO
      title={data.contentfulBlogPost.title}
      description={data.contentfulBlogPost.description.description}
    />
    {console.log(data)}
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
          <h2>Trevor Watson Portfolio</h2>
        </div>
        <div class="prj-text-cont">
          <p>
            This is version 2 of my portfolio page. I built this as a way to
            show the diversity of interests I have through not only the design
            of the site but the content as well.
          </p>
          <p>
            I wanted to expand my knowledge of GraphQL, custom CSS, API's and
            give my portfolio a more polished and professional look. This site
            represents not just my expanding knowledge of coding and design, but
            the variety of interests that I have, and gives me one place to
            showcase those interests.
          </p>
          <p>
            Currently the project uses Contentful for the blog, Cloudinary for
            the photo gallery. I'm using a mix of CSS and Styled Components for
            styling. I plan on implementing a connection with YouTube to pull in
            video playlists for both music and development projects I'm working
            on.
          </p>
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
          <Img src={trevormain} alt="Trevor Watson main page" />
          <Img src={trevorwiting} alt="Trevor Watson writing blog page" />
          <Img src={trevorcoding} alt="Trevor Watson web devlepment projects" />
          <Img src={seekr} alt="DevPoint Seekr full-stack job search tool" />
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
      <hr />
    <MainContainer>
      <div style={{ paddingBottom: "1em", float: "right" }}>
        <Link to="/writing">Back</Link>
      </div>
      <div>
        <h1
          dangerouslySetInnerHTML={{ __html: data.contentfulBlogPost.title }}
        />
      </div>
      <Image>
        <img
          src={data.contentfulBlogPost.heroImage.fluid.src}
          alt={data.contentfulBlogPost.heroImage.description}
        />
      </Image>
      <div>
        <p>{data.contentfulBlogPost.publishDate}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexFlow: "wrap",
        }}
      >
        {data.contentfulBlogPost.tags.map(cat => (
          <span
            style={{
              margin: ".3rem .5rem",
              borderRadius: ".3rem",
              fontSize: "14px",
            }}
          >
            #{cat}
          </span>
        ))}
      </div>
      <div style={{ float: "right" }}>
        <Link to="/writing">Back</Link>
      </div>
    </MainContainer>
  </Layout>
)

export const query = graphql`
  query($id: String!) {
    contentfulDevProjects(contentful_id: {eq: $id}) {
      contentful_id
      projectName
      stack
      screenshots {
        fluid(maxWidth: 400) {
          src
        }
      }
      description {
        description
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

const Image = styled.div`
  width: 70%;
  margin: auto;
  align-content: center;
`

export default BlogPost
