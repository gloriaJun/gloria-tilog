import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Utterances } from 'components/utterances';
import { BlogPostBySlug } from './__generated__/BlogPostBySlug';

interface IQueryProps {
  data: BlogPostBySlug;
}

const PostTemplate: React.FC<IQueryProps> = ({ data: { mdx } }) => {
  if (!mdx) {
    return <></>;
  }

  return (
    <>
      <pre>{mdx.frontmatter?.title}</pre>
      <MDXProvider>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>

      <Utterances />
    </>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        date
        title
        thumbnail {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
