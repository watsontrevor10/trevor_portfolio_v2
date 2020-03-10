import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Instagram = () => (
  <StaticQuery
    query={graphql`
      query {
        allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 12) {
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
      <div>
        {data.allInstaNode.edges.map((item, i) =>
          item.node.localFile ? (
            <div key={i}>
              <a
                href={item.node.url}
                target='_blank'
                rel='noopener'
                tabIndex='0'
              >
                <Img fluid={item.node.localFile.childImageSharp.fluid} />
              </a>
            </div>
          ) : (
            <div></div>
          )
        )}
      </div>
    )}
  />
)

export default Instagram
