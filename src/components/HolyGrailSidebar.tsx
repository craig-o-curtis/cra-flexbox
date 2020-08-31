import React from 'react';
import styles from './HolyGrailSidebar.module.scss';

const HolyGrailSidebar = ({ className = '' }) => {
  return (
    <aside className={`${styles.HolyGrailSidebar} ${className}`}>
      <ul>
        <li>Engage</li>
        <li>Warp Speed</li>
        <li>Photon Torpedos</li>
        <li>Deflector Shields</li>
        <li>Beam Team Down</li>
        <li>Probe Planet</li>
      </ul>
    </aside>
  );
};

export default HolyGrailSidebar;
