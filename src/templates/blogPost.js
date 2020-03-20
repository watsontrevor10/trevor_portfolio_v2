import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPost.title}
      description={data.wordpressPost.excerpt}
    />
    <MainContainer>
      <div style={{ paddingBottom: "1em", float: "right" }}>
        <Link to="/writing">Back</Link>
      </div>
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: data.wordpressPost.title }} />
        <p>{data.wordpressPost.date}</p>
        <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexFlow: "wrap",
        }}
      >
        {data.wordpressPost.categories.map(cat => (
          <span
            style={{
              margin: ".3rem .5rem",
              borderRadius: ".3rem",
              fontSize: "14px",
              backgroundColor: "#eee",
            }}
          >
            #{cat.name}
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
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      author
      date(formatString: "MMMM DD, YYYY")
      content
      title
      tags {
        name
      }
      categories {
        name
      }
    }
  }
`

const MainContainer = styled.div`
  /* max-width: 960px; */
  margin: 5rem;
`

// const ImageContainer = styled.div`
//   padding: 0px;
//   break-inside: avoid-column;
// `

// const Image = styled(Img)`
//   width: 100% !important;
// `

export default BlogPost
