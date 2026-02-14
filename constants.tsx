
import { Product } from './types';

export const BRAND_NAME = "Nó Sagrado";
export const TAGLINE = "Fé que se entrelaça em cada nó";
export const OWNERS = "Débora Dias e Sebastiana Maria";
export const WHATSAPP_NUMBER = "5588996488044";
export const WHATSAPP_DISPLAY = "(88) 99648-8044";
export const INSTAGRAM_HANDLE = "@nosagrado_";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Terço de Cristal Transparente",
    description: "Terço artesanal feito com cristais de 8mm e acabamento em dourado fosco.",
    price: 89.90,
    image: "https://picsum.photos/seed/terco1/600/600",
    category: "Clássicos"
  },
  {
    id: "2",
    name: "Terço em Madeira Rústica",
    description: "Terço minimalista com contas de madeira de reflorestamento e nó franciscano.",
    price: 45.00,
    image: "https://picsum.photos/seed/terco2/600/600",
    category: "Madeira"
  },
  {
    id: "3",
    name: "Terço Nossa Senhora Aparecida",
    description: "Contas em azul safira com medalha exclusiva da Padroeira.",
    price: 110.00,
    image: "https://picsum.photos/seed/terco3/600/600",
    category: "Devocionais"
  },
  {
    id: "4",
    name: "Terço Infantil Colorido",
    description: "Material emborrachado e macio, ideal para introduzir a fé aos pequenos.",
    price: 35.90,
    image: "https://picsum.photos/seed/terco4/600/600",
    category: "Infantil"
  },
  {
    id: "5",
    name: "Terço São Bento",
    description: "Acabamento robusto em ouro velho com a Medalha de São Bento.",
    price: 125.00,
    image: "https://picsum.photos/seed/terco5/600/600",
    category: "Devocionais"
  },
  {
    id: "6",
    name: "Terço de Pérolas Delicado",
    description: "Pérolas ABS de alta qualidade, ideal para noivas e ocasiões especiais.",
    price: 150.00,
    image: "https://picsum.photos/seed/terco6/600/600",
    category: "Clássicos"
  }
];

export const TESTIMONIALS = [
  { name: "Maria Clara", comment: "O terço é simplesmente maravilhoso. Sente-se o carinho em cada nó.", city: "Fortaleza - CE" },
  { name: "João Pedro", comment: "Presente perfeito. A embalagem e o acabamento são impecáveis.", city: "Juazeiro do Norte - CE" },
  { name: "Ana Beatriz", comment: "Atendimento humano e produtos de altíssima qualidade. Recomendo muito!", city: "Crato - CE" }
];

export const FAQS = [
  { question: "Qual o prazo de produção?", answer: "Como nossos produtos são artesanais, o prazo médio é de 3 a 5 dias úteis." },
  { question: "Como funciona o pagamento?", answer: "Solicitamos 50% do valor no ato do pedido para início da produção e o restante na entrega." },
  { question: "Vocês fazem entregas?", answer: "Sim, entregamos em todo o Brasil via Correios ou transportadora." }
];
