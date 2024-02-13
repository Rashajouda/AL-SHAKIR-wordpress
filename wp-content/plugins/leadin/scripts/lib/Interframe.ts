import Penpal from 'penpal';
import Raven from './Raven';
import { syncRoute, leadinPageReload, leadinPageRedirect } from '../navigation';
import * as leadinConfig from '../constants/leadinConfig';
import {
  leadinClearQueryParam,
  getQueryParam,
  filterLeadinQueryParams,
} from '../utils/queryParams';
import { leadinGetPortalInfo } from '../utils/portalInfo';

import {
  fetchOAuthToken,
  fetchRefreshToken,
  makeInterframeProxyRequest,
  disableInternalTracking,
  fetchDisableInternalTracking,
  updateHublet,
  trackConsent,
  skipReview,
  leadinDisconnectPortal,
  setBusinessUnitId,
  getBusinessUnitId,
  getBusinessUnits,
} from '../api/wordpressApiClient';
import { setLeadinUnAuthedNavigation } from '../utils/sideNav';
import { gutenbergTriggerConnectCalendarRefresh } from '../gutenberg/MeetingsBlock/MeetingGutenbergInterframe';

const methods = {
  leadinClearQueryParam,
  leadinPageReload,
  leadinPageRedirect,
  leadinGetPortalInfo,
  leadinDisconnectPortal,
  getLeadinConfig: () => leadinConfig,
  setLeadinUnAuthedNavigation,
  makeInterframeProxyRequest,
  fetchOAuthToken,
  fetchRefreshToken,
  skipReview,
  updateHublet,
  trackConsent,
  disableInternalTracking,
  fetchDisableInternalTracking,
  gutenbergTriggerConnectCalendarRefresh,
  setBusinessUnitId,
  getBusinessUnitId,
  getBusinessUnits,
};

const UNAUTHORIZED = 'unauthorized';
const REDIRECT = 'REDIRECT';
const hubspotBaseUrl = leadinConfig.hubspotBaseUrl;

function createConnectionToIframe(iframe: HTMLIFrameElement) {
  return Penpal.connectToChild({
    url: iframe.src,
    // The iframe to which a connection should be made
    iframe,
    // Methods the parent is exposing to the child
    methods,
  });
}

export function initInterframe(iframe: HTMLIFrameElement) {
  //@ts-expect-error global
  if (!window.leadinChildFrameConnection) {
    //@ts-expect-error global
    window.leadinChildFrameConnection = createConnectionToIframe(iframe);
    //@ts-expect-error global
    window.leadinChildFrameConnection.promise.catch(error => {
      Raven.captureException(error, {
        fingerprint: ['INTERFRAME_CONNECTION_ERROR'],
      });
    });
  }

  const redirectToLogin = (event: any) => {
    if (event.data === UNAUTHORIZED) {
      window.removeEventListener('message', redirectToLogin);
      iframe.src = leadinConfig.loginUrl;
      setLeadinUnAuthedNavigation();
    }
  };

  const handleNavigation = (event: any) => {
    if (event.origin !== hubspotBaseUrl) return;
    try {
      const data = JSON.parse(event.data);
      if (data['leadin_sync_route']) {
        const route = data['leadin_sync_route'];
        const search = data['leadin_sync_search'];

        syncRoute(route, filterLeadinQueryParams(search));
      } else if (data['message'] === REDIRECT) {
        window.location.href = data['url'];
      }
    } catch (e) {
      // Error in parsing message
    }
  };

  const currentPage = getQueryParam('page');
  if (
    currentPage !== 'leadin_settings' &&
    currentPage !== 'leadin' &&
    currentPage !== 'leadin_user_guide'
  ) {
    window.addEventListener('message', redirectToLogin);
  }

  window.addEventListener('message', handleNavigation);
}
