/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const BlogPost = path.resolve("./src/templates/blogPost.js")

  const result = await graphql(`
    {
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
            body {
              body
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const BlogPosts = result.data.allContentfulBlogPost.edges

  BlogPosts.forEach(post => {
    createPage({
      path: `/post/${post.node.slug}`,
      component: BlogPost,
      context: {
        id: post.node.contentful_id,
        slug: post.node.slug,
      },
    })
  })
}

exports.createProjects = async ({ graphql, actions, reporter }) => {
  const { createProject } = actions

  const ProjectPage = path.resolve("./src/templates/projectPage.js")

  const result = await graphql(`
    {
      allContentfulDevProjects {
        edges {
          node {
            projectName
            contentful_id
            stack
            blurb
            mainImage {
              fluid(maxWidth: 500) {
                src
              }
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const ProjectPages = result.data.allContentfulDevProjects.edges

  ProjectPages.forEach(project => {
    createProject({
      path: `/project/${project.node.contentful_id}`,
      component: ProjectPage,
      context: {
        id: project.node.contentful_id,
        slug: project.node.blurb,
      },
    })
  })
}
