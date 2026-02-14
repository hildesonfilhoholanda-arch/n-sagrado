
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;
