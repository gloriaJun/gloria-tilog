import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';

export interface ICodeBlockProps {
  children: React.ReactNode;
  className: string;
}

export default function CodeBlock({
  children,
  className,
}: ICodeBlockProps): JSX.Element {
  const language = className.replace(/language-/, '');

  return (
    <Highlight
      {...defaultProps}
      code={children as string}
      language={language as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
