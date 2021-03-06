import * as path from 'path';
import { GatsbyNode } from 'gatsby';

import { ISite } from 'interfaces';

interface INode {
  sourceInstanceName: string;
  childMdx: {
    id: string;
    fields: {
      slug: string;
    };
  };
}

interface IQueryResult {
  site: ISite;
  devLogs: {
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
        site {
          siteMetadata {
            comment {
              utterances
            }
          }
        }
        devLogs: allFile(
          filter: {
            childMdx: {
              id: { ne: null }
              frontmatter: { isDraft: { ne: true } }
            }
          }
          sort: { fields: childMdx___frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              sourceInstanceName
              childMdx {
                id
                fields {
                  slug
                }
              }
            }
          }
        }
      }
    `,
  );

  // Handle errors
  if (errors) {
    console.error(errors);
    throw errors;
  }

  if (!data) {
    throw new Error('ERROR: Could not fetch posts on build');
  }

  // Create pages for each markdown file.
  const {
    site: {
      siteMetadata: { comment },
    },
    devLogs: { edges: posts },
  } = data;

  posts.forEach(({ node }) => {
    const { id, fields } = node.childMdx;

    createPage({
      path: fields.slug,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        id,
        commentPlugins: comment,
      },
    });
  });
};
