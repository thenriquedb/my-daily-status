import React from 'react';
import './styles.css';

import VirusSvg from '../../public/assets/icons/virus.svg';

const ContaminatedMarker = ({ data }) => {
  return (
    <div
      className={`contaminated-marker ${
        data.status === 'covid' ? 'covid' : 'suspect'
        }`}
    >
      <VirusSvg />
      {/* <img src="/assets/icons/virus.svg" /> */}
    </div>
  );
};

export default ContaminatedMarker;
