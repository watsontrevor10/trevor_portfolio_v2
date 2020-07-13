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
          {data.allContentfulBlogPost.edges.map(post => (
            <Blog>
              <Link
                to={"/post/" + post.node.slug}
                key={post.node.contentful_id}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                <ImgCont>
                  <img
                    src={post.node.heroImage.fluid.src}
                    alt={post.node.heroImage.description}
                    style={{ width: "100%", maxHeight: "280px" }}
                  />
                </ImgCont>
                <p>{post.node.publishDate}</p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.node.description.description,
                  }}
                />
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

const ImgCont = styled.div`
  width: 100%;
  margin-bottom: 0 !important;
  /* margin: auto; */
  align-content: center;
`

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          contentful_id
          title
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          description {
            description
          }
          heroImage {
            description
            fluid(cropFocus: CENTER) {
              src
            }
          }
        }
      }
    }
  }
`

export default Writing
