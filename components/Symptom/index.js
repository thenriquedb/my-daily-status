import React from 'react';
import './styles.css';

export default function Symptom({ symptom = {}, selected = false, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(symptom.name)}
      className={`symptom-icon-container ${selected && 'selected'}`}
    >
      <div className="symptom-icon">
        <img alt={symptom.name} src={symptom.icon} />
      </div>

      <div className="symptom-desc">
        <p>{symptom.name}</p>
      </div>
    </button>
  );
}
