import React, { useLayoutEffect, useRef } from 'react';

import { useColorMode } from '@docusaurus/theme-common';

const utteranceDomain = 'https://utteranc.es';

export function Comment() {
  const { colorMode } = useColorMode();

  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!boxRef.current) {
      return;
    }

    const utteranceFrameElement =
      boxRef.current.querySelector<HTMLIFrameElement>('.utterances-frame');
    const theme = `github-${colorMode}`;

    if (utteranceFrameElement) {
      utteranceFrameElement.contentWindow.postMessage(
        {
          type: 'set-theme',
          theme,
        },
        utteranceDomain,
      );
    } else {
      const script = document.createElement('script');
      script.src = `${utteranceDomain}/client.js`;
      script.setAttribute('repo', 'gloriaJun/gloria-tilog-comment');
      script.setAttribute('issue-term', 'title');
      script.setAttribute('theme', theme);
      script.crossOrigin = 'anonymous';
      script.async = true;

      boxRef.current.appendChild(script);
    }
  }, [colorMode]);

  return <div ref={boxRef} />;
}
