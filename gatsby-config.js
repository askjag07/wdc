module.exports = {
  siteMetadata: {
    title: `Website Title Here`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-csp",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-layout",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Website Name Here",
        short_name: "Short Website Name Here",
        description: "Basic description of your website.",
        lang: "en", // Language
        start_url: "/", // Home page url (everything after the tld)
        background_color: "#ffffff", // Above search bar
        theme_color: "#000000", // Search bar
        display: "standalone",
        icon: "src/images/icon.png" // path to icon
      }
    },
    "gatsby-plugin-minify-classnames",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
  "gatsby-plugin-sharp",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }
]
};