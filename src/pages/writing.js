import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Writing = ({ data }) => {
  return (
    <Layout>
      <SEO title="Writing" />
      <div class="center">
        <BlogCont>
          {/* Blog Posts */}
          {data.allWordpressPost.edges.map(post => (
            <Blog>
              <Link
                to={"/post/" + post.node.slug}
                key={post.node.id}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                <p>{post.node.date}</p>
                <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              </Link>
            </Blog>
          ))}
        </BlogCont>
      </div>
    </Layout>
  )
}

const BlogCont = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  flex-flow: row wrap;
`

const Blog = styled.div`
  max-width: 475px;
  padding: 1em;
`

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
