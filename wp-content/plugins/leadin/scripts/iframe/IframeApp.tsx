import { useState, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Raven from '../lib/Raven';
import { domElements } from '../constants/selectors';
import { createIframe } from './iframeUtils';
import { IframeErrorPage } from './IframeErrorPage';

const IFRAME_DISPLAY_TIMEOUT = 5000;

export const IframePortal = (props: React.PropsWithChildren) => {
  const [iframeNotRendered, setIframeNotRendered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const iframe = document.getElementById(domElements.leadinIframe);
      if (!iframe) {
        Raven.captureException(new Error(`Leadin Iframe blocked`), {
          fingerprint: ['IFRAME_SETUP_ERROR'],
        });
        setIframeNotRendered(true);
      }
    }, IFRAME_DISPLAY_TIMEOUT);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  const iframe = createIframe();
  const container = document.getElementById(domElements.leadinIframeContainer);

  if (container && !iframeNotRendered) {
    return ReactDOM.createPortal(props.children, container.appendChild(iframe));
  }

  return (
    <Fragment>
      {(!container || iframeNotRendered) && <IframeErrorPage />}
    </Fragment>
  );
};

export const renderIframeApp = () => {
  const iframeFallbackContainer = document.getElementById(
    domElements.leadinIframeFallbackContainer
  );
  ReactDOM.render(<IframePortal />, iframeFallbackContainer);
};
