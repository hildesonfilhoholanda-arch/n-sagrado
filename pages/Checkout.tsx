
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, MapPin, Phone, User, Info } from 'lucide-react';
import { CartItem, CustomerInfo } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface CheckoutProps {
  items: CartItem[];
  onClearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onClearCart }) => {
  const navigate = useNavigate();
  const [info, setInfo] = useState<CustomerInfo>({
    name: '',
    phone: '',
    city: '',
    state: ''
  });

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const minDeposit = total * 0.5;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate WhatsApp message
    let message = `*Olá Nó Sagrado! Gostaria de fazer um pedido.*\n\n`;
    message += `*DADOS DO CLIENTE*\n`;
    message += `👤 Nome: ${info.name}\n`;
    message += `📞 Telefone: ${info.phone}\n`;
    message += `📍 Local: ${info.city}/${info.state}\n\n`;
    
    message += `*ITENS DO PEDIDO*\n`;
    items.forEach(item => {
      message += `- ${item.name} (${item.quantity}x): ${ (item.price * item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }\n`;
    });
    
    message += `\n💰 *Total:* ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n`;
    message += `🔒 *Entrada (50%):* ${minDeposit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n\n`;
    message += `_Fico no aguardo das informações para pagamento da entrada e confirmação do pedido._`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    
    // Optional: Clear cart and redirect home
    // onClearCart();
    // navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Seu carrinho está vazio!</h2>
        <button onClick={() => navigate('/catalogo')} className="bg-gold text-white px-8 py-3 rounded-full font-bold">Voltar ao Catálogo</button>
      </div>
    );
  }

  return (
    <div className="bg-soft min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-earth font-bold mb-8 hover:translate-x-1 transition-transform"
        >
          <ArrowLeft size={20} /> Voltar
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="bg-white p-8 rounded-3xl shadow-sm h-fit order-2 lg:order-1">
            <h2 className="text-2xl font-bold mb-6">Resumo do Pedido</h2>
            <div className="space-y-4 mb-8">
              {items.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{item.quantity}x {item.name}</span>
                  <span className="font-bold">{(item.price * item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-semibold">{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-earth pt-2 border-t">
                <span>Total do Pedido</span>
                <span>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              </div>
              <div className="bg-gold/10 p-4 rounded-xl mt-6 border border-gold/20">
                <div className="flex items-start gap-3">
                  <Info className="text-gold shrink-0 mt-1" size={18} />
                  <div>
                    <span className="block font-bold text-gold">Confirmação do Pedido</span>
                    <p className="text-xs text-earth/80">
                      Para confirmação do pedido é necessário o pagamento mínimo de <strong>50% ({minDeposit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })})</strong> do valor total via PIX ou transferência.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-3xl shadow-sm order-1 lg:order-2">
            <h2 className="text-2xl font-bold mb-2">Finalizar Pedido</h2>
            <p className="text-gray-500 mb-8">Preencha seus dados para gerarmos o pedido no WhatsApp.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400 block ml-2">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input 
                    required 
                    type="text" 
                    placeholder="Como podemos te chamar?"
                    className="w-full bg-soft pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold border-none"
                    value={info.name}
                    onChange={e => setInfo({...info, name: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400 block ml-2">Telefone (WhatsApp)</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input 
                    required 
                    type="tel" 
                    placeholder="(00) 00000-0000"
                    className="w-full bg-soft pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold border-none"
                    value={info.phone}
                    onChange={e => setInfo({...info, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400 block ml-2">Cidade</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                    <input 
                      required 
                      type="text" 
                      placeholder="Sua cidade"
                      className="w-full bg-soft pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold border-none"
                      value={info.city}
                      onChange={e => setInfo({...info, city: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400 block ml-2">Estado</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="UF"
                    maxLength={2}
                    className="w-full bg-soft px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold border-none uppercase text-center"
                    value={info.state}
                    onChange={e => setInfo({...info, state: e.target.value})}
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#25D366] text-white flex items-center justify-center gap-3 py-5 rounded-2xl font-bold text-lg hover:bg-[#128C7E] transition-all shadow-xl shadow-green-100 mt-8"
              >
                <Send size={24} /> Finalizar pelo WhatsApp
              </button>
              <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest">Ao clicar, você será redirecionado para o nosso WhatsApp oficial.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
