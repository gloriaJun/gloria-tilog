import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Layout } from 'components/layout';
import { PostHeader } from 'components/organisms/post-header';
import { PostTags } from 'components/organisms/post-tags';
import { Utterances } from 'components/organisms/utterances';
import { ItemplateProps } from 'interfaces';
import { BlogPostBySlug } from './__generated__/BlogPostBySlug';
import Head from 'components/organisms/head';

type IQueryProps = ItemplateProps<BlogPostBySlug>;

const PostTemplate = ({
  pageContext,
  data: { mdx },
}: IQueryProps): JSX.Element => {
  const { frontmatter, body } = mdx || {};

  return (
    <Layout>
      <Head title={frontmatter?.title} description={mdx?.excerpt} />

      <article>
        {frontmatter && (
          <>
            <PostHeader
              title={frontmatter.title}
              date={frontmatter.date}
              category={frontmatter.category}
            />

            <PostTags tags={frontmatter.tags} />
          </>
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
      excerpt
    }
  }
`;
