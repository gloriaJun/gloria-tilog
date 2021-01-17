import { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

export const CreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    // const type = node.frontmatter.type;
    const filePath = createFilePath({ node, getNode });
    const path = filePath.replace('/devLogs/', '').replace(/(^\/|\/$)/g, '');
    const source = getNode(node.parent || '').sourceInstanceName;

    createNodeField({
      name: `slug`,
      value: `/${source}/${path}`,
      node,
    });
  }
};
