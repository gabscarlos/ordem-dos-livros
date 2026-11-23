"use client";

import Image from "next/image";
import ItemLivro from "./ItemLivro";
import Breadcrumb from "../shared/Breadcrumb";
import SocialShare from "../shared/SocialShare";
import { useLeitura } from "@/hooks/useLeitura";
import { useMemo, useState } from "react";

export interface ConteudoSerieProps {
  id: string;
  titulo: string;
  imagem: string;
  nome: string;
  descricao: string;
  autor: {
    id: string;
    nome: string;
    imagem: string;
  };
  livros: { id: string; titulo: string; imagem: string; link: string }[];
}

export default function ConteudoSerie(props: ConteudoSerieProps) {
  const { estaLido } = useLeitura();
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const estatisticas = useMemo(() => {
    const lidosCount = props.livros.filter((l) => estaLido(l.id)).length;
    const total = props.livros.length;
    const porcentagem = total > 0 ? Math.round((lidosCount / total) * 100) : 0;
    return { lidosCount, total, porcentagem };
  }, [props.livros, estaLido]);

  return (
    <div className="flex flex-col gap-6 pb-20">
      <Breadcrumb 
        items={[
          { label: "Séries", href: "/series" },
          { label: props.titulo }
        ]} 
      />

      {/* Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        <Image
          src={props.imagem}
          alt={`Capa da série ${props.titulo}`}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 flex flex-col gap-2">
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-white drop-shadow-lg text-balance">
            {props.titulo}
          </h1>
          <div className="flex items-center gap-3">
             <span className="text-zinc-300 text-sm sm:text-base">Série escrita por</span>
             <a
                href={`/autores/${props.autor.id}`}
                className="text-amber-400 font-bold hover:text-amber-300 transition-colors text-sm sm:text-base underline"
              >
                {props.autor.nome}
              </a>
          </div>
        </div>
      </section>

      {/* Ações Sociais */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-zinc-100 gap-6">
         <SocialShare 
            url={`https://ordemlivro.vercel.app/series/${props.id}`} 
            title={`Confira a ordem correta dos livros da série ${props.titulo} no site Ordem dos Livros!`} 
         />
         
         <div className="flex items-center bg-zinc-100 p-1.5 rounded-2xl gap-1">
            <button
              onClick={() => setLayout("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                layout === "grid" 
                  ? "bg-white text-indigo-600 shadow-sm" 
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              GRADE
            </button>
            <button
              onClick={() => setLayout("list")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                layout === "list" 
                  ? "bg-white text-indigo-600 shadow-sm" 
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              LISTA
            </button>
         </div>
      </div>

      {/* Progress Bar - Gamificação */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100 flex flex-col gap-4">
        <div className="flex justify-between items-center text-sm font-bold text-zinc-900">
           <span className="flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
             Seu progresso na série
           </span>
           <span className="text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-tighter">
             {estatisticas.lidosCount} de {estatisticas.total} livros
           </span>
        </div>
        <div className="w-full bg-zinc-100 h-3 rounded-full overflow-hidden">
           <div 
             className="bg-gradient-to-r from-indigo-500 to-indigo-700 h-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(79,70,229,0.5)]"
             style={{ width: `${estatisticas.porcentagem}%` }}
           />
        </div>
        <p className="text-xs text-zinc-500 font-medium">
          Marque os livros que você já leu para acompanhar seu progresso nesta jornada incrível!
        </p>
      </div>

      {/* Descrição e Curadoria */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-4">
        <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-zinc-100">
          <h2 className="text-xl font-serif font-bold text-zinc-900 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-indigo-600 rounded-full" />
            Sobre a obra
          </h2>
          <p className="text-lg text-zinc-700 leading-relaxed text-justify italic">
            "{props.descricao}"
          </p>
        </div>

        <aside className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 flex flex-col gap-4">
          <h3 className="text-indigo-900 font-bold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            Dica do Editor
          </h3>
          <p className="text-sm text-indigo-800 leading-snug">
            Esta é uma das séries mais populares do gênero. Recomendamos começar pelo <strong>{props.livros[0].titulo}</strong> para entender a base do universo criado por {props.autor.nome}.
          </p>
        </aside>
      </div>

      {/* Listagem de Livros */}
      <section className="flex flex-col gap-10 mt-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-zinc-200 pb-4">
           <h2 className="text-3xl font-serif font-black text-zinc-900">Livros da Série em Ordem</h2>
           <span className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full text-sm font-medium">
             {props.livros.length} livros encontrados
           </span>
        </div>
        
        <div className={`grid gap-10 justify-items-center ${
            layout === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1 w-full"
          }`}
        >
          {props.livros.map((livro) => (
            <ItemLivro
              key={livro.id}
              id={livro.id}
              link={livro.link}
              titulo={livro.titulo}
              imagem={livro.imagem}
              layout={layout}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
