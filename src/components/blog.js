import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Blog = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost {
          edges {
            node {
              author
              slug
              title
              date
              excerpt
              content
              modified
            }
          }
        }
      }
    `}
    render={data => (
      <MainContainer>
        {data.allWordpressPost.edges.map((item, i) =>
          item.node.localFile ? (
            <div key={i}>
              <h1>{item.node.title}</h1>
              <p>{item.node.excerpt}</p>
              {/* <div>{fluid = item.placeholderImage.childImageSharp.fluid}</div> */}
            </div>
          ) : (
            <div></div>
          )
        )}
      </MainContainer>
    )}
  />
)

const MainContainer = styled.div`
  line-height: 0;
  column-count: 3;
  column-gap: 0px;
`

const ImageContainer = styled.div`
  padding: 0px;
  break-inside: avoid-column;
`

const Image = styled(Img)`
  width: 100% !important;
`

export default Blog
