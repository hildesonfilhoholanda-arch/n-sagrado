
import React, { useState } from 'react';
import { ShoppingCart, Heart, Plus, Minus, Search } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface CatalogProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

const Catalog: React.FC<CatalogProps> = ({ onAddToCart }) => {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    PRODUCTS.reduce((acc, p) => ({ ...acc, [p.id]: 1 }), {})
  );
  const [category, setCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Todos', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = category === 'Todos' || p.category === category;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const updateQuantity = (id: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  return (
    <div className="bg-soft min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-in slide-in-from-top duration-700">
          <h1 className="text-5xl font-bold text-earth mb-4">Catálogo Sagrado</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Escolha a peça que mais toca seu coração. Todos os nossos produtos são feitos à mão com oração e dedicação.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  category === cat ? 'bg-earth text-white' : 'bg-white text-gray-500 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar terço..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white pl-10 pr-4 py-2 rounded-full border border-gray-100 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                  <Heart size={20} />
                </button>
                <div className="absolute top-4 left-4 bg-gold text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {product.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-earth mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-6 flex-1">{product.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-earth">
                    {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                  
                  <div className="flex items-center gap-2 bg-soft p-1 rounded-xl">
                    <button 
                      onClick={() => updateQuantity(product.id, -1)}
                      className="p-1 hover:text-gold transition-colors"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="w-8 text-center font-bold">{quantities[product.id]}</span>
                    <button 
                      onClick={() => updateQuantity(product.id, 1)}
                      className="p-1 hover:text-gold transition-colors"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                    <span>Total p/ item</span>
                    <span>{(product.price * quantities[product.id]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                  </div>
                  <button 
                    onClick={() => onAddToCart(product, quantities[product.id])}
                    className="w-full bg-gold text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gold/90 active:scale-[0.98] transition-all shadow-lg shadow-gold/20"
                  >
                    <ShoppingCart size={20} /> Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <h3 className="text-2xl font-bold text-gray-400">Nenhum terço encontrado com estes critérios.</h3>
            <button onClick={() => {setCategory('Todos'); setSearchTerm('');}} className="mt-4 text-gold font-bold hover:underline">Limpar Filtros</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
