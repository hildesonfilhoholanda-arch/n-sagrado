
import React from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const minDeposit = subtotal * 0.5;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      
      {/* Content */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b flex justify-between items-center">
          <div className="flex items-center gap-3">
            <ShoppingBag className="accent-gold" />
            <h2 className="text-xl font-bold">Seu Carrinho</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <ShoppingBag size={64} className="text-gray-200 mb-4" />
              <p className="text-gray-500 mb-6">Seu carrinho está vazio.</p>
              <Link to="/catalogo" onClick={onClose} className="bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-gold/90 transition-all">
                Explorar Terços
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-sm">{item.name}</h3>
                      <button onClick={() => onRemove(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}/un</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border rounded-md">
                        <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-1 hover:text-gold">
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-1 hover:text-gold">
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-bold text-sm">{(item.price * item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-soft border-t">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">{subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div className="flex justify-between mb-4 border-b border-gray-200 pb-4">
              <div className="flex flex-col">
                <span className="text-gold font-bold text-sm">Entrada Mínima (50%)</span>
                <span className="text-[10px] text-gray-400 leading-tight">Necessário para confirmar pedido</span>
              </div>
              <span className="text-gold font-bold">{minDeposit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            
            <Link 
              to="/checkout" 
              onClick={onClose}
              className="w-full bg-earth text-white flex items-center justify-center gap-2 py-4 rounded-xl font-bold hover:bg-black transition-all group"
            >
              Finalizar Pedido
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
