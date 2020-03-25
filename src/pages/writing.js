import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from '../components/seo'

const Writing = ({ data }) => {
  return (
    <Layout>
      <SEO title="Writing" />
      <div
        style={{
          textAlign: "center",
          marginBottom: "2em",
          borderBottom: "1px solid",
        }}
      >
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
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={{ maxWidth: "500px", padding: `0 1rem 1rem` }}>
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
