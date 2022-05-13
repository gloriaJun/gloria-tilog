import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Layout } from 'components/layout';
import { PostHeader } from 'components/organisms/post-header';
import { PostTags } from 'components/organisms/post-tags';
import { Utterances } from 'components/organisms/utterances';
import { ITemplateProps, IPostContent } from 'interfaces';
import Head from 'components/head';
import CodeBlock from 'components/atoms/code-block';

interface BlogPostBySlug {
  mdx: {
    id: string;
    body: string;
    frontmatter: IPostContent;
    excerpt: string;
  };
}
type IQueryProps = ITemplateProps<BlogPostBySlug>;

const PostTemplate = ({
  pageContext,
  data: { mdx },
}: IQueryProps): JSX.Element => {
  const { frontmatter, body } = mdx || {};

  return (
    <Layout>
      <Head title={frontmatter?.title} description={mdx?.excerpt} />

      <div>
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

        <article className="prose lg:prose-xl">
          {body && (
            <MDXProvider
            // components={{ code: CodeBlock }}
            >
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          )}
        </article>

        {pageContext.commentPlugins.utterances && (
          <Utterances repo={pageContext.commentPlugins.utterances} />
        )}
      </div>
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
      }
      excerpt
    }
  }
`;
// export const pageQuery = graphql`
//   query BlogPostBySlug($id: String!) {
//     mdx(id: { eq: $id }) {
//       id
//       body
//       frontmatter {
//         title
//         date
//         category
//         tags
//         thumbnail {
//           childImageSharp {
//             fluid {
//               src
//             }
//           }
//         }
//       }
//       excerpt
//     }
//   }
// `;
