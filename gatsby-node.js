const path = require('path');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 *
 */

// You can delete this file if you're not using it
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      query {
        allMarkdownRemark(limit: 10) {
          edges {
            node {
              id
              html
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `,
  );

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`src/templates/post/index.tsx`);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const {
      id,
      frontmatter: { title, date },
    } = node;

    createPage({
      path: '/test',
      component: blogPostTemplate,

      // In your blog post template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        id,
        title,
        date,
      },
    });
  });
};

// exports.onCreatePage = ({ page, actions }) => {
//   console.log('### onCreatePage ###', { page, actions });
//   // const { createPage, deletePage } = actions
//   // const oldPage = Object.assign({}, page)
//   // // Remove trailing slash unless page is /
//   // page.path = replacePath(page.path)
//   // if (page.path !== oldPage.path) {
//   //   // Replace new page with old page
//   //   deletePage(oldPage)
//   //   createPage(page)
//   // }
// };

// exports.onCreateNode = ({ node }) => {
//   console.log('### onCreateNode ####', node.internal.type);
// };
