import React from 'react';
import { FaHome, FaCookieBite, FaFile, FaPlane } from 'react-icons/fa';
import styles from './MenuAdvancedNav.module.scss';

const MenuAdvancedNav = () => (
  <section className={`${styles.MenuAdvancedNav} menu-section`}>
    <h2 className={`menu-heading`}>Advanced Nav Menu</h2>
    <nav id="advanced-nav" className={`advanced-nav menu`} role="navigation">
      <ul>
        <li>
          <a href="#">
            <div className={styles.Icon}>
              <FaHome />
            </div>
            <div className={styles.ButtonText}>
              Home
              <span>is where the heard is</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className={styles.Icon}>
              <FaCookieBite />
            </div>
            <div className={styles.ButtonText}>
              Cookies
              <span>are nourishment for the soul</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className={styles.Icon}>
              <FaFile />
            </div>
            <div className={styles.ButtonText}>
              Recipes
              <span>guide you on your journey</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className={styles.Icon}>
              <FaPlane />
            </div>
            <div className={styles.ButtonText}>
              News
              <span>brings new things</span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  </section>
);

export default MenuAdvancedNav;
