require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsby-tilefolio.netlify.app",
    title: "Gatsby TileFolio",
    author: "Graine",
    authorWebsite: "Graine",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "12345",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/md`,
        name: `markdown-pages`,
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-s3`,
      options: {
        aws: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,//"A_________ILOD52C",
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,//"_______HDCswIjnGLs9PZJlTA8PEap",
          region: process.env.AWS_REGION,//"eu-central-1",
        },
        
        buckets: ["mk1gatsby"], 
        expiration: 120,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `data/`,
        name: `json-data`,
      },
      __key: "json",
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
