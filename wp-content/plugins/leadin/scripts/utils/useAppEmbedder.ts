import { useEffect, useState } from 'react';
import {
  hubspotBaseUrl,
  portalId,
  locale,
  deviceId,
} from '../constants/leadinConfig';
import { fetchRefreshToken } from '../api/wordpressApiClient';
import Raven from '../lib/Raven';
import { Apps, AppType } from '../iframe/constants';

const IFRAME_DISPLAY_TIMEOUT = 5000;

const getAppOptions = (app: AppType, refreshToken: string) => {
  const {
    IntegratedAppOptions,
    FormsAppOptions,
    LiveChatAppOptions,
  }: any = window;
  let options;

  switch (app) {
    case Apps.Forms:
      options = new FormsAppOptions();
      break;
    case Apps.LiveChat:
      options = new LiveChatAppOptions();
      break;
    default:
      options = new IntegratedAppOptions();
  }

  options = options
    .setRefreshToken(refreshToken)
    .setLocale(locale)
    .setDeviceId(deviceId);

  const queryParams = new URLSearchParams(location.search);
  const route = queryParams.get('leadin_route[0]');
  if (route && route === 'create') {
    switch (app) {
      case Apps.Forms:
        options = options.setCreateFormAppInit();
        break;
      case Apps.LiveChat:
        options = options.setCreateLiveChatAppInit();
        break;
    }
  }
  return options;
};

export default function useAppEmbedder(
  app: AppType,
  container: HTMLElement | null
) {
  const [iframeNotRendered, setIframeNotRendered] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      const iframe = document.getElementById(app);
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

  useEffect(() => {
    fetchRefreshToken().then(({ refreshToken }) => {
      const { IntegratedAppEmbedder }: any = window;
      if (IntegratedAppEmbedder) {
        const options = getAppOptions(app, refreshToken);
        const embedder = new IntegratedAppEmbedder(
          app,
          portalId,
          hubspotBaseUrl,
          () => {
            const adminMenuWrap = document.getElementById('adminmenuwrap');
            const sideMenuHeight = adminMenuWrap
              ? adminMenuWrap.offsetHeight
              : 0;
            const adminBar = document.getElementById('wpadminbar');
            const adminBarHeight = (adminBar && adminBar.offsetHeight) || 0;
            const offset = 4;
            if (window.innerHeight < sideMenuHeight) {
              return sideMenuHeight - offset;
            } else {
              return window.innerHeight - adminBarHeight - offset;
            }
          }
        ).setOptions(options);
        embedder.attachTo(container);
      }
    });
  }, []);

  return iframeNotRendered;
}
