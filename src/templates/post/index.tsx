import React from 'react';

const PostTemplate: React.FC = props => {
  return (
    <code>
      <pre>{JSON.stringify(props, null, 4)}</pre>
    </code>
  );
};

export default PostTemplate;
