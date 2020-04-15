import React, { useEffect } from 'react';
import Router from 'next/router';
import AppMenu from '../components/AppMenu';
import Loading from '../components/Loading';
import auth0 from '../lib/auth0';

import '../styles/app.css';

export default function App({ isAuth, user }) {
  useEffect(() => {
    if (isAuth) return;
    Router.push('/');
  }, [isAuth]);

  if (isAuth) {
    return (
      <div className="app-container">
        <AppMenu user={user} />
      </div>
    );
  }
  return (
    <div className="loading-container">
      <Loading />
    </div>
  );
}

// Processa o que tem de processar no servidor e manda para a pagina
// Funcina como uma API porém com tela
export async function getServerSideProps({ req, res }) {
  // pega o cookie da sessão do usuario
  const session = await auth0.getSession(req);
  if (session) {
    return {
      props: {
        isAuth: true,
        user: session.user,
      },
    };
  }

  return {
    props: {
      isAuth: false,
    },
  };
}
