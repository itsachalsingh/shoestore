// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems, onRemove }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} style={{ marginBottom: 10 }}>
            <strong>{item.name}</strong> - ${item.price} × {item.quantity}
            <button onClick={() => onRemove(item.id)} style={{ marginLeft: 10 }}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
