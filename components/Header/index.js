import React, { useState } from 'react';
import Link from 'next/link';
import './styles.css';

const Header = () => {
  const [menuOn, setMenuOn] = useState(false);

  const toggleMenu = async () => {
    setMenuOn(!menuOn);
    document.body.style.overflow = !menuOn ? 'hidden' : 'initial';
  };

  return (
    <header id="header">
      <div className="header-container">
        <Link href="/">
          <a>
            <img
              className="header-logo"
              src="/logo.png"
              alt="My Daily Status"
            />
          </a>
        </Link>

        <div className={`menu-section ${menuOn && 'on'}`}>
          <button type="button" onClick={toggleMenu} className="menu-toggle">
            <div className="one" />
            <div className="two" />
            <div className="three" />
          </button>

          <nav>
            <ul>
              <li>
                <Link href="/"> Início </Link>
              </li>
              <li>
                <Link href="/"> Sobre </Link>
              </li>

              <li>
                <Link href="/api/login"> Entrar </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
