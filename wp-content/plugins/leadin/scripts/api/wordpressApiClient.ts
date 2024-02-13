import $ from 'jquery';

import Raven from '../lib/Raven';
import { restNonce, restUrl } from '../constants/leadinConfig';
import { addQueryObjectToUrl } from '../utils/queryParams';

function makeRequest(
  method: string,
  path: string,
  data: any = {},
  queryParams = {}
): Promise<any> {
  // eslint-disable-next-line compat/compat
  const restApiUrl = new URL(`${restUrl}leadin/v1${path}`);
  addQueryObjectToUrl(restApiUrl, queryParams);

  return new Promise((resolve, reject) => {
    const payload: { [key: string]: any } = {
      url: restApiUrl.toString(),
      method,
      contentType: 'application/json',
      beforeSend: (xhr: any) => xhr.setRequestHeader('X-WP-Nonce', restNonce),
      success: resolve,
      error: (response: any) => {
        Raven.captureMessage(
          `HTTP Request to ${restApiUrl} failed with error ${response.status}: ${response.responseText}`,
          {
            fingerprint: [
              '{{ default }}',
              path,
              response.status,
              response.responseText,
            ],
          }
        );
        reject(response);
      },
    };

    if (method !== 'get') {
      payload.data = JSON.stringify(data);
    }

    $.ajax(payload);
  });
}

export function makeProxyRequest(
  method: string,
  hubspotApiPath: string,
  data: any,
  queryParamsObject = {}
): Promise<any> {
  const proxyApiPath = `/proxy`;
  // eslint-disable-next-line compat/compat
  const proxyQueryParams = new URLSearchParams(queryParamsObject).toString();
  const proxyUrl = `${hubspotApiPath}?${proxyQueryParams}`;

  return makeRequest(method, proxyApiPath, data, { proxyUrl });
}

export function fetchOAuthToken() {
  return makeRequest('GET', '/oauth-token').catch(err => {
    return { status: err.status, message: err.responseText };
  });
}

export function fetchRefreshToken() {
  return makeRequest('GET', '/refresh-token').catch(err => {
    return { status: err.status, message: err.responseText };
  });
}

/**
 * To surface errors to the interframe, we need to catch the error
 * and return it to through penpal as a normal message, which the iframe
 * can check for and re-throw.
 */
export function makeInterframeProxyRequest(
  method: string,
  hubspotApiPath: string,
  data: any,
  queryParamsObject = {}
) {
  return makeProxyRequest(
    method,
    hubspotApiPath,
    data,
    queryParamsObject
  ).catch(err => {
    return { status: err.status, message: err.responseText };
  });
}

export function healthcheckRestApi() {
  return makeRequest('get', '/healthcheck');
}

export function disableInternalTracking(value: boolean) {
  return makeRequest('put', '/internal-tracking', value ? '1' : '0');
}

export function fetchDisableInternalTracking() {
  return makeRequest('get', '/internal-tracking').then(message => ({
    message,
  }));
}

export function updateHublet(hublet: string) {
  return makeRequest('put', '/hublet', { hublet });
}

export function skipReview() {
  return makeRequest('post', '/skip-review');
}

export function trackConsent(canTrack: boolean) {
  return makeRequest('post', '/track-consent', { canTrack }).then(message => ({
    message,
  }));
}

export function leadinDisconnectPortal() {
  return makeRequest('delete', '/portal');
}

export function setBusinessUnitId(businessUnitId: number) {
  return makeRequest('put', '/business-unit', { businessUnitId });
}

export function getBusinessUnitId() {
  return makeRequest('get', '/business-unit');
}

export function getBusinessUnits() {
  return makeProxyRequest(
    'get',
    '/integrations-proxy/v1/forms/business-units',
    {}
  );
}
