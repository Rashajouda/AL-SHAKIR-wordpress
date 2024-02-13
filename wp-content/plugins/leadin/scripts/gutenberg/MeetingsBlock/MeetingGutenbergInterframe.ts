import Raven from 'raven-js';

export const meetingsGutenbergInterframe = (function() {
  let callback: Function;

  return {
    executeCallback(args: any) {
      if (callback) {
        Raven.context(callback, args);
      }
    },
    setCallback(callbackFunc: Function) {
      callback = callbackFunc;
    },
  };
})();

export function gutenbergTriggerConnectCalendarRefresh(args: any) {
  meetingsGutenbergInterframe.executeCallback(args);
}
