import React from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { RawHTML } from '@wordpress/element';
import { IFormBlockAttributes } from './registerFormBlock';

export default function FormSaveBlock({ attributes }: IFormBlockAttributes) {
  const { portalId, formId } = attributes;

  if (portalId && formId) {
    return (
      <RawHTML {...useBlockProps.save()}>
        {`[hubspot portal="${portalId}" id="${formId}" type="form"]`}
      </RawHTML>
    );
  }
  return null;
}
