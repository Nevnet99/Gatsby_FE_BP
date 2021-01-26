module.exports = {
  siteMetadata: {
    title: "Kicks",
    description: "Kicks online clothing sotre",
    author: "@Nevnet99",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Kicks",
        short_name: "Kicks",
        start_url: "/",
        background_color: "#FFF",
        theme_color: "#FFF",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "e5260he6",
        dataset: "production",
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
      },
    },
    "gatsby-plugin-typescript",
  ],
}
