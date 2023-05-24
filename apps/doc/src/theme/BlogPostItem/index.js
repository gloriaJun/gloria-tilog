import React from 'react';

import { Comment } from '@site/src/components/Comment';
import BlogPostItem from '@theme-original/BlogPostItem';

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <Comment />
    </>
  );
}
