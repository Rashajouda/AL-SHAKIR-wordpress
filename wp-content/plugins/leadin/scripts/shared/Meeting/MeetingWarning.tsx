import React from 'react';
import UIAlert from '../UIComponents/UIAlert';
import UIButton from '../UIComponents/UIButton';
import { leadinConnectCalendar } from '../../api/hubspotPluginApi';
import { portalId, hubspotBaseUrl } from '../../constants/leadinConfig';
import { CURRENT_USER_CALENDAR_MISSING } from './constants';
import { __ } from '@wordpress/i18n';

interface IMeetingWarningProps {
  triggerReload: Function;
  status: string;
}

export default function MeetingWarning({
  triggerReload,
  status,
}: IMeetingWarningProps) {
  const isMeetingOwner = status === CURRENT_USER_CALENDAR_MISSING;
  const titleText = isMeetingOwner
    ? __('Your calendar is not connected.', 'leadin')
    : __('Calendar is not connected.', 'leadin');
  const titleMessage = isMeetingOwner
    ? __(
        'Please connect your calendar to activate your scheduling pages.',
        'leadin'
      )
    : __(
        'Make sure that everybody in this meeting has connected their calendar from the Meetings page in HubSpot.',
        'leadin'
      );
  return (
    <UIAlert titleText={titleText} titleMessage={titleMessage}>
      {isMeetingOwner && (
        <UIButton
          use="tertiary"
          id="meetings-connect-calendar"
          onClick={() =>
            leadinConnectCalendar({ hubspotBaseUrl, portalId, triggerReload })
          }
        >
          {__('Connect calendar', 'leadin')}
        </UIButton>
      )}
    </UIAlert>
  );
}
