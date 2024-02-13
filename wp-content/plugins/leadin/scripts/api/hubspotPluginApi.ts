import Raven from '../lib/Raven';
import { meetingsGutenbergInterframe } from '../gutenberg/MeetingsBlock/MeetingGutenbergInterframe';

function callInterframeMethod(method: string, ...args: any[]) {
  //@ts-expect-error global
  return window.leadinChildFrameConnection.promise.then(child =>
    Raven.context(child[method], args)
  );
}

export function getAuth() {
  return callInterframeMethod('leadinGetAuth');
}

export function getMeetings() {
  return callInterframeMethod('leadinGetMeetings');
}

export function getMeetingUser() {
  return callInterframeMethod('leadinGetMeetingUser');
}

export function getMeetingUsers(ids: string[]) {
  return callInterframeMethod('leadinGetMeetingUsers', ids);
}

export function createMeetingUser(data: any) {
  return callInterframeMethod('leadinPostMeetingUser', data);
}

export function getForm(formId: string) {
  return callInterframeMethod('leadinGetForm', formId);
}

export function monitorFormPreviewRender(origin = 'gutenberg') {
  return callInterframeMethod('monitorFormPreviewRender', origin);
}

export function monitorFormCreatedFromTemplate(
  type: string,
  origin = 'gutenberg'
) {
  return callInterframeMethod('monitorFormCreatedFromTemplate', type, origin);
}

export function monitorFormCreationFailed(error: Error, origin = 'gutenberg') {
  return callInterframeMethod('monitorFormCreationFailed', error, origin);
}

export function monitorMeetingPreviewRender(origin = 'gutenberg') {
  return callInterframeMethod('monitorMeetingPreviewRender', origin);
}

export function monitorSidebarMetaChange(metaKey: string) {
  return callInterframeMethod('monitorSidebarMetaChange', metaKey);
}

export function monitorReviewBannerRendered() {
  return callInterframeMethod('monitorReviewBannerRendered');
}

export function monitorReviewBannerLinkClicked() {
  return callInterframeMethod('monitorReviewBannerLinkClicked');
}

export function monitorReviewBannerDismissed() {
  return callInterframeMethod('monitorReviewBannerDismissed');
}

export function leadinConnectCalendar(calendarArgs: any) {
  const { hubspotBaseUrl, portalId, triggerReload } = calendarArgs;
  meetingsGutenbergInterframe.setCallback(triggerReload);

  return callInterframeMethod('leadinConnectCalendar', {
    hubspotBaseUrl,
    portalId,
  });
}

export function monitorPluginDeactivation(reason: string) {
  return callInterframeMethod('monitorPluginDeactivation', reason);
}
