import React from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaYoutube,
  FaInstagramSquare,
} from 'react-icons/fa';
import styles from './MenuSocial.module.scss';

const MenuSocial = () => (
  <section className={`${styles.MenuSocial} menu-section`}>
    <h2 className={`menu-heading`}>Social Menu</h2>
    <nav id="social-nav" className={`social-nav menu`} role="navigation">
      <ul>
        <li>
          <a href="#">
            <span className={styles.SrOnly} aria-hidden="true">
              Twitter
            </span>
            <FaTwitterSquare />
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.SrOnly} aria-hidden="true">
              Facebook
            </span>
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.SrOnly} aria-hidden="true">
              LinkedIn
            </span>
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.SrOnly} aria-hidden="true">
              Youtube
            </span>
            <FaYoutube />
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.SrOnly} aria-hidden="true">
              Instagram
            </span>
            <FaInstagramSquare />
          </a>
        </li>
      </ul>
    </nav>
  </section>
);

export default MenuSocial;
