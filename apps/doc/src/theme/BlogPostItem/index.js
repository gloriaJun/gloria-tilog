import React from 'react';

import { useBlogPost } from '@docusaurus/theme-common/internal';
import { Comment } from '@site/src/components/Comment';
import BlogPostItem from '@theme-original/BlogPostItem';

export default function BlogPostItemWrapper(props) {
  const { isBlogPostPage } = useBlogPost();

  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && <Comment />}
    </>
  );
}
