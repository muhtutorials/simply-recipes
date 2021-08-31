/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: 'Simply Recipes',
        description: 'Nice and clean recipes site',
        author: 'Igor',
        person: { name: 'Igor', age: 34 },
        simpleData: ['One', 'Two'],
        complexData: [
            { name: 'John', age: 33 },
            { name: 'Sarah', age: 55 },
            { name: 'Ripley', age: 28 }
        ]
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images
        `gatsby-plugin-react-helmet`,
        // enable access to images through queries (any path can be specified in the project to access any files)
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                // settings - API keys
                spaceId: `o7n02bubdcyc`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.CONTENTFUL_API_KEY,  // Content Delivery API - access token
            },
        },
        {
            resolve: `gatsby-plugin-webfonts`,
            options: {
                fonts: {
                    google: [
                        {
                            family: "Montserrat",
                            variants: ["400"],
                        },
                        {
                            family: "Inconsolata",
                            variants: ["400", "500", "600", "700"],
                        },
                    ],
                },
            },
        },
    ],
}
