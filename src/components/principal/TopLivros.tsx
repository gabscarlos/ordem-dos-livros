"use client";

import { useState, useEffect } from "react";
import LivroTop from "./LivroTop"; // Ajuste o caminho conforme necessário

interface Autor {
  id: string;
  nome: string;
}

interface Livro {
  id: string;
  titulo: string;
  imagem: string;
  autor: Autor;
  link: string;
}

interface Serie {
  livros: Livro[];
}

interface TopLivrosProps {
  series: Serie[];
}

export default function TopLivros({ series }: TopLivrosProps) {
  const [topLivros, setTopLivros] = useState<Livro[]>([]);

  useEffect(() => {
    // Embaralha e seleciona os 6 primeiros livros
    const todosLivros = series.flatMap((serie) => serie.livros);
    const embaralhados = [...todosLivros].sort(() => Math.random() - 0.5).slice(0, 6);
    setTopLivros(embaralhados);
  }, [series]);

  return (
    <div>
      <span className="text-3xl font-bold uppercase mt-6">Top 6 Livros</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
        {topLivros.map((livro) => (
          <div key={livro.id} className="flex justify-start gap-2">
            <LivroTop
              imagem={livro.imagem}
              titulo={livro.titulo}
              autor={livro.autor.nome}
              linkAutor={`/autores/${livro.autor.id}`}
              linkAmazon={livro.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
