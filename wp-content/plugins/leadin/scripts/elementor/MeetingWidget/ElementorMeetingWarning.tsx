import React, { Fragment } from 'react';
import { portalId, hubspotBaseUrl } from '../../constants/leadinConfig';
import { leadinConnectCalendar } from '../../api/hubspotPluginApi';
import { CURRENT_USER_CALENDAR_MISSING } from '../../shared/Meeting/constants';
import ElementorButton from '../Common/ElementorButton';
import ElementorBanner from '../Common/ElementorBanner';
import { styled } from '@linaria/react';
import { __ } from '@wordpress/i18n';

const Container = styled.div`
  padding-bottom: 8px;
`;

interface IMeetingWarningPros {
  triggerReload: Function;
  status: string;
}

export default function MeetingWarning({
  triggerReload,
  status,
}: IMeetingWarningPros) {
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
    <Fragment>
      <Container>
        <ElementorBanner type="warning">
          <b>{titleText}</b>
          <br />
          {titleMessage}
        </ElementorBanner>
      </Container>
      {isMeetingOwner && (
        <ElementorButton
          id="meetings-connect-calendar"
          onClick={() =>
            leadinConnectCalendar({ hubspotBaseUrl, portalId, triggerReload })
          }
        >
          {__('Connect calendar', 'leadin')}
        </ElementorButton>
      )}
    </Fragment>
  );
}
