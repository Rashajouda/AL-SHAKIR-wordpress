import Raven from '../lib/Raven';
import { createBackgroundIframe } from '../iframe/iframeUtils';
import { initApp } from './appUtils';

type CallbackFn = (...args: any[]) => void;

export function initBackgroundApp(initFn: CallbackFn | CallbackFn[]) {
  function main() {
    createBackgroundIframe();
    if (Array.isArray(initFn)) {
      initFn.forEach(callback => callback());
    } else {
      initFn();
    }
  }
  initApp(main);
}

export function initMonitorGutenberBlockPreview() {
  const formsPreviewTimeouts: { [key: string]: any } = {};
  // This listener is responsible to monitor the form previews are rendered correctly
  window.addEventListener('message', event => {
    if (event.data.type === 'hsFormCallback') {
      const formId = event.data.id;
      if (event.data.eventName === 'onBeforeFormInit') {
        formsPreviewTimeouts[formId] = setTimeout(() => {
          Raven.captureMessage(
            `The form preview ${formId} has not been rendered correctly.`
          );
        }, 10 * 1000);
      }
      if (event.data.eventName === 'onFormReady') {
        clearTimeout(formsPreviewTimeouts[formId]);
      }
    }
  });
}
