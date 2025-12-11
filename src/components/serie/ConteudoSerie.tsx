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
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl font-serif font-black text-zinc-900">{props.titulo}</h1>
        <a
          href={`/autores/${props.autor.id}`}
          className="text-lg text-indigo-600 font-medium hover:underline transition-all"
        >
          por {props.autor.nome}
        </a>
      </div>
      
      <div className="w-full relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={props.imagem}
          alt={`Capa da série ${props.titulo}`}
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100">
        <p className="text-lg text-zinc-700 leading-relaxed text-justify">
          {props.descricao}
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-4">
        <div className="flex items-center gap-4">
           <h2 className="text-2xl font-serif font-bold text-zinc-900">Livros da Série</h2>
           <div className="h-px flex-1 bg-zinc-200" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {props.livros.map((livro) => (
            <ItemLivro
              key={livro.id}
              link={livro.link}
              titulo={livro.titulo}
              imagem={livro.imagem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
