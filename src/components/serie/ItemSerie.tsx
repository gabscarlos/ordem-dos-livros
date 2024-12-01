import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export interface ItemSerieProps {
  id: string;
  titulo: string;
  imagem: string;
  descricao: string;
}

export default function ItemSerie(props: ItemSerieProps) {
  return (
    <Link
      href={`/series/${props.id}`}
      className="flex flex-col rounded-md overflow-hidden border border-zinc-800"
    >
      <Head>
        <title>Lista Completa de Todas as Séries de Livros em Ordem</title>
        <meta
          name="description"
          content="Descubra séries incríveis e mergulhe em histórias fascinantes. Explore nossa coleção de séries para todos os gostos!"
        />
        <meta
          name="keywords"
          content="séries, histórias, livros, autores, fantasia, ficção, drama"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Image
        src={props.imagem}
        alt="Imagem da Série"
        width={1000}
        height={1000}
        className="h-96 object-cover"
      />
      <div className="flex flex-col gap-2 p-5">
        <span className="text-2xl font-black">{props.titulo}</span>
        <span className="text-sm text-zinc-900 dark:text-zinc-400 text-justify">
          {props.descricao}
        </span>
        <button className="botao roxo self-end">Leia Mais</button>
      </div>
    </Link>
  );
}
