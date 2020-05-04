import React from 'react';
import auth0 from '../../lib/auth0';
import './styles.css';

import VirusSvg from '../../public/assets/icons/virus.svg';

const ContaminatedMarker = ({ data, userId }) => {
  if (data.id !== userId) {
    return (
      <div
        className={`contaminated-marker ${data.status === 'covid' && 'covid'}`}
      >
        <div className="contaminated-marker-popup">
          <h2> {data.id}</h2>

          <h2> {userId}</h2>
        </div>
        <VirusSvg />
      </div>
    );
  }
};

export default ContaminatedMarker;
