import React, { useState } from 'react';
import HolyGrailHeader from '../components/HolyGrailHeader';
import HolyGrailFooter from '../components/HolyGrailFooter';
import HolyGrailSidebar from '../components/HolyGrailSidebar';
import HolyGrailMain from '../components/HolyGrailMain';
import styles from './HolyGrail.module.scss';

const HolyGrail = () => {
  const [align, setAlign] = useState('left');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isColumn, setIsColumn] = useState(false);

  const handleSetAlign = (alignment: string) => {
    setAlign(alignment);
  };

  const handleSetColumn = () => {
    setIsColumn(!isColumn);
  };

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.HolyGrail}>
      <HolyGrailHeader
        className={styles.HGHeader}
        onSetAlign={(val: string) => handleSetAlign(val)}
        onSidebarToggle={() => handleToggleSidebar()}
        onSetColumn={() => handleSetColumn()}
      />

      <div className={`${styles.HGContent} ${isColumn ? styles.IsColumn : ''}`}>
        <HolyGrailMain className={styles.HGMain} />

        <HolyGrailSidebar
          className={`${styles.HGSidebar} ${
            !sidebarOpen ? styles.SidebarCollapsed : ''
          } ${align === 'right' ? styles.SidebarLeft : ''}`}
        />
      </div>

      <HolyGrailFooter className={styles.HGFooter} />
    </div>
  );
};

export default HolyGrail;
