import Image from "next/image";
import Link from "next/link";

export interface AutorTopProps {
  imagem: string;
  className?: string;
  titulo: string;
  linkAutor: string;
  descricao: string;
}

export default function AutorTop(props: AutorTopProps) {
  return (
    <div
      className={`rounded-md overflow-hidden ${props.className} flex flex-col sm:flex-row gap-5 p-2`} // Alterado para flex-col em telas pequenas e flex-row em telas maiores
    >
      <Image
        src={props.imagem}
        alt="Imagem do Autor Destaque"
        width={200}
        height={200}
        className="drop-shadow-xl rounded-lg"
      />
      <div className="flex flex-col gap-2">
        <span className="text-md font-black">{props.titulo}</span>
        <span className="text-sm text-gray-600 w-48">{props.descricao}</span>
        <Link href={props.linkAutor} className="items-start">
          <button className="botao transparente">Leia Mais</button>
        </Link>
      </div>
    </div>
  );
}
