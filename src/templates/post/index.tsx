import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Layout } from 'components/layout';
import { PostHeader } from 'components/post-header';
import { Utterances } from 'components/utterances';
import { ItemplateProps } from 'interfaces';
import { BlogPostBySlug } from './__generated__/BlogPostBySlug';

type IQueryProps = ItemplateProps<BlogPostBySlug>;

const PostTemplate: React.FC<IQueryProps> = ({
  pageContext,
  data: { mdx },
}) => {
  const { frontmatter, body } = mdx || {};

  return (
    <Layout>
      <article>
        {frontmatter && (
          <PostHeader
            title={frontmatter.title}
            date={frontmatter.date}
            category={frontmatter.category}
          />
        )}

        {body && (
          <MDXProvider>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        )}

        {pageContext.commentPlugins.utterances && (
          <Utterances repo={pageContext.commentPlugins.utterances} />
        )}
      </article>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        category
        tags
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
