// src/components/ShoeItem.js
import React from 'react';

const ShoeItem = ({ shoe, onAdd }) => (
  <div style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
    <img src={shoe.image} alt={shoe.name} />
    <h3>{shoe.name}</h3>
    <p>Price: ${shoe.price}</p>
    <button onClick={() => onAdd(shoe)}>Add to Cart</button>
  </div>
);

export default ShoeItem;
