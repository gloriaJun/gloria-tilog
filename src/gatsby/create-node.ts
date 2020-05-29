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

    console.log('#####');
    console.log(node, node.sourceInstanceName);
    console.log('#####');

    createNodeField({
      name: `slug`,
      value: `/blog/${path}`,
      node,
    });
  }
};
