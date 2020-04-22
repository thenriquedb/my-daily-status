import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Router from 'next/router';
import AppMenu from '../components/AppMenu';
import Loading from '../components/Loading';
import Map from '../components/Map';

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
  const [coords, setCoords] = useState({ latitude: null, longitude: null });

  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });
      });
    } else {
      alert('Seu navegador não possui suporte a geolocalização');
      Router.push('/');
    }
  }

  useEffect(() => {
    if (!isAuth) Router.push('/');
    if (!hasRegisteredDailyStatus) Router.push('/status');

    getUserLocation();

    // await axios.post('/api/user/')
  }, []);

  if (isAuth && coords.latitude && coords.longitude) {
    return (
      <>
        <AppMenu user={user} />
        <div className="app-container">
          <Map
            nearbyUsers={nearbyUsers}
            user={user}
            defaultCenter={{
              lat: coords.latitude,
              lng: coords.longitude,
            }}
            zoom={13}
          />
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
    .collection('users')
    .doc(session.user.sub)
    .collection('history')
    .doc(currentDate)
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
    .collection('history')
    .doc('2020-04-20')
    .collection('all')
    .near({
      center: coordinates,
      radius: 1000000,
    })
    .get();

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
