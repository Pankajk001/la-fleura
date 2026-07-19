import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('laFleuraCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('laFleuraCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    const existing = cartItems.find(item => item.product.id === product.id);
    if (existing) {
      setCartItems(cartItems.map(item => 
        item.product.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCartItems([...cartItems, { product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
