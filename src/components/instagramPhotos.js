import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Instagram = () => (
  <StaticQuery
    query={graphql`
      query {
        allInstaNode(sort: { fields: likes, order: DESC }, limit: 12) {
          edges {
            node {
              id
              caption
              localFile {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                    originalImg
                  }
                }
                url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <MainContainer>
        {data.allInstaNode.edges.map((item, i) =>
          item.node.localFile ? (
            <ImageContainer key={i}>
              <a
                href={item.node.url}
                target="_blank"
                rel="noopener"
                tabIndex="0"
              >
                <Image fluid={item.node.localFile.childImageSharp.fluid} />
              </a>
            </ImageContainer>
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

export default Instagram
