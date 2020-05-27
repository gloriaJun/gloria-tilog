import * as path from 'path';
import { GatsbyNode } from 'gatsby';

interface INode {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
  };
}

interface IQueryResult {
  allMarkdownRemark: {
    edges: {
      node: INode;
    }[];
  };
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 *
 */

// You can delete this file if you're not using it
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  // Ensure the path now points to TSX template
  const blogPostTemplate = path.resolve(
    __dirname,
    '../templates/post/index.tsx',
  );

  // Query for markdown nodes to use in creating pages.
  const { data, errors } = await graphql<IQueryResult>(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "YYYY.MM.DD")
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

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    const {
      fields: { slug },
    } = node;

    createPage({
      path: slug,
      component: blogPostTemplate,

      // In your blog post template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        slug,
      },
    });
  });
};
