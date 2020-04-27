import React from 'react';
import GoogleMapReact from 'google-map-react';

import UserMarker from '../UserMarker';
import ContaminatedMarker from '../ContaminatedMarker';

import './styles.css';

const Map = ({ user, defaultCenter, nearbyUsers, zoom = 15 }) => {
  console.log(nearbyUsers);
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultCenter}
        defaultZoom={zoom}
        options={{ fullscreenControl: false, zoomControl: false }}
      >
        <UserMarker
          user={user}
          lat={defaultCenter.lat}
          lng={defaultCenter.lng}
        />

        {nearbyUsers.map((people) => (
          <ContaminatedMarker
            key={people.id}
            lat={people.coordinates.latitude}
            lng={people.coordinates.longitude}
            data={people}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
