"use client";

import { useState, useEffect } from "react";
import AutorTop from "./AutorTop"; // Ajuste o caminho conforme necessário

interface Autor {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
}

interface TopAutoresProps {
  autores: Autor[];
}

export default function TopAutores({ autores }: TopAutoresProps) {
  const [topAutores, setTopAutores] = useState<Autor[]>([]);

  useEffect(() => {
    // Embaralha e seleciona os 3 primeiros autores
    const embaralhados = [...autores].sort(() => Math.random() - 0.5).slice(0, 3);
    setTopAutores(embaralhados);
  }, [autores]);

  return (
    <div className="flex flex-col items-start bg-pink-50 rounded-l-xl p-4 gap-4">
      <span className="text-3xl font-bold uppercase">Top 3 Autores</span>
      <div className="flex flex-col gap-8 mx-4">
        {topAutores.map((autor) => (
          <AutorTop
            key={autor.id}
            {...autor}
            imagem={autor.imagem}
            titulo={autor.nome}
            descricao={autor.descricao}
            linkAutor={`/autores/${autor.id}`}
          />
        ))}
      </div>
    </div>
  );
}
