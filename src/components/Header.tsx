import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  let { pathname } = useLocation();

  console.log(pathname);

  return (
    <header className={styles.AppHeader}>
      <nav>
        <ul className={styles.NavItems}>
          <li className={styles.NavItem}>
            <NavLink
              to="/"
              exact={true}
              className={styles.NavLink}
              activeClassName={styles.ActiveLink}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.NavItem}>
            <NavLink
              to="/about"
              className={styles.NavLink}
              activeClassName={styles.ActiveLink}
            >
              About
            </NavLink>
          </li>
          <li className={styles.NavItem}>
            <NavLink
              to="/flex-menus"
              className={styles.NavLink}
              activeClassName={styles.ActiveLink}
            >
              Flex Menus
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
