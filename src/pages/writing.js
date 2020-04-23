import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Writing = ({ data }) => {
  return (
    <Layout>
      <SEO title="Writing" />
      <div class="center">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "4rem",
          }}
        >
          {/* Blog Posts */}
          {data.allWordpressPost.edges.map(post => (
            <Link
              to={"/post/" + post.node.slug}
              key={post.node.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div style={{ maxWidth: "500px", padding: `0 .5rem 1rem .5rem` }}>
                <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                <p>{post.node.date}</p>
                <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWordpressPost(limit: 12) {
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
