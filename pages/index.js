import React from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import Statistics from '../components/Statistics';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/index.css';

const Index = ({ cases }) => {
  const { brazil, world } = cases;

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

        <Statistics
          title="ESTATÍSTICAS DO BRASIL"
          todayCases={brazil[brazil.length - 1]}
        />
        <Statistics title="ESTATÍSTICAS DO MUNDO" todayCases={world} />
      </main>
      <Footer />
    </>
  );
};

Index.getInitialProps = async function () {
  const worldCases = await await fetch(
    'https://api.covid19api.com/world/total'
  );

  const brazilCases = await fetch(
    'https://api.covid19api.com/live/country/brazil'
  );

  const dataBrazil = await brazilCases.json();
  const dataWorld = await worldCases.json();

  return {
    cases: {
      brazil: dataBrazil,
      world: {
        Confirmed: dataWorld.TotalConfirmed,
        Deaths: dataWorld.TotalDeaths,
        Recovered: dataWorld.TotalRecovered,
      },
    },
  };
};

export default Index;
