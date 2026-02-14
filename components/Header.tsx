
import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND_NAME } from '../constants';

interface HeaderProps {
  cartCount: number;
  onCartToggle: () => void;
}

const CrossIcon = ({ className }: { className?: string }) => (
  <svg 
    width="20" 
    height="28" 
    viewBox="0 0 20 28" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path d="M10 2V26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M4 10H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const Header: React.FC<HeaderProps> = ({ cartCount, onCartToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Catálogo', path: '/catalogo' },
    { name: 'Sobre Nós', path: '/#sobre' },
    { name: 'Downloads', path: '/downloads' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-earth"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <CrossIcon className="accent-gold group-hover:scale-110 transition-transform duration-300" />
          <h1 className="text-2xl font-bold tracking-tight text-earth">{BRAND_NAME}</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium uppercase tracking-widest text-earth/80">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Cart Trigger */}
        <button 
          className="relative p-2 hover:bg-gold/10 rounded-full transition-colors group"
          onClick={onCartToggle}
        >
          <ShoppingCart size={24} className="text-earth" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsMenuOpen(false)}
              className="text-earth py-2 border-b border-gray-50 last:border-0"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
