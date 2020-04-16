import React, { useState } from 'react';
import auth0 from '../../lib/auth0';
import './styles.css';

export default function AppMenu({ user }) {
  const [show, setShow] = useState(false);

  function showMenu() {
    setShow(!show);
  }

  async function handleLogout() {
    alert('deslogado');
  }

  async function handleEdit() {
    alert('editar');
  }

  return (
    <div className={`app-menu ${show && 'show'}`}>
      <button type="button" onClick={showMenu}>
        <img className="avatar" src={user.picture} alt="Avatar" />
      </button>

      <div className="app-menu-options">
        <img className="avatar" src={user.picture} alt="Avatar" />
        <p>{user.name}</p>
        {/* <span> Você possui altas chances de está contaminado </span> */}

        <button type="button" onClick={() => handleEdit}>
          Editar perfil
        </button>

        <button type="button" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </div>
  );
}
