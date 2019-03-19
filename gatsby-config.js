module.exports = {
  siteMetadata: {
    title: `React Denver`,
    description: `Website for React Denver Meetup`,
    author: `@reactdenver`,
    menuLinks: [
      {
        name: "Code of Conduct",
        link: "/conduct",
      },
      {
        name: "Events",
        link: "/events",
      },
      {
        name: "Past Events",
        link: "/past-events",
      },
      {
        name: "Sponsorship",
        link: "/sponsorship",
      },
      {
        name: "FAQ",
        link: "/faqs",
      },
      {
        name: "Newsletter",
        link: "/newsletter",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/markdown`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
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
        icon: `src/images/apple-touch-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-meetup`,
      options: {
        key: process.env.MEETUP_API_KEY,
        groupUrlName: "ReactDenver",
        // Optional parameters for retrieving Events, see full documentation at
        // https://www.meetup.com/meetup_api/docs/:urlname/events/?uri=%2Fmeetup_api%2Fdocs%2F%3Aurlname%2Fevents%2F#list
        status: "upcoming,past",
        desc: "true",
        page: 50,
      },
    },
  ],
};
