import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Router from 'next/router';
import Swal from 'sweetalert2';
import { FaCompass, FaSearch } from 'react-icons/fa';

import AppMenu from '../components/AppMenu';
import Loading from '../components/Loading';
import Map from '../components/Map';
import VirusSvg from '../public/assets/icons/virus.svg';

import auth0 from '../lib/auth0';
import getCurrentDate from '../util/getCurrentDate';
import { db } from '../lib/firebase';

import '../styles/app.css';

export default function App({ isAuth, hasRegisteredDailyStatus, user }) {
  const [coords, setCoords] = useState({ latitude: null, longitude: null });
  const [radius, setRadius] = useState(10);
  const [filter, setFilter] = useState('all');

  const [nearbyUsers, setNearbyUsers] = useState([]);

  function getUserLocation() {
    if (!navigator.geolocation) {
      Swal.fire({
        title: 'Erro',
        text:
          'Seu navegador não possui suporte a geolocalização. Utilize outro navegador para continuar utilizando o My Daily Status',
        icon: 'error',
        confirmButtonColor: '#961d66',
      }).then((result) => {
        if (result) Router.push('/');
      });
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });
      },
      (err) => {
        Swal.fire({
          title: 'Erro',
          text:
            'Erro ao tentar sua localização. Recarregue a pagina para tentar novamente.',
          icon: 'error',
          confirmButtonColor: '#961d66',
        }).then((result) => {
          document.location.reload(true);
        });
      },
      { timeout: 10000 }
    );
  }

  async function getNearbUsers() {
    const response = await axios.get('/api/nearby-users', {
      params: {
        latitude: parseFloat(coords.latitude),
        longitude: parseFloat(coords.longitude),
        filter,
        radius: parseFloat(radius),
      },
      headers: {
        userId: user.sub,
      },
    });

    const { data } = response;
    setNearbyUsers(data.nearbyUsers);
  }

  useEffect(() => {
    if (!isAuth) {
      Router.push('/');
      return;
    }
    if (!hasRegisteredDailyStatus) {
      Router.push('/status');
      return;
    }

    getUserLocation();
  }, []);

  useEffect(() => {
    if (coords.latitude && coords.longitude) getNearbUsers();
  }, [coords]);

  if (isAuth && coords.latitude && coords.longitude) {
    return (
      <>
        <AppMenu user={user} />

        <Head>
          <title>My Dayly Status </title>
          <meta property="og:title" content="My page title" key="title" />
        </Head>

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

          <div className="filter-bar">
            <div className="input-container">
              <div className="icon">
                <FaCompass color="#fff" size={24} />
              </div>
              <input
                value={radius}
                type="number"
                onChange={(e) => setRadius(e.target.value)}
                placeholder="Raio de busca (KM)"
              />
              <p>KM</p>
            </div>

            <div className="select-container">
              <div className="icon">
                <VirusSvg fill="#fff" />
              </div>

              <select
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
              >
                <option value="covid">Covid</option>
                <option value="suspect">Suspeitos</option>
                <option value="all">Todos as pessoas</option>
              </select>
            </div>

            <button
              type="button"
              onClick={() => getNearbUsers()}
              className="search-button"
            >
              <FaSearch color="#fff" size={18} />
            </button>
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
  // Verifica se o usuário está logado
  if (!session) {
    return {
      props: {
        isAuth: false,
      },
    };
  }

  /*
   * Verifica se o usuário já cadastrou seu status diario
   */
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

  return {
    props: {
      isAuth: true,
      hasRegisteredDailyStatus: true,
      user: session.user,
    },
  };
}
