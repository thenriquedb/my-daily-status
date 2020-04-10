import React, { useState } from 'react';
import Link from 'next/link';
import './styles.css';

const Header = () => {
  const [menuOn, setMenuOn] = useState(false);

  const toggleMenu = () => {
    setMenuOn(!menuOn);
  };

  return (
    <header className="header">
      <div className="header-container">
        <img src="/logo.png" alt="My Daily Status" />

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
                <Link href="/sobre"> Sobre </Link>
              </li>
              <li>
                <Link href="/cadastro"> Cadastro </Link>
              </li>

              <li>
                <Link href="/login"> Entrar </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
