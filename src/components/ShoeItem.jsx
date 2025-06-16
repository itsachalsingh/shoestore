// src/components/ShoeItem.js
import React from 'react';

const ShoeItem = ({ shoe, onAdd }) => (
  <div className="shoe-card">
    <img src={shoe.image} alt={shoe.name} width="100" />
    <h4>{shoe.name}</h4>
    <p>${shoe.price}</p>
    <button onClick={() => onAdd(shoe)}>Add to Cart</button>
  </div>
);

export default ShoeItem;
