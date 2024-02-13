import React from 'react';
import { BlockAttribute, registerBlockType } from '@wordpress/blocks';
import CalendarIcon from '../Common/CalendarIcon';
import { connectionStatus } from '../../constants/leadinConfig';
import MeetingGutenbergPreview from './MeetingGutenbergPreview';
import MeetingSaveBlock from './MeetingSaveBlock';
import MeetingEdit from '../../shared/Meeting/MeetingEdit';
import ErrorHandler from '../../shared/Common/ErrorHandler';
import { __ } from '@wordpress/i18n';

const ConnectionStatus = {
  Connected: 'Connected',
  NotConnected: 'NotConnected',
};

export interface IMeetingBlockAttributes {
  attributes: {
    url: string;
    preview?: boolean;
  };
}

export interface IMeetingBlockProps extends IMeetingBlockAttributes {
  setAttributes: Function;
  isSelected: boolean;
}

export default function registerMeetingBlock() {
  const editComponent = (props: IMeetingBlockProps) => {
    if (props.attributes.preview) {
      return <MeetingGutenbergPreview />;
    } else if (connectionStatus === ConnectionStatus.Connected) {
      return <MeetingEdit {...props} preview={true} origin="gutenberg" />;
    } else {
      return <ErrorHandler status={401} />;
    }
  };

  registerBlockType('leadin/hubspot-meeting-block', {
    title: __('Hubspot Meetings Scheduler', 'leadin'),
    description: __(
      'Schedule meetings faster and forget the back-and-forth emails. Your calendar stays full, and you stay productive',
      'leadin'
    ),
    icon: CalendarIcon,
    category: 'leadin-blocks',
    attributes: {
      url: {
        type: 'string',
        default: '',
      } as BlockAttribute<string>,
      preview: {
        type: 'boolean',
        default: false,
      } as BlockAttribute<boolean>,
    },
    example: {
      attributes: {
        preview: true,
      },
    },
    edit: editComponent,
    save: props => <MeetingSaveBlock {...props} />,
  });
}
