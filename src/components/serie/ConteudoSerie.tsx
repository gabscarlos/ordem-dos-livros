import Image from "next/image";
import ItemLivro from "./ItemLivro";

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
  livros: { id: string; titulo: string; imagem: string; link: string }[]; // Adicionando a lista de livros
}

export default function ConteudoSerie(props: ConteudoSerieProps) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-black">{props.titulo}</h1>
      <a href={`/autores/${props.autor.id}`} className="text-sm text-zinc-900 dark:text-zinc-400 -mt-4">
        {props.autor.nome}
      </a>
      <Image src={props.imagem} alt="Imagem da Série" width={1000} height={1000} className="h-96 object-cover" />
      <p className="text-lg text-zinc-900 dark:text-zinc-400 text-justify">{props.descricao}</p>
      <h2>Lista de Livros</h2>
      <div className="grid grid-cols-3 gap-5">
        {props.livros.map((livro) => (
          <ItemLivro key={livro.id} link={livro.link} titulo={livro.titulo} imagem={livro.imagem} />
        ))}
      </div>
    </div>
  );
}
