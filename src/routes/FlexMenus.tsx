import React from 'react';
import PageContent from '../components/PageContent';
import MenuSingleLevel from '../components/MenuSingleLevel';
import MenuAdvancedNav from '../components/MenuAdvancedNav';
import MenuMultiLevel from '../components/MenuMultiLevel';
import MenuSocial from '../components/MenuSocial';

const FlexMenus = () => (
  <PageContent className="flex-menus">
    <MenuSingleLevel />
    <MenuAdvancedNav />
    <MenuMultiLevel />
    <MenuSocial />
  </PageContent>
);

export default FlexMenus;
