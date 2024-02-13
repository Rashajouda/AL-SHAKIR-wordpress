import React from 'react';

import { SelectControl } from '@wordpress/components';
import withMetaData from '../../utils/withMetaData';
import { monitorSidebarMetaChange } from '../../api/hubspotPluginApi';

interface IOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface IUISidebarSelectControlProps {
  metaValue?: string;
  metaKey: string;
  setMetaValue?: Function;
  options: IOption[];
  className: string;
  label: JSX.Element;
}

const UISidebarSelectControl = (props: IUISidebarSelectControlProps) => {
  return (
    <SelectControl
      value={props.metaValue}
      onChange={content => {
        if (props.setMetaValue) {
          props.setMetaValue(content);
        }
        monitorSidebarMetaChange(props.metaKey);
      }}
      {...props}
    />
  );
};

export default withMetaData(UISidebarSelectControl);
