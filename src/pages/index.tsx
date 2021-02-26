import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'components/layout';
import Head from 'components/organisms/head';
import { PostList, PostListItem } from 'components/organisms/post-list';
import { ISite, IPostContent } from 'interfaces';

export const BUTTON_SIZE = {
  LARGE: 'large',
  MAX: 'max',
} as const;

const add = (a) => 'aaaaa';
console.log('AAAA', add());
console.log('AAAA', BUTTON_SIZE.MMM);

interface IQueryProps {
  data: {
    site: ISite;
    list: {
      group: {
        edges: {
          node: {
            sourceInstanceName: string;
            childMdx: {
              id: string;
              fields: {
                slug: string;
              };
              frontmatter: IPostContent;
              excerpt: string;
            };
          };
        }[];
      }[];
    };
  };
}

export default function IndexPage({ data }: IQueryProps): JSX.Element {
  const {
    site: { siteMetadata },
    list,
  } = data;

  return (
    <Layout>
      <Head title={siteMetadata.title} description={siteMetadata.description} />

      {list.group.map(({ edges }, i) => (
        <PostList key={i} title={edges[0].node.sourceInstanceName}>
          {edges.map(
            ({ node: { childMdx } }) =>
              childMdx &&
              childMdx.fields &&
              childMdx.frontmatter && (
                <PostListItem
                  key={childMdx.id}
                  pathname={childMdx.fields.slug}
                  category={childMdx.frontmatter.category}
                  title={childMdx.frontmatter.title}
                  date={childMdx.frontmatter.date}
                  description={childMdx.excerpt}
                />
              ),
          )}
        </PostList>
      ))}
    </Layout>
  );
}

export const pageQuery = graphql`
  query HomePageData {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    list: allFile(
      filter: {
        childMdx: { id: { ne: null }, frontmatter: { isDraft: { ne: true } } }
      }
      sort: { fields: childMdx___frontmatter___date, order: DESC }
    ) {
      group(field: sourceInstanceName) {
        edges {
          node {
            sourceInstanceName
            childMdx {
              id
              fields {
                slug
              }
              frontmatter {
                category
                date
                tags
                title
              }
              excerpt
            }
          }
        }
      }
    }
  }
`;
