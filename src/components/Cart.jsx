// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems, onRemove }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <span>{item.name} × {item.quantity}</span>
              <button onClick={() => onRemove(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">Total: ${total.toFixed(2)}</div>
        </>
      )}
    </div>
  );
};

export default Cart;
