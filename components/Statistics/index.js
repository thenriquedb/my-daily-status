import React from 'react';
import './styles.css';

function Statistics({ todayCases }) {
  return (
    <section className="section section-dark">
      <h1 className="section-title">Estatísticas do Brasil </h1>
      <div className="section-content">
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
  );
}

export default Statistics;
