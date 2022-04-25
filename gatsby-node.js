exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      
      allS3Object {
        edges {
          node {
            url
          }
        }
      }
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              template
            }
            id
          }
        }
      }
      allDataJson {
        edges {
          node {
            id
            imgSrc
            slug
            srcText
            title
            content
            format
          }
          previous {
            id
          }
          next {
            id
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  //S3
  result.data.allS3Object.edges.forEach(({ node }) => {

    console.log("mk1nodeurl ", node.url) ;
    
  
  
  });

  // pages creation
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.path == null) {
      console.log("unable to create page for node ", node, " path is null");
      return false;
    }
    const template = require.resolve(`./src/templates/page-template.js`);
    createPage({
      path: node.frontmatter.path,
      component: template,
      context: {
        id: node.id,
      },
    });
  });
  // posts Creation
  result.data.allDataJson.edges.forEach(({ node, previous, next }) => {
    if (node.slug == null) {
      console.log(
        "unable to create page for post ",
        node.slug,
        " slug is null"
      );
      return false;
    }
    const template = require.resolve(`./src/templates/post-template.js`);
    const previousPostId =
      previous && Object.hasOwnProperty.bind("id") ? previous.id : null;
    const nextPostId =
      next && Object.hasOwnProperty.bind(next, "id") ? next.id : null;
    createPage({
      path: node.slug,
      component: template,
      context: {
        id: node.id,
        previousPostId: previousPostId,
        nextPostId: nextPostId,
      },
    });
  });
};
