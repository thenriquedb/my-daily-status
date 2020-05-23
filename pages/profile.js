import React, { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';

import format from 'date-fns/format';
import pt from 'date-fns/locale/pt-BR';

import AppMenu from '../components/AppMenu';
import Loading from '../components/Loading';
import auth0 from '../lib/auth0';

import { db } from '../lib/firebase';

import '../styles/profile.css';

export default function profile({ user, history, isAuth }) {
  useEffect(() => {
    if (!isAuth) Router.push('/');
  }, [isAuth]);

  if (isAuth) {
    return (
      <>
        <AppMenu user={user} />

        <Head>
          <title>My Dayly Status | Perfil</title>
          <meta property="og:title" content="My page title" key="title" />
        </Head>

        <div className="profile-container">
          <div className="content">
            <div className="header">
              <img src={user.picture} alt="User" />
              <h1>{user.name}</h1>
            </div>

            <div className="symptoms-history">
              <h1> Histórico </h1>

              {history &&
                history.map((day) => {
                  const dateFormated = format(new Date(day.date), 'dd-LLLL', {
                    locale: pt,
                  });

                  return (
                    <div className="symptom-card">
                      <div className="day-cirlce">
                        <b>{dateFormated.split('-')[0]}</b>
                        <span>{dateFormated.split('-')[1]} </span>
                      </div>

                      <div className="symptoms">
                        <b>
                          {day.status === 'covid' && 'Covid'}

                          {day.status === 'suspect' && 'Suspeito'}

                          {day.status === 'healthy' && 'Saúdavel'}
                        </b>
                        <p> {day.symptoms.join(', ')} </p>
                      </div>
                    </div>
                  );
                })}
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
    const userId = session.user.sub;

    const symptomsHistory = await db
      .collection('users')
      .doc(userId)
      .collection('history')
      .get();

    const historyList = [];

    console.log('symptomsHistory.docs.length : ', symptomsHistory.docs.length);
    if (symptomsHistory.docs.length > 0) {
      symptomsHistory.docs.map((item) => {
        historyList.push({
          date: item.id,
          status: item.data().status,
          symptoms: item.data().symptoms,
        });
      });
    }

    return {
      props: {
        isAuth: true,
        user: session.user,
        history: historyList,
      },
    };
  }

  return {
    props: {
      isAuth: false,
    },
  };
}
