import React, { useRef, useLayoutEffect } from 'react';
import { attributes } from '../constants/utterances';

/**
 * the blog comment can write and view by using github issue
 * https://utteranc.es/
 */
export const Utterances: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = document.createElement('script');

    el.setAttribute('data-testId', 'utterances');

    Object.entries(attributes).map(([k, v]) => {
      el.setAttribute(k, v);
    });

    ref.current?.appendChild(el);
  }, []);

  return <div ref={ref} />;
};

Utterances.defaultProps = {};
