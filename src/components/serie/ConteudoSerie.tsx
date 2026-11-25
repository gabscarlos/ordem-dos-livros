"use client";

import Image from "next/image";
import Link from "next/link";
import ItemLivro from "./ItemLivro";
import Breadcrumb from "../shared/Breadcrumb";
import SocialShare from "../shared/SocialShare";
import { useState } from "react";
import { url } from "@/lib/site";

export interface ConteudoSerieProps {
  id: string;
  titulo: string;
  descricao: string;
  autor: {
    id: string;
    nome: string;
    imagem: string;
  };
  livros: { id: string; titulo: string; imagem: string; link: string; pagina?: string }[];
}

export default function ConteudoSerie(props: ConteudoSerieProps) {
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  // Capas que ficam em pé na estante do topo (as primeiras da ordem).
  const capasEstante = props.livros.slice(0, 4);

  return (
    <div className="flex flex-col gap-10 pb-12">
      <Breadcrumb items={[{ label: "Séries", href: "/series" }, { label: props.titulo }]} />

      {/* Estante do topo: título à esquerda e as primeiras capas em pé à direita */}
      <section className="rounded-[2rem] bg-gradient-to-b from-areia-50 to-areia-100 border border-areia-200 shadow-estante overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end px-6 sm:px-10 pt-8 sm:pt-10">
          <div className="flex flex-col gap-4 self-center lg:pb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-marca-600">
              Ordem dos livros
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl leading-[1.05] text-areia-900 text-balance">
              {props.titulo}
            </h1>
            <p className="text-areia-600">
              Série de{" "}
              <Link href={`/autores/${props.autor.id}`} className="font-semibold text-marca-700 hover:text-marca-900 underline underline-offset-4">
                {props.autor.nome}
              </Link>{" "}
              · {props.livros.length} {props.livros.length === 1 ? "livro" : "livros"}
            </p>
            <div className="pt-1">
              <SocialShare
                url={url(`/series/${props.id}`)}
                title={`Confira a ordem correta dos livros da série ${props.titulo} no Ordem Livro!`}
                pin={url(`/pins/${props.id}`)}
              />
            </div>
          </div>

          <div className="flex items-end justify-center gap-2.5 sm:gap-3">
            {capasEstante.map((livro, i) => (
              <div
                key={livro.id}
                className={`relative aspect-[2/3] flex-none overflow-hidden rounded-l-[3px] rounded-r-md shadow-livro ${
                  ["w-28 sm:w-36", "w-20 sm:w-28", "w-16 sm:w-24", "hidden sm:block sm:w-20"][i]
                }`}
              >
                <Image
                  src={livro.imagem}
                  alt={`Capa de ${livro.titulo}`}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 640px) 112px, 144px"
                  className="object-cover"
                />
                <span aria-hidden="true" className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/25 via-white/10 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mx-4 sm:mx-6 mb-6 h-3 rounded-full bg-gradient-to-b from-areia-100 to-areia-300 shadow-[0_10px_16px_-8px_rgba(44,24,16,0.45)]"
        />
      </section>

      {/* Sobre a série */}
      <section className="max-w-3xl">
        <h2 className="font-serif text-2xl sm:text-3xl text-areia-900 mb-3">Sobre a série</h2>
        <p className="text-areia-700 leading-relaxed">{props.descricao}</p>
      </section>

      {/* Livros em ordem */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-areia-200 pb-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-areia-900">Livros da série em ordem</h2>
            <p className="text-sm text-areia-500 mt-1">
              Do primeiro ao último, na ordem recomendada de leitura.
            </p>
          </div>
          <div className="flex items-center rounded-full bg-areia-200/70 p-1 text-xs font-semibold" role="group" aria-label="Modo de exibição">
            {(["grid", "list"] as const).map((modo) => (
              <button
                key={modo}
                type="button"
                onClick={() => setLayout(modo)}
                aria-pressed={layout === modo}
                className={`px-4 py-1.5 rounded-full transition-colors ${
                  layout === modo ? "bg-white text-areia-900 shadow-sm" : "text-areia-600 hover:text-areia-900"
                }`}
              >
                {modo === "grid" ? "Grade" : "Lista"}
              </button>
            ))}
          </div>
        </div>

        <div
          className={
            layout === "grid"
              ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 pt-3"
              : "flex flex-col gap-3"
          }
        >
          {props.livros.map((livro, i) => (
            <ItemLivro
              key={livro.id}
              ordem={i + 1}
              link={livro.link}
              pagina={livro.pagina}
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
