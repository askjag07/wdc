// Double slashes mark something you can change

module.exports = {
  siteMetadata: {
    title: "Website Title Here", // Your Website's Title
    siteUrl: "https://www.yourdomain.tld", // Your Website's Url
  },
  plugins: [
    {
      resolve: "gatsby-plugin-csp",
      options: {
        mergeStyleHashes: false,
        directives: {
          "style-src": "'self' 'unsafe-inline'",
        },
      },
    },
    {
      resolve: "gatsby-plugin-gatsby-cloud",
      options: {
        headers: {
          "/sw.js": ["cache-control: public, no-cache"],
          "/index.html": ["cache-control: public, no-cache"],
          "/404.html": ["cache-control: public, no-cache"],
          "/*/index.html": ["cache-control: public, no-cache"],
          "/page-data/app-data.json": ["cache-control: public, no-cache"],
          "/page-data/*/page-data.json": ["cache-control: public, no-cache"],
          "/static/*/*/*.webp": [
            "cache-control: public, max-age=31536000, immutable",
          ],
          "/static/*/*/*.png": [
            "cache-control: public, max-age=31536000, immutable",
          ],
          "/*.js": ["cache-control: public, max-age=31536000, immutable"],
          "/*.css": ["cache-control: public, max-age=31536000, immutable"],
          "/*.png": ["cache-control: public, max-age=31536000, immutable"],
        },
        allPageHeaders: [
          "Referrer-Policy: no-referrer-when-downgrade, always",
          "Strict-Transport-Security: max-age=31536000, includeSubDomains, preload",
          "X-Content-Type-Options: nosniff, always",
          "X-Frame-Options: SAMEORIGIN, always",
          "X-Robots-Tag: all",
          "X-XSS-Protection: 1, mode=block, always",
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-layout",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Website Name Here", // Your website's name
        short_name: "Short Website Name Here", // Shortened version of your website's name
        description: "Basic description of your website.", // Description of your website
        lang: "en", // Language used
        start_url: "/", // Home page url (everything after the tld)
        background_color: "#ffffff", // Above search bar (in phone browser)
        theme_color: "#000000", // Search bar (in phone browser)
        display: "standalone",
        icon: "src/images/icon.png", // Path to your icon
        cache_busting_mode: "none",
      },
    },
    "gatsby-plugin-nprogress",
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["./icons/icon-*"],
        },
      },
    },
    "gatsby-plugin-preact",
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-perf-budgets",
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-minify-classnames",
  ],
};
