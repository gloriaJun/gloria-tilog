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
    const path = filePath.replace('/blog/', '').replace(/(^\/|\/$)/, '');

    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;

    createNodeField({
      name: `slug`,
      value: `/${source}/${path}`,
      node,
    });
  }
};
