declare module '@mdx-js/react' {
  import { ComponentType, StyleHTMLAttributes } from 'react';

  type MDXProps = {
    children: React.ReactNode;
    components?: { pre: React.ReactNode };
  };
  export class MDXProvider extends React.Component<MDXProps> {}
}
