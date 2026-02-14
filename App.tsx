
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Checkout from './pages/Checkout';
import Downloads from './pages/Downloads';
import { Product, CartItem } from './types';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + delta) } 
          : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header 
          cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
          onCartToggle={() => setIsCartOpen(true)} 
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog onAddToCart={addToCart} />} />
            <Route path="/checkout" element={<Checkout items={cart} onClearCart={clearCart} />} />
            <Route path="/downloads" element={<Downloads />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
        
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cart}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
        />
      </div>
    </Router>
  );
};

export default App;
