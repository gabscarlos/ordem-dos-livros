"use client";

import Image from "next/image";
import Link from "next/link";
import { useLeitura } from "@/hooks/useLeitura";

export interface ItemLivroProps {
  id: string; 
  link: string;
  titulo: string;
  imagem: string;
  layout?: "grid" | "list";
  nota?: number;
}

export default function ItemLivro(props: ItemLivroProps) {
  const { alternarLido, estaLido } = useLeitura();
  const lido = estaLido(props.id);

  const renderEstrelas = (nota: number = 5) => {
    return (
      <div className="flex gap-0.5" title={`${nota} de 5 estrelas`}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < Math.floor(nota) ? "text-amber-400" : "text-zinc-200"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  if (props.layout === "list") {
    return (
      <div className="group flex items-center w-full max-w-4xl bg-white border border-zinc-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all p-4 gap-6 relative">
        <div className="relative h-24 w-16 sm:h-32 sm:w-24 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
          <Image
            src={props.imagem}
            alt={`Capa do livro ${props.titulo}`}
            fill
            className={`object-cover transition-all ${
              lido ? "grayscale-[0.5] opacity-80" : "group-hover:scale-110"
            }`}
          />
          {lido && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            {renderEstrelas(props.nota)}
            <span className={`font-serif font-bold text-lg transition-colors ${
              lido ? "text-zinc-400 line-through decoration-zinc-300 font-medium" : "text-zinc-900 group-hover:text-indigo-600"
            }`}>
              {props.titulo}
            </span>
            <button 
              onClick={() => alternarLido(props.id)}
              className={`text-xs font-bold uppercase tracking-wider transition-colors w-fit ${
                 lido ? "text-green-600" : "text-zinc-400 hover:text-indigo-600"
              }`}
            >
              {lido ? "Marcar como não lido" : "Marcar como lido"}
            </button>
          </div>

          <Link 
            href={props.link} 
            target="_blank" 
            rel="nofollow"
            className="flex items-center justify-center gap-2 bg-[#FFD814] hover:bg-[#F7CA00] text-zinc-900 font-bold py-2 px-6 rounded-xl transition-all shadow-md active:scale-95 text-sm whitespace-nowrap"
          >
            <Image src="/amazon.png" alt="Amazon" width={18} height={18} />
            <span>Ver Menor Preço</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex flex-col w-72 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-zinc-100 relative">
      {/* Badge de Lido */}
      <button
        onClick={() => alternarLido(props.id)}
        className={`absolute top-4 right-4 z-10 p-2 rounded-full shadow-lg transition-all active:scale-90 ${
          lido 
            ? "bg-green-500 text-white" 
            : "bg-white/80 text-zinc-400 hover:text-green-600 backdrop-blur-sm"
        }`}
        title={lido ? "Marcar como não lido" : "Marcar como lido"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      <Link
        href={props.link}
        target="_blank"
        rel="nofollow"
        className="contents"
      >
        <div className="relative h-96 w-full overflow-hidden">
          <Image
            src={props.imagem}
            alt={`Capa do livro ${props.titulo}`}
            fill
            className={`object-cover transition-all duration-700 ${
              lido ? "grayscale-[0.5] opacity-80 scale-100" : "group-hover:scale-110"
            }`}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          {lido && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
               <span className="bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                 Lido ✅
               </span>
            </div>
          )}
        </div>
      </Link>

      <div className="flex-1 flex flex-col p-6 gap-4">
        <div className="flex flex-col items-center gap-2">
           {renderEstrelas(props.nota)}
           <span className={`flex-1 font-serif font-bold text-center text-lg leading-tight transition-colors ${
             lido ? "text-zinc-400 line-through decoration-zinc-300" : "text-zinc-900 group-hover:text-indigo-600"
           }`}>
             {props.titulo}
           </span>
        </div>
        <Link 
          href={props.link} 
          target="_blank" 
          rel="nofollow"
          className="flex items-center justify-center gap-2 bg-[#FFD814] hover:bg-[#F7CA00] text-zinc-900 font-bold py-2.5 px-4 rounded-xl transition-all shadow-md active:scale-95"
        >
          <Image src="/amazon.png" alt="Amazon" width={20} height={20} />
          <span className="text-sm">Ver Menor Preço</span>
        </Link>
      </div>
    </div>
  );
}
