import React from 'react';
import fetch from 'isomorphic-unfetch';
import { FaUsers, FaUserShield, FaRetweet } from 'react-icons/fa';

import '../styles/index.css';

const Index = ({ cases }) => {
  const todayCases = cases[1];

  return (
    <main className="home-container">
      <div className="background">
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

            <button>Faça sua parte você também</button>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="section-content ">
          <div className="app-details">
            <div className="app-detail-item">
              <div>
                <FaUsers size={38} color="#fff" />
              </div>
              <p>Mantenha-se protegido. Sua comunidade também.</p>
              <span>
                Aenean sit amet ligula varius, vulputate ex in, imperdiet
                ligula. Sed eu sapien eros. Ut eget facilisis felis.
                Pellentesque dui nibh, tempor id iaculis id, viverra ac lorem.
                Maecenas eget risus velit. Ut id commodo nisi.
              </span>
            </div>

            <div className="app-detail-item">
              <div>
                <FaUserShield size={38} color="#fff" />
              </div>
              <p>Mantenha sua comunidade protegida</p>
              <span>
                Aenean sit amet ligula varius, vulputate ex in, imperdiet
                ligula. Sed eu sapien eros. Ut eget facilisis felis.
                Pellentesque dui nibh, tempor id iaculis id, viverra ac lorem.
                Maecenas eget risus velit. Ut id commodo nisi.
              </span>
            </div>

            <div className="app-details">
              <div className="app-detail-item">
                <div>
                  <FaRetweet size={38} color="#fff" />
                </div>
                <p>Compartilhe como você está</p>
                <span>
                  Aenean sit amet ligula varius, vulputate ex in, imperdiet
                  ligula. Sed eu sapien eros. Ut eget facilisis felis.
                  Pellentesque dui nibh, tempor id iaculis id, viverra ac lorem.
                  Maecenas eget risus velit. Ut id commodo nisi.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <h1 className="section-title">Estatísticas do Brasil </h1>
        <div className="section-content ">
          <div className="covid-infos">
            <div className="covid-info-item">
              <p>{todayCases.Confirmed}</p>
              <span> Confirmados</span>
            </div>

            <div className="covid-info-item">
              <p>{todayCases.Deaths}</p>
              <span> Mortes</span>
            </div>

            <div className="covid-info-item">
              <p>{todayCases.Recovered}</p>
              <span> Recuperados</span>
            </div>
          </div>
        </div>
      </section>
    </main>
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
