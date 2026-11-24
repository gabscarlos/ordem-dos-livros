import LivroDestaque from "./LivroDestaque";

export interface LivroEmDestaque {
  serieId: string;
  titulo: string;
  imagem: string;
  autor: string;
}

export interface LivrosDestaqueProps {
  livros: LivroEmDestaque[];
}

// Renderizado no servidor: os livros já vêm no HTML (bom para o Google e
// sem "pulo" de layout). A escolha dos livros é feita em app/page.tsx.
export default function LivrosDestaque({ livros }: LivrosDestaqueProps) {
  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-4 mb-14">
      {livros.map((livro) => (
        <div key={livro.serieId} className="flex justify-start gap-2">
          <LivroDestaque
            imagem={livro.imagem}
            titulo={livro.titulo}
            autor={livro.autor}
            link={`/series/${livro.serieId}`}
          />
        </div>
      ))}
    </div>
  );
}
