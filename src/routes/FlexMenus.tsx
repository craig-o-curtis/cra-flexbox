import React from 'react';
import PageContent from '../components/PageContent';
import MenuSingleLevel from '../components/MenuSingleLevel';
import MenuAdvancedNav from '../components/MenuAdvancedNav';
import MenuMultiLevel from '../components/MenuMultiLevel';
import MenuSocial from '../components/MenuSocial';
import MenuMixed from '../components/MenuMixed';

const FlexMenus = () => (
  <PageContent className="flex-menus">
    <MenuSingleLevel />
    <MenuAdvancedNav />
    <MenuMultiLevel />
    <MenuSocial />
    <MenuMixed />
  </PageContent>
);

export default FlexMenus;
