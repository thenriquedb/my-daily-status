import React, { useState } from 'react';
import Link from 'next/link';
import './styles.css';

export default function Header() {
  const [menuOn, setMenuOn] = useState(false);

  function toggleMenu() {
    setMenuOn(!menuOn);
  }

  return (
    <header className="container">
      <div className="content">
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
}
