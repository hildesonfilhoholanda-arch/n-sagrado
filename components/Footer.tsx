
import React from 'react';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { BRAND_NAME, TAGLINE, OWNERS, WHATSAPP_DISPLAY, INSTAGRAM_HANDLE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Identity */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-earth mb-2">{BRAND_NAME}</h2>
            <p className="italic text-gray-500 mb-4">{TAGLINE}</p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href={`https://instagram.com/nosagrado_`} target="_blank" rel="noreferrer" className="p-2 bg-soft rounded-full hover:bg-gold hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href={`https://wa.me/5588996488044`} target="_blank" rel="noreferrer" className="p-2 bg-soft rounded-full hover:bg-gold hover:text-white transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Owners & Contact */}
          <div className="text-center">
            <h3 className="font-semibold uppercase tracking-widest text-xs mb-4">Idealizadoras</h3>
            <p className="text-earth mb-2 font-medium">{OWNERS}</p>
            <div className="flex flex-col gap-2 items-center text-gray-600">
              <span className="flex items-center gap-2"><Phone size={16} /> {WHATSAPP_DISPLAY}</span>
              <span className="flex items-center gap-2"><MapPin size={16} /> Juazeiro do Norte, CE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold uppercase tracking-widest text-xs mb-4">Informações</h3>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li><a href="#" className="hover:text-gold">Políticas de Venda</a></li>
              <li><a href="#" className="hover:text-gold">Cuidados com o Terço</a></li>
              <li><a href="#" className="hover:text-gold">Prazos de Entrega</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-50 pt-8 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. Todos os direitos reservados.</p>
          <p className="mt-1">Feito com fé e propósito.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
