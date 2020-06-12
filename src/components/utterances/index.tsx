import React, { useRef, useLayoutEffect } from 'react';

interface IQueryProps {
  repo: string;
}

/**
 * the blog comment can write and view by using github issue
 * https://utteranc.es/
 */
export const Utterances: React.FC<IQueryProps> = ({ repo }) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = document.createElement('script');

    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo,
      'issue-term': 'pathname',
      label: 'comment',
      theme: 'github-light',
      crossorigin: 'anonymous',
      // for testing
      'data-testId': 'utterances',
    };

    Object.entries(attributes).map(([k, v]) => {
      el.setAttribute(k, v);
    });

    ref.current?.appendChild(el);
  }, []);

  return <div ref={ref} />;
};

Utterances.defaultProps = {};
