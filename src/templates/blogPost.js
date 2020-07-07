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
    contentfulBlogPost(contentful_id: { eq: $id }) {
      title
      slug
      tags
      publishDate(formatString: "MMMM DD, YYYY")
      body {
        childMarkdownRemark {
          html
        }
      }
      description {
        description
      }
      contentful_id
      heroImage {
        description
        fluid {
          src
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
