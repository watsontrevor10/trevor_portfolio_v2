require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Trevor Watson`,
    description: `Portfolio website of Trevor Watson.  Web Developer, Musician, Photographer, Writer.`,
    author: `Trevor Watson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `chivsjawnphoto`,
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        type: `upload`,
        prefix: `portfolio/`,
        tags: true,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "chivsjawn.wordpress.com",
        protocol: "https",
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: true,
        useACF: false,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 20,
        verboseOutput: false,
        auth: {
          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: "68400",
          wpcom_user: "watsontrevor10@gmail.com",
          wpcom_pass: process.env.WORDPRESS_PASSWORD,
        },
        searchAndReplaceContentUrls: {
          sourceUrl: "https://chivsjawn.wordpress.com",
          replacementUrl: "https://localhost:8000",
        },

        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          // "**/media",
          "**/tags",
          "**/taxonomies",
          // "**/users",
        ],
        keepMediaSizes: false,
        excludedRoutes: [],
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
