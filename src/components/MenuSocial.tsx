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
            <span className="sr-only" aria-hidden="true">
              Twitter
              <FaTwitterSquare />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="sr-only" aria-hidden="true">
              Facebook
              <FaFacebookSquare />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="sr-only" aria-hidden="true">
              LinkedIn
              <FaLinkedin />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="sr-only" aria-hidden="true">
              Youtube
              <FaYoutube />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="sr-only" aria-hidden="true">
              Instagram
              <FaInstagramSquare />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </section>
);

export default MenuSocial;
