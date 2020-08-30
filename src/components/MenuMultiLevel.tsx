import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './MenuMultiLevel.module.scss';

const MenuMultiLevel = () => {
  const [isFoodToggled, setIsFoodToggled] = useState(false);
  const [isClassesToggled, setIsClassesToggled] = useState(false);
  const [isAboutToggled, setIsAboutToggled] = useState(false);

  return (
    <section className={`${styles.MenuMultiLevel} menu-section`}>
      <h2 className={`menu-heading`}>Multi-Level Menu</h2>
      <nav
        id="multi-level-nav"
        className={`${styles.MultiLevelNav}`}
        role="navigation"
      >
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li className={`${styles.HasChildren}`}>
            <span>
              Food
              <button
                className={styles.DropdownToggle}
                aria-expanded={isFoodToggled}
                onClick={() => setIsFoodToggled(!isFoodToggled)}
              >
                {isFoodToggled ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </span>
            <ul
              className={`${styles.SubMenu} ${
                isFoodToggled ? styles.SubMenuOpen : ''
              }`}
            >
              <li>
                <a href="#">Chef for Hire</a>
              </li>
              <li>
                <a href="#">Catering</a>
              </li>
              <li>
                <a href="#">Restaurant</a>
              </li>
            </ul>
          </li>

          <li className={`${styles.HasChildren}`}>
            <span>
              Classes
              <button
                className={styles.DropdownToggle}
                aria-expanded={isClassesToggled}
                onClick={() => setIsClassesToggled(!isClassesToggled)}
              >
                {isClassesToggled ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </span>
            <ul
              className={`${styles.SubMenu} ${
                isClassesToggled ? styles.SubMenuOpen : ''
              }`}
            >
              <li>
                <a href="#">Class Schedule</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Breakfast Class</a>
              </li>
              <li>
                <a href="#">Brunch Class</a>
              </li>
              <li>
                <a href="#">Lunch Class</a>
              </li>
              <li>
                <a href="#">Dinner Class</a>
              </li>
              <li>
                <a href="#">Dessert Class</a>
              </li>
              <li>
                <a href="#">Baking Class</a>
              </li>
              <li>
                <a href="#">Canning Class</a>
              </li>
              <li>
                <a href="#">Shopping Class</a>
              </li>
              <li>
                <a href="#">Tools Class</a>
              </li>
            </ul>
          </li>

          <li className={`${styles.HasChildren}`}>
            <span>
              About
              <button
                className={styles.DropdownToggle}
                aria-expanded={isAboutToggled}
                onClick={() => setIsAboutToggled(!isAboutToggled)}
              >
                {isAboutToggled ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </span>
            <ul
              className={`${styles.SubMenu} ${
                isAboutToggled ? styles.SubMenuOpen : ''
              }`}
            >
              <li>
                <a href="#">The Eat Story</a>
              </li>
              <li>
                <a href="#">Meet the Chef</a>
              </li>
              <li>
                <a href="#">Meet the Team</a>
              </li>
              <li>
                <a href="#">Our Vendors</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default MenuMultiLevel;
