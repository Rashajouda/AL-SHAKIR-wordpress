import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { domElements } from '../constants/selectors';
import { IframeErrorPage } from './IframeErrorPage';
import useAppEmbedder from '../utils/useAppEmbedder';
import { Apps } from './constants';

export const IframePortal = (props: React.PropsWithChildren) => {
  const container = document.getElementById(domElements.leadinIframeContainer);
  const iframeNotRendered = useAppEmbedder(Apps.LiveChat, container);

  if (container && !iframeNotRendered) {
    return ReactDOM.createPortal(props.children, container);
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
