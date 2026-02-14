
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Instagram } from 'lucide-react';
import { BRAND_NAME, TAGLINE, OWNERS, TESTIMONIALS, FAQS, INSTAGRAM_HANDLE } from '../constants';

const CrossIcon = ({ className, size = "md" }: { className?: string, size?: "sm" | "md" | "lg" }) => {
  const dimensions = {
    sm: { w: 20, h: 28, sw: 2 },
    md: { w: 40, h: 56, sw: 2.5 },
    lg: { w: 60, h: 84, sw: 3 }
  }[size];

  return (
    <svg 
      width={dimensions.w} 
      height={dimensions.h} 
      viewBox={`0 0 ${dimensions.w} ${dimensions.h}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path d={`M${dimensions.w/2} 4V${dimensions.h-4}`} stroke="currentColor" strokeWidth={dimensions.sw} strokeLinecap="round"/>
      <path d={`M${dimensions.w*0.2} ${dimensions.h*0.35}H${dimensions.w*0.8}`} stroke="currentColor" strokeWidth={dimensions.sw} strokeLinecap="round"/>
    </svg>
  );
};

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1544521848-f9e4210e1590?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 animate-in fade-in zoom-in duration-1000">
          <div className="flex justify-center mb-6">
            <CrossIcon className="text-gold animate-pulse" size="md" />
          </div>
          <span className="text-gold uppercase tracking-[0.3em] font-medium text-xs mb-4 block">Bem-vindo à</span>
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">{BRAND_NAME}</h2>
          <p className="text-white/90 text-lg md:text-2xl italic font-serif mb-12 max-w-2xl mx-auto">
            "{TAGLINE}"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalogo" className="bg-white text-earth px-10 py-4 rounded-full font-bold hover:bg-gold hover:text-white transition-all shadow-xl flex items-center justify-center gap-2">
              Ver Catálogo <ChevronRight size={20} />
            </Link>
            <a href="#sobre" className="border border-white/50 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center">
              Nossa História
            </a>
          </div>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-24 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom duration-700">
          <div className="flex justify-center mb-8">
            <CrossIcon className="text-gold/40" size="sm" />
          </div>
          <h3 className="text-3xl md:text-4xl font-serif text-earth leading-relaxed">
            Cada conta, cada nó, uma oração. Nascemos do desejo de levar beleza e devoção para o dia a dia daqueles que creem.
          </h3>
          <div className="mt-8 w-24 h-1 bg-gold/30 mx-auto" />
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-soft">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src="https://picsum.photos/seed/founders/800/1000" 
              alt="Idealizadoras" 
              className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-xs uppercase tracking-widest mb-1 opacity-80">Idealizadoras</p>
              <h4 className="text-2xl font-bold">{OWNERS}</h4>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-earth">Nossa História</h2>
            <div className="w-16 h-1 bg-gold" />
            <p className="text-lg text-gray-600 leading-relaxed">
              O Nó Sagrado nasceu do encontro de gerações e do amor compartilhado pela fé católica. Débora Dias e Sebastiana Maria uniram suas habilidades manuais e devoção para criar mais do que simples objetos, mas sim ferramentas de conexão com o Divino.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cada peça é produzida artesanalmente com materiais selecionados, garantindo durabilidade e um design que transita entre o clássico e o contemporâneo. No centro de cada criação está a oração e o carinho por quem irá recebê-la.
            </p>
            <Link to="/catalogo" className="inline-block bg-earth text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition-all">
              Conheça nossos Terços
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section (Simulated) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold">No Instagram</h2>
              <p className="text-gray-500">Acompanhe nossas novidades diárias</p>
            </div>
            <a 
              href="https://instagram.com/nosagrado_" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-gold font-bold hover:underline"
            >
              <Instagram size={20} /> {INSTAGRAM_HANDLE}
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden group relative">
                <img src={`https://picsum.photos/seed/insta${i}/500/500`} alt="Insta Post" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Instagram className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-soft overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-16">O que dizem os fiéis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6 text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D4AF37" />)}
                </div>
                <p className="italic text-gray-600 mb-6 flex-1">"{t.comment}"</p>
                <h4 className="font-bold text-earth">{t.name}</h4>
                <p className="text-xs text-gray-400">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group border border-gray-100 rounded-xl bg-soft overflow-hidden">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold list-none hover:bg-gold/5 transition-colors">
                  {faq.question}
                  <span className="group-open:rotate-180 transition-transform">
                    <ChevronRight size={20} className="rotate-90" />
                  </span>
                </summary>
                <div className="p-5 pt-0 text-gray-600 bg-white">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
