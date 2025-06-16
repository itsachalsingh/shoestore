
import './App.css'
import React, { useState } from 'react';
import shoesData from './data/shoes';
import ShoeList from './components/ShoeList';
import Cart from './components/Cart';

function App() {

  const [cart, setCart] = useState([]);

  const handleAddToCart = (shoe) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === shoe.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...shoe, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (shoeId) => {
    setCart(prevCart => {
      const item = prevCart.find(i => i.id === shoeId);
      if (item.quantity === 1) {
        return prevCart.filter(i => i.id !== shoeId);
      } else {
        return prevCart.map(i =>
          i.id === shoeId ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
    });
  };

  return (
    <>
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      <div style={{ flex: 1 }}>
        <ShoeList shoes={shoesData} onAdd={handleAddToCart} />
      </div>
      <div style={{ flex: 1 }}>
        <Cart cartItems={cart} onRemove={handleRemoveFromCart} />
      </div>
    </div>
    
    </>
  )
}

export default App
