import React from 'react';
import { Link, graphql } from 'gatsby';

import { Layout } from 'components/layout';
import { HomePageData } from './__generated__/HomePageData';
import Head from 'components/organisms/head';

interface IQueryProps {
  data: HomePageData;
}

const IndexPage = ({ data }: IQueryProps): JSX.Element => {
  const {
    list,
    site: { siteMetadata },
  } = data;

  return (
    <Layout>
      <Head title={siteMetadata.title} description={siteMetadata.description} />

      <h1>Hello, World!!!</h1>

      {list.group.map(({ edges }) => (
        <>
          <h2>{edges[0].node.sourceInstanceName}</h2>
          <ul>
            {edges.map(({ node: { childMdx } }) => (
              <li key={childMdx?.id}>
                {childMdx?.fields?.slug && (
                  <Link to={childMdx?.fields?.slug}>
                    <p>{childMdx?.id}</p>
                    <p>{childMdx?.fields?.slug}</p>
                    <h3>
                      [{childMdx?.frontmatter?.category}]{' '}
                      {childMdx?.frontmatter?.title}{' '}
                      <span>— {childMdx?.frontmatter?.date}</span>
                    </h3>
                    <p>{childMdx?.excerpt}</p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </>
      ))}
    </Layout>
  );
};

export default IndexPage;

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
      sort: {
        order: DESC
        fields: [sourceInstanceName, childMdx___frontmatter___date]
      }
      filter: { childMdx: { id: { ne: null } } }
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
