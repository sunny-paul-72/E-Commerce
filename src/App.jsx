import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage'; // Import LoginPage component
import SignUpPage from './pages/SignupPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // If product already exists in cart, increase the quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Otherwise, add the product with initial quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <>
      <div className="App">
        <Header cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
