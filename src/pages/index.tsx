import React from 'react';
import { Link, graphql } from 'gatsby';

import Header from 'components/header';
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
        <h2>This is message.</h2>

        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node?.fields?.slug}>
              <p>{node?.fields?.slug}</p>
              <h3>
                [{node?.frontmatter?.category}] {node?.frontmatter?.title}{' '}
                <span>— {node?.frontmatter?.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </Content>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query HomePageData {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            category
            tags
            date(formatString: "MMMM DD, YYYY")
            title
          }
          excerpt
        }
      }
    }
  }
`;
