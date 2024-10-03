import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ locations }) => {
  return (
    <div className="product-list">
      {locations.map((location, index) => (
        <ProductCard key={index} location={location} />
      ))}
    </div>
  );
};

export default ProductList;
