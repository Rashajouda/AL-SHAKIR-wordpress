import { initInterframe } from '../lib/Interframe';
import {
  backgroundIframeUrl,
  impactLink,
  iframeUrl,
  pluginPath,
  hubspotBaseUrl,
} from '../constants/leadinConfig';
import urlsMap from '../constants/urlsMap';

function getIframeHeight() {
  const adminMenuWrap = document.getElementById('adminmenuwrap');
  const sideMenuHeight = adminMenuWrap ? adminMenuWrap.offsetHeight : 0;
  const adminBar = document.getElementById('wpadminbar');
  const adminBarHeight = (adminBar && adminBar.offsetHeight) || 0;

  if (window.innerHeight < sideMenuHeight) {
    return sideMenuHeight;
  } else {
    return window.innerHeight - adminBarHeight;
  }
}

function addIframeResizeEvent(iframe: HTMLIFrameElement) {
  let animationFrame: number;
  window.addEventListener(
    'resize',
    () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      animationFrame = requestAnimationFrame(() => {
        iframe.style.minHeight = `${getIframeHeight()}px`;
      });
    },
    true
  );
}

function createIframeElement(iframeSrc: string) {
  const iframe = document.createElement('iframe');
  iframe.id = 'leadin-iframe';
  iframe.src = iframeSrc;
  iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
  iframe.setAttribute(
    'sandbox',
    'allow-scripts allow-forms allow-popups allow-top-navigation allow-same-origin'
  );
  iframe.style.minHeight = `${getIframeHeight()}px`;
  addIframeResizeEvent(iframe);
  return iframe;
}

function createSpinnerImage() {
  const img = document.createElement('img');
  img.src = `${pluginPath}/public/assets/images/loading-dots.svg`;
  img.id = 'hs-plugin-loader';
  img.style.cssText = ` top: 50%;
                        left: 50%;
                        margin-left: -41px;
                        margin-top: -37;
                        display: block;
                        position: absolute;
                        z-index: 900;`;
  return img;
}

function addIframeLoadEvent(
  iframeContainer: HTMLElement,
  img: HTMLElement,
  iframe: HTMLIFrameElement
) {
  iframe.addEventListener(
    'load',
    () => {
      if (img && document.getElementById(img.id)) {
        img.remove();
      }
    },
    true
  );
}

function withLoadingSpinner(iframe: HTMLIFrameElement) {
  const iframeContainer = document.createElement('div');
  const img = createSpinnerImage();
  iframeContainer.appendChild(img);
  iframeContainer.appendChild(iframe);
  addIframeLoadEvent(iframeContainer, img, iframe);
  return iframeContainer;
}

export function createIframe() {
  const { page, ...query } = Object.fromEntries(
    new URLSearchParams(window.location.search)
  );
  let iframeSrcUrl = iframeUrl;
  const tourId = query['leadin_tour_id'];
  const justConnected = query['leadin_just_connected'];
  const routeKey = `${page}${Object.entries(query).reduce(
    (agg, [key, value]) => {
      if (key.includes('leadin_route')) {
        return `${agg}${value}`;
      }
      return agg;
    },
    ''
  )}`;
  const routeValue = urlsMap[routeKey];

  if (routeValue && !justConnected) {
    const urlObject = new URL(iframeSrcUrl);
    urlObject.pathname = routeValue;
    if (tourId) {
      urlObject.searchParams.append('tourId', tourId);
    }
    iframeSrcUrl = urlObject.toString();
  }

  const link = impactLink
    ? `${impactLink}?u=${encodeURIComponent(`${iframeSrcUrl}`)}&trackConsent=0`
    : iframeSrcUrl;
  const iframe = createIframeElement(link);
  initInterframe(iframe);
  return withLoadingSpinner(iframe);
}

export function createBackgroundIframe() {
  const iframe = createIframeElement(backgroundIframeUrl);
  iframe.style.display = 'none';
  initInterframe(iframe);
  document.body.appendChild(iframe);
}
