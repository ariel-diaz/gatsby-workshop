require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'ARI',
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-source-github-api`,
      options: {
        // token: el que generamos recién, requerido por la API de GitHub
        token: process.env.GATSBY_GH_KEY,
  
        // GraphQLquery: con esta query, traemos a nuestro backend lo que
        // queremos tener disponible para mostrar en nuestro frontend
        graphQLQuery: `query {
          user (login:"ariel-diaz"){
          repositories(first:50,orderBy:{field:STARGAZERS, direction:DESC},privacy:PUBLIC){
            edges {
              node {
                id
                name
                description
                isPrivate
                url
                }
              }
            }
          }
        }`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
