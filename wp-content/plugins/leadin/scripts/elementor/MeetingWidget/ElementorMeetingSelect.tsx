import React, { useContext, Fragment, useState } from 'react';
import ElementorBanner from '../Common/ElementorBanner';
import UISpinner from '../../shared/UIComponents/UISpinner';
import ElementorMeetingWarning from './ElementorMeetingWarning';
import { MeetingsContext } from '../../shared/Meeting/MeetingsContext';
import useMeetings, {
  useSelectedMeetingCalendar,
} from '../../shared/Meeting/useMeetings';
import { __ } from '@wordpress/i18n';

interface IElementorMeetingSelectProps {
  url: string;
  setAttributes: Function;
}

export default function ElementorMeetingSelect({
  url,
  setAttributes,
}: IElementorMeetingSelectProps) {
  const { loading, error, reload } = useContext(MeetingsContext);
  const meetings = useMeetings();
  const selectedMeetingCalendar = useSelectedMeetingCalendar();
  const [localUrl, setLocalUrl] = useState(url);
  return (
    <Fragment>
      {loading ? (
        <div>
          <UISpinner />
        </div>
      ) : error ? (
        <ElementorBanner type="danger">
          {__(
            'Please refresh your meetings or try again in a few minutes.',
            'leadin'
          )}
        </ElementorBanner>
      ) : (
        <Fragment>
          {selectedMeetingCalendar && (
            <ElementorMeetingWarning
              status={selectedMeetingCalendar}
              triggerReload={() => reload()}
            />
          )}
          {meetings.length > 1 && (
            <select
              value={localUrl}
              onChange={event => {
                const newUrl = event.target.value;
                setLocalUrl(newUrl);
                setAttributes({
                  url: newUrl,
                });
              }}
            >
              <option value="" disabled={true} selected={true}>
                {__('Select a meeting', 'leadin')}
              </option>
              {meetings.map(item => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}
