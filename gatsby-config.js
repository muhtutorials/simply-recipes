/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

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
    ],
}
