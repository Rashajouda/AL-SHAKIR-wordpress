import $ from 'jquery';
import { initBackgroundApp } from '../utils/backgroundAppUtils';
import {
  monitorReviewBannerRendered,
  monitorReviewBannerLinkClicked,
  monitorReviewBannerDismissed,
} from '../api/hubspotPluginApi';
import { domElements } from '../constants/selectors';

/**
 * Adds some methods to window when review banner is
 * displayed to monitor events
 */
export function initMonitorReviewBanner() {
  //@ts-expect-error global
  if (!window.reviewBannerTracking) {
    //@ts-expect-error global
    window.reviewBannerTracking = {
      monitorReviewBannerRendered,
      monitorReviewBannerLinkClicked,
      monitorReviewBannerDismissed,
    };
  }

  function reviewLinkClickHandler() {
    const reviewBanner = document.getElementById('leadin-review-banner');

    if (reviewBanner) {
      reviewBanner.classList.add('leadin-review-banner--hide');
      //@ts-expect-error global
      window.reviewBannerTracking.monitorReviewBannerLinkClicked();
    }
  }

  function dismissBtnClickHandler() {
    //@ts-expect-error global
    window.reviewBannerTracking.monitorReviewBannerDismissed();
  }

  $(domElements.reviewBannerLeaveReviewLink)
    .off('click')
    .on('click', reviewLinkClickHandler);

  $(domElements.reviewBannerDismissButton)
    .off('click')
    .on('click', dismissBtnClickHandler);

  $('#leadin-iframe').ready(() => {
    monitorReviewBannerRendered();
  });
}

initBackgroundApp(initMonitorReviewBanner);
