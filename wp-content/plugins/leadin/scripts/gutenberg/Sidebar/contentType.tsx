import React from 'react';
import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/edit-post';
import { PanelBody, Icon } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import UISidebarSelectControl from '../UIComponents/UISidebarSelectControl';
import SidebarSprocketIcon from '../Common/SidebarSprocketIcon';
import styled from 'styled-components';
import { __ } from '@wordpress/i18n';

export function registerHubspotSidebar() {
  const ContentTypeLabelStyle = styled.div`
    white-space: normal;
    text-transform: none;
  `;

  const ContentTypeLabel = (
    <ContentTypeLabelStyle>
      {__(
        'Select the content type HubSpot Analytics uses to track this page.',
        'leadin'
      )}
    </ContentTypeLabelStyle>
  );

  const LeadinPluginSidebar = ({ postType }: { postType: string }) =>
    postType ? (
      <PluginSidebar
        name="leadin"
        title="HubSpot"
        icon={
          <Icon
            className="hs-plugin-sidebar-sprocket"
            icon={SidebarSprocketIcon()}
          />
        }
      >
        <PanelBody title={__('HubSpot Analytics', 'leadin')} initialOpen={true}>
          <UISidebarSelectControl
            metaKey="content-type"
            className="select-content-type"
            label={ContentTypeLabel}
            options={[
              { label: __('Detect Automatically', 'leadin'), value: '' },
              { label: __('Blog Post', 'leadin'), value: 'blog-post' },
              {
                label: __('Knowledge Article', 'leadin'),
                value: 'knowledge-article',
              },
              { label: __('Landing Page', 'leadin'), value: 'landing-page' },
              { label: __('Listing Page', 'leadin'), value: 'listing-page' },
              { label: __('Standard Page', 'leadin'), value: 'standard-page' },
            ]}
          />
        </PanelBody>
      </PluginSidebar>
    ) : null;
  const LeadinPluginSidebarWrapper = withSelect((select: Function) => {
    const data = select('core/editor');
    return {
      postType:
        data &&
        data.getCurrentPostType() &&
        data.getEditedPostAttribute('meta'),
    };
  })(LeadinPluginSidebar);

  registerPlugin('leadin', {
    render: LeadinPluginSidebarWrapper,
    icon: SidebarSprocketIcon,
  });
}
