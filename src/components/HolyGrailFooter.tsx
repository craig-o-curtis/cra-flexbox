import React from 'react';
import styles from './HolyGrailFooter.module.scss';
import MenuSocial from './MenuSocial';

const HolyGrailFooter = ({ className = '' }) => {
  return (
    <footer className={`${styles.HolyGrailFooter} ${className}`}>
      <MenuSocial showTitle={false} />
    </footer>
  );
};

export default HolyGrailFooter;
