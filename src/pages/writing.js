import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Blog from "../components/blog"

const Writing = ({ data }) => {
  return (
    <Layout>
      <h1>Blog</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* <Blog /> */}
        {data.allWordpressPost.edges.map(post => (
          <div style={{ maxWidth: "600px", padding: `0 1.0875rem 1.45rem` }}>
            <h1 dangerouslySetInnerHTML={{ __html: post.node.title }} />
            <p>{post.node.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          author
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          excerpt
          content
          modified
        }
      }
    }
  }
`

export default Writing
