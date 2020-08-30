import React from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaYoutube,
  FaInstagramSquare,
} from 'react-icons/fa';
import styles from './MenuMixed.module.scss';

const MenuMixed = () => (
  <section className={`${styles.MenuMixed} menu-section`}>
    <h2 className={`menu-heading`}>Mixed Menu</h2>
    <nav id="mixed-nav" className={`mixed-nav menu`} role="navigation">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li className="has-children">
          <a href="#">
            Food <button className="dropdown-toggle">Open</button>
          </a>
          <ul className="sub-menu">
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
        <li className="has-children">
          <a href="#">
            Classes<button className="dropdown-toggle">Open</button>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="#">Class Schedule</a>
              <a href="#">Register</a>
              <a href="#">Breakfast Class</a>
              <a href="#">Brunch Class</a>
              <a href="#">Lunch Class</a>
              <a href="#">Dinner Class</a>
              <a href="#">Dessert Class</a>
              <a href="#">Baking Class</a>
              <a href="#">Canning Class</a>
              <a href="#">Shopping Class</a>
              <a href="#">Tools Class</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">About</a>
          <ul>
            <li>
              <a href="#">The Eat Story</a>
              <a href="#">Meet the Chef</a>
              <a href="#">Meet the Team</a>
              <a href="#">Our Vendors</a>
              <a href="#">Legal</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>

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

export default MenuMixed;
