import React from 'react';
import './styles.css';

const UserMarker = ({ user }) => (
  <img className="user-marker" src={user.picture} alt={user.name} />
);

export default UserMarker;
