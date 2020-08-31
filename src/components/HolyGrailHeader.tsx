import React from 'react';
import {
  FaAlignLeft,
  FaAlignRight,
  FaAlignJustify,
  FaChevronLeft,
} from 'react-icons/fa';
import styles from './HolyGrailHeader.module.scss';

interface IHolyGrailHeader {
  onSetAlign: (val: string) => void;
  onSidebarToggle: () => void;
  onSetColumn: () => void;
  className: string;
}

const HolyGrailHeader = ({
  onSetAlign,
  onSidebarToggle,
  onSetColumn,
  className = '',
}: IHolyGrailHeader) => {
  return (
    <header className={`${styles.HolyGrailHeader} ${className}`}>
      <span>Select Layout:</span>

      <button className={`${styles.Button}`} onClick={() => onSetAlign('left')}>
        <FaAlignLeft />
      </button>

      <button
        className={`${styles.Button}`}
        onClick={() => onSetAlign('right')}
      >
        <FaAlignRight />
      </button>

      <button className={`${styles.Button}`} onClick={() => onSetColumn()}>
        <FaAlignJustify />
      </button>

      <button className={`${styles.Button}`} onClick={() => onSidebarToggle()}>
        <FaChevronLeft />
      </button>
    </header>
  );
};

export default HolyGrailHeader;
