// src/components/ShoeList.js
import React from 'react';
import ShoeItem from './ShoeItem';

const ShoeList = ({ shoes, onAdd }) => (
  <div>
    <h2>Available Shoes</h2>
    {shoes.map(shoe => (
      <ShoeItem key={shoe.id} shoe={shoe} onAdd={onAdd} />
    ))}
  </div>
);

export default ShoeList;
