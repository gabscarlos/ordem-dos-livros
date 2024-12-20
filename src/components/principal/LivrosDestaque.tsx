"use client";

import { useState, useEffect } from "react";
import LivroDestaque from "./LivroDestaque";
import seriesData from "@/constants/series";

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
  id: string;
  livros: Livro[];
}

interface TopLivrosProps {
  series: Serie[];
}

export default function TopLivros({ series = seriesData }: TopLivrosProps) {
  const [topLivros, setTopLivros] = useState<
    { livro: Livro; serieId: string }[]
  >([]);

  useEffect(() => {
    // Embaralha e seleciona os 4 primeiros livros
    const todosLivros = series.flatMap((serie) =>
      serie.livros.map((livro) => ({ livro, serieId: serie.id }))
    );
    const embaralhados = [...todosLivros]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    setTopLivros(embaralhados);
  }, [series]);

  return (
    <div>
      <div className="flex flex-wrap justify-center md:justify-between gap-4 mb-14">
        {topLivros.map(({ livro, serieId }) => (
          <div key={livro.id} className="flex justify-start gap-2">
            <LivroDestaque
              imagem={livro.imagem}
              titulo={livro.titulo}
              link={`series/${serieId}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
