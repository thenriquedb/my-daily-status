import React, { useEffect } from 'react';
import Router from 'next/router';
import AppMenu from '../components/AppMenu';
import Loading from '../components/Loading';

import auth0 from '../lib/auth0';
import getCurrentDate from '../util/getCurrentDate';
import { db } from '../lib/firebase';

import '../styles/app.css';

export default function App({
  isAuth,
  hasRegisteredDailyStatus,
  user,
  nearbyUsers = [],
}) {
  useEffect(() => {
    if (!isAuth) Router.push('/');
    if (!hasRegisteredDailyStatus) Router.push('/status');
    // if (!nearbyUsersList)
  }, [isAuth]);

  if (isAuth) {
    return (
      <div className="app-container">
        <AppMenu user={user} />
      </div>
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

  // Verifica se o usuário está logado
  if (!session) {
    return {
      props: {
        isAuth: false,
      },
    };
  }

  const currentDate = getCurrentDate();

  const userDailyStatus = await db
    .collection('markers')
    .doc(currentDate)
    .collection('checks')
    .doc(session.user.sub)
    .get();

  const todayRegistered = userDailyStatus.data();

  if (!todayRegistered) {
    return {
      props: {
        isAuth: true,
        hasRegisteredDailyStatus: false,
        user: session.user,
      },
    };
  }

  // Caso o usuário já tenha cadastrado seu status diário, será verificado todos os
  // usúarios que estao proximos dele
  const { coordinates } = todayRegistered;

  const nearbyUsers = await db
    .collection('markers')
    .doc(currentDate)
    .collection('checks')
    .near({
      center: coordinates,
      radius: 1000,
    })
    .get();

  nearbyUsers.forEach((doc) => {
    console.log(doc.id, doc.data());
  });

  const nearbyUsersList = [];
  nearbyUsers.docs.forEach((doc) => {
    nearbyUsersList.push({
      id: doc.id,
      status: doc.data().status,
      coordinates: {
        longitude: doc.data().coordinates.longitude,
        latitude: doc.data().coordinates.latitude,
      },
    });
  });

  return {
    props: {
      isAuth: true,
      hasRegisteredDailyStatus: true,
      user: session.user,
      nearbyUsers: nearbyUsersList,
    },
  };
}
