import React from 'react';
import { graphql } from 'gatsby';

interface IQueryProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        date: string;
      };
    };
  };
}

const PostTemplate: React.FC<IQueryProps> = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <>
      <pre>{post.frontmatter.title}</pre>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
      }
    }
  }
`;
