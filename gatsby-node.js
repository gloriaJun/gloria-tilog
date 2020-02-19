const path = require('path');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 *
 */

const pages = [
  { id: 1, content: 'Gatsby 로 블로그 만들기' },
  { id: 2, content: '거기에 타입스크립트 적용 해 보기' },
  { id: 3, content: '확실히 어렵네요' },
];

// You can delete this file if you're not using it
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ actions }) => {
  //   console.log('### createPages ####', graphql, actions, reporter);
  const { createPage } = actions;

  //   // Query for markdown nodes to use in creating pages.
  //   const result = await graphql(
  //     `
  //       {
  //         allMarkdownRemark(limit: 1000) {
  //           edges {
  //             node {
  //               frontmatter {
  //                 path
  //               }
  //             }
  //           }
  //         }
  //       }
  //     `,
  //   );
  // Handle errors
  //   if (result.errors) {
  //     reporter.panicOnBuild(`Error while running GraphQL query.`);
  //     return;
  //   }

  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`src/templates/post/index.tsx`);

  pages.map(item => {
    createPage({
      path: item.id.toString(),
      component: blogPostTemplate,
      context: item,
    });
  });
  //   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //     const path = node.frontmatter.path;
  //     createPage({
  //       path,
  //       component: blogPostTemplate,
  //       // In your blog post template's graphql query, you can use path
  //       // as a GraphQL variable to query for data from the markdown file.
  //       context: {
  //         path,
  //       },
  //     });
  //   });
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
