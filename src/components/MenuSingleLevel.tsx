import React from 'react';
import styles from './MenuSingleLevel.module.scss';

const MenuSingleLevel = () => (
  <section className={`${styles.MenuSingleLevel} menu-section`}>
    <h2 className={`menu-heading`}>Single Level Menu</h2>
    <nav id="single-nav" className={`single-nav menu`} role="navigation">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Food</a>
        </li>
        <li>
          <a href="#">Classes</a>
        </li>
        <li>
          <a href="#">Recipes</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
      </ul>
    </nav>
  </section>
);

export default MenuSingleLevel;
