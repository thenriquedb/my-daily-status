import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Swal from 'sweetalert2';
import './styles.css';

export default function AppMenu({ user, handleLogout }) {
  const [show, setShow] = useState(false);

  function showMenu() {
    setShow(!show);
  }

  async function handleLogout() {
    Swal.fire({
      title: 'Deseja mesmo sair?',
      text: 'Certeza que vai nos deixar? :(',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#961d66',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      cancelButtonColor: '#ff5148',
      customClass: {
        confirmButton: 'swal-confirm-button',
      },
    }).then(async (result) => {
      if (result.value) {
        try {
          await axios.delete('/api/logout');
        } catch (error) {
          Swal.fire({
            title: 'Erro',
            text: 'Ocorreu um erro ao realizar o logout. Tente novamente.',
            icon: 'error',
            confirmButtonColor: '#961d66',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'swal-confirm-button',
            },
          });
        }
      }
    });
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

        <button type="button" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </div>
  );
}
