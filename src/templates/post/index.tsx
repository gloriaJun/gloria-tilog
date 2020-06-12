import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Utterances } from 'components/utterances';
import { BlogPostBySlug } from './__generated__/BlogPostBySlug';

interface IQueryProps {
  data: BlogPostBySlug;
}

const PostTemplate: React.FC<IQueryProps> = ({ data: { site, mdx } }) => {
  if (!mdx) {
    return <></>;
  }

  return (
    <article>
      <pre>{mdx.frontmatter?.title}</pre>
      <MDXProvider>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>

      <Utterances repo={site.siteMetadata.comment.utterances} />
    </article>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        comment {
          utterances
        }
      }
    }
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
