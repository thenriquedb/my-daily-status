import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';
import auth0 from '../lib/auth0';

import AppMenu from '../components/AppMenu';
import Loading from '../components/Loading';
import '../styles/status.css';

export default function status({ user, isAuth }) {
  const [coords, setCoords] = useState({ latitude: null, longitude: null });
  const [status, setStatus] = useState('bem');

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

  function onStatusChange(e) {
    setStatus(e.target.value);
  }

  async function handleSave() {
    const response = await axios.post('/api/status/store', {
      status,
      coords,
    });
  }

  useEffect(() => {
    if (!isAuth) Router.push('/');

    getUserLocation();
  }, [isAuth]);

  if (isAuth) {
    return (
      <>
        <AppMenu user={user} />
        <div className="status-container">
          <div className="content">
            <h1>Como você está se sentindo hoje? </h1>
            lat: {(coords.latitude, coords.latitude)} <br />
            lon: {(coords.latitude, coords.longitude)}
            <div onChange={onStatusChange}>
              <div>
                <input type="radio" name="status" value="bem" />
                <label> Estou bem e sem sintomas </label>
              </div>

              <div>
                <input type="radio" name="status" value="gripe" />
                <label> Estou com sintomas de gripe / resfriado </label>
              </div>

              <div>
                <input type="radio" name="status" value="covid" />
                <label> Estou com sintomas da covid </label>
              </div>
            </div>
            <button onClick={handleSave}> Salvar </button>
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
  // pega o cookie da sessão do usuario
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
