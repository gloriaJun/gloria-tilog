import { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

export const CreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
