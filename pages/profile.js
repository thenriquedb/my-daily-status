import React, { useEffect } from 'react';
import Router from 'next/router';

import AppMenu from '../components/AppMenu';
import Loading from '../components/Loading';
import auth0 from '../lib/auth0';

import '../styles/profile.css';

export default function profile({ user, isAuth }) {
  useEffect(() => {
    if (!isAuth) Router.push('/');
  }, [isAuth]);

  if (isAuth) {
    return (
      <>
        <AppMenu user={user} />
        <div className="profile-container">
          <div className="content">
            <div className="header">
              <img src={user.picture} />
              <h1>{user.name}</h1>
              <p>Arcos/MG</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="center-content fullscreen">
      <Loading />
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req);
  if (session) {
    req.user = session.user;

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
