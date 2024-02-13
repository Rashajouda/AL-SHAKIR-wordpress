import React, { Fragment, useContext, useEffect } from 'react';
import LoadingBlock from '../Common/LoadingBlock';
import MeetingSelector from './MeetingSelector';
import MeetingWarning from './MeetingWarning';
import { MeetingsContext } from './MeetingsContext';
import useMeetings, {
  useSelectedMeeting,
  useSelectedMeetingCalendar,
} from './useMeetings';
import HubspotWrapper from '../Common/HubspotWrapper';
import ErrorHandler from '../Common/ErrorHandler';
import { pluginPath } from '../../constants/leadinConfig';
import { __ } from '@wordpress/i18n';

interface IMeetingControllerProps {
  handleChange: Function;
}

export default function MeetingController({
  handleChange,
}: IMeetingControllerProps) {
  const { loading, selectedMeeting, error, reload } = useContext(
    MeetingsContext
  );
  const meetings = useMeetings();
  const selectedMeetingOption = useSelectedMeeting();
  const selectedMeetingCalendar = useSelectedMeetingCalendar();

  useEffect(() => {
    if (!selectedMeeting && meetings.length > 0) {
      handleChange(meetings[0].value);
    }
  }, [meetings, selectedMeeting, handleChange]);

  const handleLocalChange = (option: { value: string }) => {
    handleChange(option.value);
  };

  return (
    <Fragment>
      {loading ? (
        <LoadingBlock />
      ) : error ? (
        <ErrorHandler
          status={(error && error.status) || error}
          resetErrorState={() => reload()}
          errorInfo={{
            header: __(
              'There was a problem retrieving your meetings',
              'leadin'
            ),
            message: __(
              'Please refresh your meetings or try again in a few minutes.',
              'leadin'
            ),
            action: __('Refresh meetings', 'leadin'),
          }}
        />
      ) : (
        <HubspotWrapper padding="90px 32px 24px" pluginPath={pluginPath}>
          {selectedMeetingCalendar && (
            <MeetingWarning
              status={selectedMeetingCalendar}
              triggerReload={() => reload()}
            />
          )}
          {meetings.length > 1 && (
            <MeetingSelector
              onChange={handleLocalChange}
              options={meetings}
              value={selectedMeetingOption}
            />
          )}
        </HubspotWrapper>
      )}
    </Fragment>
  );
}
