require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Rahul Rangnekar`,
    description: `Rahul Rangnekar's blog on making yourself a better software engineer and professional.`,
    author: `@rahrang`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_API_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/util/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Engineering Blog | Rahul Rangnekar`,
        short_name: `Blog | Rahul Rangnekar`,
        start_url: `/`,
        background_color: `#FAFAED`,
        theme_color: `#4B75B9`,
        display: `minimal-ui`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
