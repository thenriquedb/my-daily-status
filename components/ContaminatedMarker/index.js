import React from 'react';
import './styles.css';

import VirusSvg from '../../public/assets/icons/virus.svg';

const ContaminatedMarker = ({ data }) => {
  return (
    <div
      className={`contaminated-marker ${data.status === 'covid' && 'covid'}`}
    >
      <div className="contaminated-marker-popup">
        <h2> doidmias</h2>
      </div>
      <VirusSvg />
    </div>
  );
};

export default ContaminatedMarker;
