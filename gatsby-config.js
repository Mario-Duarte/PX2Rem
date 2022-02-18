module.exports = {
  siteMetadata: {
      title: `PX2REM`,
    siteUrl: `https://mario-duarte.github.io/PX2Rem/`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    'gatsby-plugin-styled-components'
  ],
  pathPrefix: "/your-repo-name",
};