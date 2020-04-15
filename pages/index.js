import React from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import Statistics from '../components/Statistics';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/index.css';

const Index = ({ cases }) => {
  return (
    <>
      <Header />
      <main className="home-container">
        <div className="bg-filter">
          <div className="content">
            <h1>
              Uma das principais formas de ajudar o controle da Covid-19 é saber
              onde ela está
            </h1>
            <h2>
              {' '}
              E se você soubesse como as pessoas ao seu redor estivessem?{' '}
            </h2>
            <p>
              Você compartilha como você está hoje, e só assim consegue
              visualizar as pessoas a sua volta de forma anônima. Você
              compartilha como você está hoje, e só assim consegue visualizar as
              pessoas a sua volta de forma anônima.
            </p>

            <Link href="/api/login">
              <a className="button">Faça sua parte você também</a>
            </Link>
          </div>
        </div>

        <section className="section">
          <div className="section-content ">
            <div className="protects-your-community">
              <img src="/peoples.svg" alt="Peoples on Park" />
              <div>
                <h1> Proteja você e toda a sua comunidade </h1>
                <p>
                  Donec nec molestie metus. Integer finibus fringilla arcu, vel
                  suscipit urna vestibulum eget. Morbi eget purus pellentesque,
                  tempor nibh eu, pellentesque nunc. Morbi pulvinar magna sit
                  amet scelerisque scelerisque.
                </p>
              </div>
            </div>

            <div className="share-your-status">
              <div>
                <h1>
                  {' '}
                  COMPARTILHE SEU STATUS PARA VISUALZIAR OS DAS OUTRAS PESSOAS{' '}
                </h1>
                <p>
                  Donec nec molestie metus. Integer finibus fringilla arcu, vel
                  suscipit urna vestibulum eget. Morbi eget purus pellentesque,
                  tempor nibh eu, pellentesque nunc. Morbi pulvinar magna sit
                  amet scelerisque scelerisque.
                </p>
              </div>
              <img src="/share.svg" alt="Share " />
            </div>
          </div>
        </section>

        <Statistics todayCases={cases[1]} />
      </main>
      <Footer />
    </>
  );
};

Index.getInitialProps = async function () {
  const response = await fetch(
    'https://api.covid19api.com/live/country/brazil'
  );
  const data = await response.json();
  return { cases: data };
};

export default Index;
