import ItemAutor from "@/components/autor/ItemAutor";
import Titulo from "@/components/shared/Titulo";
import autores from "@/constants/autores";
import Head from "next/head";

export default function Autores() {
  return (
    <div className="flex flex-col gap-10">
      <Head>
        <title>Autores - Nome do Seu Site</title>
        <meta name="description" content="Conheça os autores das histórias que você ama! Encontre informações sobre escritores famosos e suas obras." />
        <meta name="keywords" content="autores, escritores, livros, literatura" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aordemdoslivros.vercel.app/autores" />
      </Head>
      <Titulo principal="Autores" secundario="Conheça os autores que escrevem as histórias que você ama!" />
      <div className="grid sm: grid-cols-1 lg:grid-cols-2 gap-5">
        {autores.map((autor) => (
          <ItemAutor key={autor.id} {...autor} />
        ))}
      </div>
    </div>
  );
}
