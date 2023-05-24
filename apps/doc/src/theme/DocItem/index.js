import React from 'react';

import { Comment } from '@site/src/components/Comment';
import DocItem from '@theme-original/DocItem';

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <Comment />
    </>
  );
}
