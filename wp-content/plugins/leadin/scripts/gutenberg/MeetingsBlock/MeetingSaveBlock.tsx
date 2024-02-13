import React from 'react';
import { RawHTML } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
import { IMeetingBlockAttributes } from './registerMeetingBlock';

export default function MeetingSaveBlock({
  attributes,
}: IMeetingBlockAttributes) {
  const { url } = attributes;

  if (url) {
    return (
      <RawHTML
        {...useBlockProps.save()}
      >{`[hubspot url="${url}" type="meeting"]`}</RawHTML>
    );
  }
  return null;
}
