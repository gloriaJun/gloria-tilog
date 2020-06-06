import React from 'react';
import { Link, graphql } from 'gatsby';

import { Header } from 'components/header';
import Content from 'components/content';

import GlobalStyle from 'styles/global-style';

import { HomePageData } from './__generated__/HomePageData';

interface IQueryProps {
  data: HomePageData;
}

const IndexPage: React.FC<IQueryProps> = ({ data }) => {
  return (
    <>
      <GlobalStyle />

      <Header title={'L.E.T'} />

      <Content>
        <h1>Hello, World!!!</h1>

        {data.list.group.map(({ edges }) => (
          <>
            <h2>{edges[0].node.sourceInstanceName}</h2>
            <ul>
              {edges.map(({ node: { childMdx } }) => (
                <li key={childMdx?.id}>
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
                </li>
              ))}
            </ul>
          </>
        ))}

        {/* <ul>
          {data.allMdx.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={node?.fields?.slug}>
                <p>{node?.fields?.slug}</p>
                <h3>
                  [{node?.frontmatter?.category}] {node?.frontmatter?.title}{' '}
                  <span>— {node?.frontmatter?.date}</span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul> */}
      </Content>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query HomePageData {
    list: allFile(
      sort: {
        order: DESC
        fields: [sourceInstanceName, childMdx___frontmatter___date]
      }
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
