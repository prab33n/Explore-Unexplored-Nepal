import React, { useState } from 'react';
import getCategoryImage from '../utils/getCategoryImage';

const ProductCard = ({ location }) => {
  const [showMore, setShowMore] = useState(false);
  const image = getCategoryImage(location.category);

  return (
    <div
      className="card shadow-sm rounded-4 border-0"
      style={{
        maxWidth: '400px',
        margin: '20px auto',
        backgroundColor: '#f0fdf4', // Light green background
        color: '#1b4332', // Dark green text color
      }}
    >
      <img
        src={image}
        className="card-img-top img-fluid"
        alt={location.name}
        style={{
          height: '250px',
          objectFit: 'cover',
          borderRadius: '4px 4px 0 0',
          filter: 'brightness(0.95)',
        }}
      />
      <div className="card-body text-center p-4">
        <h5
          className="card-title fw-bold mb-3"
          style={{
            color: '#2d6a4f', // Medium green for title
            textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
          }}
        >
          {location.name}
        </h5>
        <p className="card-text mb-2">
          <strong>Province:</strong> {location.province}
        </p>
        <p className="card-text mb-2">
          <strong>District:</strong> {location.district}
        </p>

        {showMore ? (
          <>
            <p className="card-text mb-2">
              <strong>Municipality:</strong> {location.municipality}
            </p>
            <p className="card-text mb-2">
              <strong>Address:</strong> {location.address}
            </p>
            <p className="card-text mb-2">
              <strong>Description:</strong> {location.description}
            </p>
            <p className="card-text mb-2">
              <strong>Category:</strong> {location.category}
            </p>
          </>
        ) : (
          <p className="card-text mb-2">
             <strong>Province:</strong> {location.province}
          </p>
        )}

        <button
          onClick={() => setShowMore(!showMore)}
          className="btn mt-3"
          style={{
            borderRadius: '20px',
            padding: '8px 16px',
            backgroundColor: showMore ? '#2d6a4f' : '#2d8659', // Green shades for toggle state
            color: showMore ? '#fff' : '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
        >
          {showMore ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
