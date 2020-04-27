import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';
import Swal from 'sweetalert2';

import auth0 from '../lib/auth0';

import AppMenu from '../components/AppMenu';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import Symptom from '../components/Symptom';

import symptoms from '../json/symptoms.json';

import '../styles/status.css';

export default function status({ user, isAuth }) {
  const [coords, setCoords] = useState({ latitude: null, longitude: null });
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });
      });
    } else {
      Swal.fire({
        title: 'Erro',
        text: 'Seu navegador não possui suporte a geolocalização',
        icon: 'error',
        confirmButtonColor: '#961d66',
        confirmButtonText: 'OK',
      });

      Router.push('/');
    }
  }

  function selectSymptom(symptom) {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((item) => item !== symptom));
      return;
    }

    setSelectedSymptoms([...selectedSymptoms, symptom]);
  }

  async function handleSave() {
    const response = await axios.post('/api/status/store', {
      symptoms: selectedSymptoms,
      coords,
    });

    if (response.status === 200) {
      Swal.fire({
        title: 'Sucesso',
        text: 'Seus sintomas foram salvos com sucesso!',
        icon: 'success',
        confirmButtonColor: '#961d66',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'swal-confirm-button',
        },
      }).then((result) => {
        if (result.value) {
          Router.push('/app');
        }
      });

      return;
    }

    Swal.fire({
      title: 'Erro',
      text: 'Ocorreu um erro ao salvar suas informações. Tente novamente.',
      icon: 'error',
      confirmButtonColor: '#961d66',
      confirmButtonText: 'OK',
      customClass: {
        confirmButton: 'swal-confirm-button',
      },
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
            <div className="nurse-container">
              <img src="assets/icons/nurse.svg" alt="Nurse icon" />
              <p>
                Olá <b>{user.name}</b>, como você está se sentindo hoje?
                Selecione abaixo os sintomas que você esta sentindo. Caso não
                esteja apresentando nenhum, clique em continuar.{' '}
              </p>
            </div>

            <div className="symptoms-container">
              {symptoms.map((symptom) => {
                return (
                  <Symptom
                    key={symptom.value}
                    onClick={selectSymptom}
                    selected={selectedSymptoms.includes(symptom.value)}
                    symptom={symptom}
                  />
                );
              })}
            </div>

            <div className="save-button-container">
              <button type="button" onClick={handleSave}>
                Continuar
              </button>
            </div>
          </div>
        </div>
        <Footer />
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
