import React, { Fragment, useEffect } from 'react';
import { monitorMeetingPreviewRender } from '../../api/hubspotPluginApi';
import { IMeetingBlockProps } from '../../gutenberg/MeetingsBlock/registerMeetingBlock';
import MeetingController from './MeetingController';
import MeetingsContextWrapper from './MeetingsContext';
import PreviewMeeting from './PreviewMeeting';

interface IMeetingEditProps extends IMeetingBlockProps {
  preview?: boolean;
  origin?: 'gutenberg' | 'elementor';
}

export default function MeetingEdit({
  attributes: { url },
  isSelected,
  setAttributes,
  preview = true,
  origin = 'gutenberg',
}: IMeetingEditProps) {
  const handleChange = (newUrl: string) => {
    setAttributes({
      url: newUrl,
    });
  };

  useEffect(() => {
    monitorMeetingPreviewRender(origin);
  }, [origin]);

  return (
    <Fragment>
      {(isSelected || !url) && (
        <MeetingsContextWrapper url={url}>
          <MeetingController handleChange={handleChange} />
        </MeetingsContextWrapper>
      )}
      {preview && url && <PreviewMeeting url={url} />}
    </Fragment>
  );
}
