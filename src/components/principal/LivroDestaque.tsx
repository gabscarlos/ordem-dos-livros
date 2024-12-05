import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export interface DestaqueLivroProps {
  link: string;
  imagem: string;
  className?: string;
  titulo: string;
}

export default function DestaqueLivro(props: DestaqueLivroProps) {
  return (
    <Link
      href={props.link}
      className={`rounded-md overflow-hidden ${props.className} w-56`}
    >
      <Image
        src={props.imagem}
        alt="Imagem do Livro Destaque"
        width={200}
        height={200}
        className="h-72 drop-shadow-xl rounded-lg"
      />
      <span className="text-sm uppercase">{props.titulo}</span>
      <div className="flex gap-1">
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
      </div>      
    </Link>
  );
}
