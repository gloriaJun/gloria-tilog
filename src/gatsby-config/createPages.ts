import * as path from 'path';
import { CreatePagesArgs } from 'gatsby';

// @ts-nocheck: Cannot find module
import { Query } from '../_generated_/graphql-types';

const resolve = (dir: string) => path.resolve(__dirname, '..', dir);

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 *
 */

// You can delete this file if you're not using it
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
export async function createPages({
  actions: { createPage },
  graphql,
}: CreatePagesArgs) {
  // Query for markdown nodes to use in creating pages.
  const { data, errors } = await graphql<Query>(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 10
        ) {
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
  if (errors) {
    throw errors;
  }

  if (!data) {
    throw new Error('ERROR: Could not fetch posts on build');
  }

  // Create pages for each markdown file.
  const blogPostTemplate = resolve(`templates/post/index.tsx`);

  // @ts-nocheck binding element error
  data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { id, html, frontmatter } = node;
    const { title, date } = frontmatter || {};

    createPage({
      path: '/test',
      component: blogPostTemplate,

      // In your blog post template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        id,
        title,
        date,
        html,
      },
    });
  });
}

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
