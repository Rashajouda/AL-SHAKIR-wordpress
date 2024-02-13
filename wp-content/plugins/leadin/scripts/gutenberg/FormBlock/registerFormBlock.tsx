import React from 'react';
import { BlockAttribute, registerBlockType } from '@wordpress/blocks';
import SprocketIcon from '../Common/SprocketIcon';
import FormBlockSave from './FormBlockSave';
import { connectionStatus } from '../../constants/leadinConfig';
import FormGutenbergPreview from './FormGutenbergPreview';
import ErrorHandler from '../../shared/Common/ErrorHandler';
import FormEdit from '../../shared/Form/FormEdit';
import { __ } from '@wordpress/i18n';

const ConnectionStatus = {
  Connected: 'Connected',
  NotConnected: 'NotConnected',
};

export interface IFormBlockAttributes {
  attributes: {
    portalId: string;
    formId: string;
    preview?: boolean;
    formName: string;
  };
}

export interface IFormBlockProps extends IFormBlockAttributes {
  setAttributes: Function;
  isSelected: boolean;
}

export default function registerFormBlock() {
  const editComponent = (props: IFormBlockProps) => {
    if (props.attributes.preview) {
      return <FormGutenbergPreview />;
    } else if (connectionStatus === ConnectionStatus.Connected) {
      return <FormEdit {...props} origin="gutenberg" preview={true} />;
    } else {
      return <ErrorHandler status={401} />;
    }
  };

  registerBlockType('leadin/hubspot-form-block', {
    title: __('HubSpot Form', 'leadin'),
    description: __('Select and embed a HubSpot form', 'leadin'),
    icon: SprocketIcon,
    category: 'leadin-blocks',
    attributes: {
      portalId: {
        type: 'string',
        default: '',
      } as BlockAttribute<string>,
      formId: {
        type: 'string',
      } as BlockAttribute<string>,
      formName: {
        type: 'string',
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
    save: props => <FormBlockSave {...props} />,
  });
}
