import React, { useState } from 'react';
import Link from 'next/link';
import auth0 from '../../lib/auth0';
import './styles.css';

export default function AppMenu({ user }) {
  const [show, setShow] = useState(false);

  function showMenu() {
    setShow(!show);
  }

  async function handleLogout() {
    // auth0.handleLogout(req)
    alert('deslogado');
  }

  return (
    <div className={`app-menu ${show && 'show'}`}>
      <button type="button" onClick={showMenu}>
        <img className="avatar" src={user.picture} alt="Avatar" />
      </button>

      <div className="app-menu-options">
        <Link href="/profile">
          <a>
            <img className="avatar" src={user.picture} alt="Avatar" />
          </a>
        </Link>
        <p>{user.name}</p>
        {/* <span> Você possui altas chances de está contaminado </span> */}

        <button type="button" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </div>
  );
}
