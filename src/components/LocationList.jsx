import React from 'react';

const LocationList = ({ locations }) => {
  return (
    <div>
      {locations.map((location, index) => (
        <div key={index} className="location-card">
          <h3>{location.name}</h3>
          <p><strong>Province:</strong> {location.province}</p>
          <p><strong>District:</strong> {location.district}</p>
          <p><strong>Municipality:</strong> {location.municipality}</p>
          <p><strong>Address:</strong> {location.address}</p>
          <p><strong>Description:</strong> {location.description}</p>
          <p><strong>Category:</strong> {location.category}</p>
        </div>
      ))}
    </div>
  );
};

export default LocationList;
