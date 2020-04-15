import React, { useEffect } from 'react';
import Router from 'next/router';
import AppMenu from '../components/AppMenu';
import auth0 from '../lib/auth0';

export default function App({ loggedIn, user }) {
  useEffect(() => {
    if (loggedIn) return;
    Router.push('/');
  }, [loggedIn]);

  if (loggedIn) {
    return (
      <div className="app-container">
        <AppMenu user={user} />
      </div>
    );
  }
  return null;
}

// Processa o que tem de processar no servidor e manda para a pagina
// Funcina como uma API porém com tela
export async function getServerSideProps({ req, res }) {
  // pega o cookie da sessão do usuario
  const session = await auth0.getSession(req);
  if (session) {
    return {
      props: {
        loggedIn: true,
        user: session.user,
      },
    };
  }
  return {
    props: {
      loggedIn: false,
    },
  };
}
