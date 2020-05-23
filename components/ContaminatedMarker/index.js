import React from 'react';
import './styles.css';

import VirusSvg from '../../public/assets/icons/virus.svg';

const ContaminatedMarker = ({ data }) => {
  return (
    <div
      className={`contaminated-marker ${data.status === 'covid' && 'covid'}`}
    >
      <VirusSvg />
    </div>
  );
};

export default ContaminatedMarker;
