interface KeyStringObject {
  [key: string]: string;
}

interface Routes {
  [key: string]: string | KeyStringObject;
}

interface LeadinConfig {
  accountName: string;
  adminUrl: string;
  backgroundIframeUrl: string;
  connectionStatus?: 'Connected' | 'NotConnected';
  deviceId: string;
  didDisconnect: '1' | '0';
  env: string;
  formsScript: string;
  meetingsScript: string;
  formsScriptPayload: string;
  hublet: string;
  hubspotBaseUrl: string;
  iframeUrl: string;
  impactLink?: string;
  leadinPluginVersion: string;
  leadinQueryParamsKeys: string[];
  loginUrl: string;
  locale: string;
  oauth?: 'true';
  phpVersion: string;
  pluginPath: string;
  plugins: KeyStringObject;
  portalDomain: string;
  portalEmail: string;
  portalId: number;
  redirectNonce: string;
  restNonce: string;
  restUrl: string;
  reviewSkippedDate: string;
  routeNonce: string;
  routes: Routes;
  theme: string;
  trackConsent?: boolean;
  wpVersion: string;
}

const {
  accountName,
  adminUrl,
  backgroundIframeUrl,
  connectionStatus,
  deviceId,
  didDisconnect,
  env,
  formsScript,
  meetingsScript,
  formsScriptPayload,
  hublet,
  hubspotBaseUrl,
  iframeUrl,
  impactLink,
  leadinPluginVersion,
  leadinQueryParamsKeys,
  locale,
  loginUrl,
  oauth,
  phpVersion,
  pluginPath,
  plugins,
  portalDomain,
  portalEmail,
  portalId,
  redirectNonce,
  restNonce,
  restUrl,
  reviewSkippedDate,
  routeNonce,
  routes,
  theme,
  trackConsent,
  wpVersion,
}: //@ts-expect-error global
LeadinConfig = window.leadinConfig;

export {
  accountName,
  adminUrl,
  backgroundIframeUrl,
  connectionStatus,
  deviceId,
  didDisconnect,
  env,
  formsScript,
  meetingsScript,
  formsScriptPayload,
  hublet,
  hubspotBaseUrl,
  iframeUrl,
  impactLink,
  leadinPluginVersion,
  leadinQueryParamsKeys,
  loginUrl,
  locale,
  oauth,
  phpVersion,
  pluginPath,
  plugins,
  portalDomain,
  portalEmail,
  portalId,
  redirectNonce,
  restNonce,
  restUrl,
  reviewSkippedDate,
  routeNonce,
  routes,
  theme,
  trackConsent,
  wpVersion,
};
