import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
// import Blog from "../components/blog"

const Writing = ({ data }) => {
  return (
    <Layout>
      <div style={{ textAlign: "center", marginBottom: '3em', borderBottom: '1px solid' }}>
        <h1>Blog</h1>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Blog Posts */}
        {data.allWordpressPost.edges.map(post => (
          <Link
            to={"/post/" + post.node.slug}
            key={post.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div style={{ maxWidth: "600px", padding: `0 2rem 1.45rem` }}>
              <h1 dangerouslySetInnerHTML={{ __html: post.node.title }} />
              <p>{post.node.date}</p>
              <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
          </Link>
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
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          excerpt
          content
        }
      }
    }
  }
`

export default Writing
