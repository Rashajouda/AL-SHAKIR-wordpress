import $ from 'jquery';

import { domElements } from './constants/selectors';
import urlsMap from './constants/urlsMap';

function setSelectedMenuItem(url: string) {
  $(domElements.subMenuButtons).removeClass('current');
  const match = url.match(/\?page=leadin_?\w*/);
  if (match) {
    const pageParam = match[0];
    const selectedElement = $(`a[href="admin.php${pageParam}"]`);
    selectedElement.parent().addClass('current');
  }
}

// Given a route like "/settings/forms", parse it into "?page=leadin_settings&leadin_route[]=forms"
export function syncRoute(path = '', searchQuery = '') {
  const baseUrls = Object.keys(urlsMap).sort((a, b) =>
    a.length < b.length ? 1 : -1
  );
  let wpPage;
  let route: string = '';

  baseUrls.some(basePath => {
    if (path.indexOf(basePath) === 0) {
      wpPage = urlsMap[basePath][0];
      const routePrefix = urlsMap[basePath][1] || '';
      const cleanedPath = path.replace(basePath, '');
      route = `${routePrefix}${cleanedPath}`.replace(/^\/+/, '');
      return true;
    }
    return false;
  });

  if (!wpPage) {
    return;
  }

  const leadinRouteParam = route
    ? `&${route
        .split('/')
        .map(subRoute => `${encodeURIComponent(`leadin_route[]`)}=${subRoute}`)
        .join('&')}`
    : '';

  const leadinSearchParam = searchQuery.length
    ? `&leadin_search=${encodeURIComponent(searchQuery)}`
    : '';

  // @ts-expect-error Global
  const nonce = window.leadinConfig
    ? // @ts-expect-error Global
      `&_wpnonce=${window.leadinConfig.routeNonce}`
    : '';

  const newUrl = `?page=${wpPage}${leadinRouteParam}${leadinSearchParam}${nonce}`;

  setSelectedMenuItem(newUrl);
  window.history.replaceState(null, '', newUrl);
}

export const leadinPageReload = () => window.location.reload();

export const leadinPageRedirect = (path: string) => {
  syncRoute(path);
  leadinPageReload();
};
