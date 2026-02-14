
import React from 'react';
/* Added Heart to imports from lucide-react */
import { FileText, Download, ChevronRight, Share2, Heart } from 'lucide-react';
import { BRAND_NAME } from '../constants';

const Downloads: React.FC = () => {
  return (
    <div className="bg-soft min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-[40px] overflow-hidden shadow-sm flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-earth p-12 text-white flex flex-col justify-center">
            <FileText className="text-gold mb-8" size={64} />
            <h1 className="text-4xl font-bold mb-4">Catálogo Digital {new Date().getFullYear()}</h1>
            <p className="text-white/70 mb-8 leading-relaxed">
              Tenha acesso a nossa coleção completa em formato PDF. Ideal para visualizar offline ou compartilhar com amigos e familiares.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Alta Resolução</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Atualizado Mensalmente</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Guia de Devoção Incluso</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-12 flex flex-col items-center justify-center text-center">
            <div className="w-32 h-32 bg-soft rounded-full flex items-center justify-center mb-8">
              <Download className="text-gold animate-bounce" size={48} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Pronto para baixar?</h2>
            <p className="text-gray-500 mb-8">O arquivo possui aproximadamente 12MB.</p>
            
            <button 
              className="w-full bg-gold text-white flex items-center justify-center gap-3 py-4 rounded-2xl font-bold hover:bg-gold/90 transition-all shadow-lg shadow-gold/20 mb-4"
              onClick={() => alert('Download iniciado! (Mock de funcionalidade)')}
            >
              Baixar Catálogo Completo <Download size={20} />
            </button>
            
            <button className="flex items-center gap-2 text-earth font-bold hover:underline">
              <Share2 size={18} /> Compartilhar com alguém
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 flex items-start gap-4">
            <div className="p-3 bg-soft rounded-2xl text-gold shrink-0">
              <FileText size={24} />
            </div>
            <div>
              <h3 className="font-bold mb-2 text-earth uppercase tracking-widest text-xs">Guia de Oração</h3>
              <p className="text-sm text-gray-500 mb-4">Aprenda a rezar o Santo Terço de forma contemplativa.</p>
              <button className="text-gold font-bold flex items-center gap-1 text-sm">Download <ChevronRight size={16} /></button>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 flex items-start gap-4">
            <div className="p-3 bg-soft rounded-2xl text-gold shrink-0">
              <Heart size={24} />
            </div>
            <div>
              <h3 className="font-bold mb-2 text-earth uppercase tracking-widest text-xs">Manual de Cuidados</h3>
              <p className="text-sm text-gray-500 mb-4">Dicas de como conservar seu terço artesanal por anos.</p>
              <button className="text-gold font-bold flex items-center gap-1 text-sm">Download <ChevronRight size={16} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
