"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import series from "@/constants/series";
import autores from "@/constants/autores";
import ItemAutor from "@/components/autor/ItemAutor";
import ItemSerie from "@/components/serie/ItemSerie";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Titulo from "@/components/shared/Titulo";
import Link from "next/link";

// Função utilitária para remover acentos e normalizar texto
const normalizeText = (text: string) => {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const ResultadosContent = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  // Normaliza o termo de busca
  const normalizedQuery = normalizeText(searchQuery);

  // Filtra as séries com base na busca ignorando acentos
  const seriesEncontradas = series.filter((serie) =>
    normalizeText(serie.titulo).includes(normalizedQuery) ||
    normalizeText(serie.autor.nome).includes(normalizedQuery)
  );

  // Filtra os autores
  const autoresEncontrados = autores.filter((autor) =>
    normalizeText(autor.nome).includes(normalizedQuery)
  );

  const totalResultados = seriesEncontradas.length + autoresEncontrados.length;

  return (
    <div className="flex flex-col gap-6 pb-20">
      <Breadcrumb items={[{ label: "Busca", href: "#" }, { label: searchQuery }]} />

      <div className="flex flex-col gap-10">
        <header className="flex flex-col gap-4">
           <Titulo 
             principal={searchQuery ? `Busca: ${searchQuery}` : "O que você procura?"}
             secundario={totalResultados > 0 
                ? `Encontramos ${totalResultados} resultado(s) para sua pesquisa.`
                : "Não encontramos nada com esse termo. Tente algo diferente!"
             }
           />
        </header>

        {seriesEncontradas.length > 0 && (
          <section className="flex flex-col gap-8">
            <div className="flex items-center gap-4 border-b border-zinc-200 pb-4">
               <h2 className="text-2xl font-serif font-bold text-zinc-900">Séries de Livros</h2>
               <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                 {seriesEncontradas.length} encontrada(s)
               </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
              {seriesEncontradas.map((serie) => (
                <ItemSerie 
                  key={serie.id}
                  id={serie.id}
                  titulo={serie.titulo}
                  imagem={serie.imagem}
                  descricao={serie.descricao}
                />
              ))}
            </div>
          </section>
        )}

        {autoresEncontrados.length > 0 && (
          <section className="flex flex-col gap-8 mt-10">
            <div className="flex items-center gap-4 border-b border-zinc-200 pb-4">
               <h2 className="text-2xl font-serif font-bold text-zinc-900">Autores Encontrados</h2>
               <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                 {autoresEncontrados.length} encontrado(s)
               </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
              {autoresEncontrados.map((autor) => (
                <ItemAutor key={autor.id} {...autor} />
              ))}
            </div>
          </section>
        )}

        {totalResultados === 0 && searchQuery && (
           <div className="bg-white p-12 rounded-[40px] shadow-sm border border-zinc-100 text-center flex flex-col items-center gap-6">
              <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-zinc-500 max-w-md text-lg">
                Desculpe, não conseguimos encontrar nenhuma série ou autor com o termo <strong>"{searchQuery}"</strong>. 
                Que tal tentar um nome de autor ou título diferente?
              </p>
              <Link href="/" className="text-indigo-600 font-bold hover:underline">
                Voltar para o Início
              </Link>
           </div>
        )}
      </div>
    </div>
  );
};

export default function Resultados() {
  return (
    <Suspense fallback={
       <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
       </div>
    }>
      <ResultadosContent />
    </Suspense>
  );
}
