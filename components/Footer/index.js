import React from 'react';
import { FaLinkedinIn, FaGithubAlt, FaTelegramPlane } from 'react-icons/fa';
import './styles.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="social-icons">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/thenriquedomingues/"
        >
          <FaLinkedinIn color="#961D66" size={26} />
        </a>

        <a target="_blank" href="https://github.com/thenriquedb">
          <FaGithubAlt color="#961D66" size={26} />
        </a>

        <a target="_blank" href="https://t.me/thenrique">
          <FaTelegramPlane color="#961D66" size={26} />
        </a>
      </div>

      <div className="devpleno">
        <a target="_blank" href="https://devpleno.com/">
          <img src="/devPleno.png" alt="Dev Pleno" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
