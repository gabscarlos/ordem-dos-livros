import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export interface LivroDestaqueProps {
  link: string;
  imagem: string;
  className?: string;
  titulo: string;
  autor: string;
  posicao: string;
}

export default function LivroDestaque(props: LivroDestaqueProps) {
  return (
    <Link
      href={props.link}
      className={`rounded-md overflow-hidden ${props.className}
        flex flex-col w-64 justify-between items-center overflow-hidden gap-1
        bg-slate-200 py-2
        `}
    >
      <div className="bg-purple-600 rounded-md">
        <span className="text-white text-lg font-bold px-6 py-1">
          {props.posicao}
        </span>
      </div>
      <Image
        src={props.imagem}
        alt="Imagem do Livro Destaque"
        width={200}
        height={200}
        className="h-72 drop-shadow-xl rounded-lg"
      />
      <span className="w-60 text-sm text-center uppercase mt-2">{props.titulo}</span>
      <span className="flex text-xs uppercase text-zinc-600">
        {props.autor}
      </span>
      <div className="flex gap-1">
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
      </div>
      <button className="botao azul mt-5">
        <Image src="/amazon.png" alt="Amazon" width={30} height={30} />
        <span>Saiba Mais</span>
      </button>
    </Link>
  );
}
