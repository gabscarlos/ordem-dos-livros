import Image from "next/image";
import Link from "next/link";

export interface SerieDestaqueProps {
  link: string;
  imagem: string;
  className?: string;
}

export default function SerieDestaque(props: SerieDestaqueProps) {
  return (
    <Link
      href={props.link}
      className={`rounded-md overflow-hidden ${props.className}`}
    >
      <Image
        src={props.imagem}
        alt="Imagem do Livro Destaque"
        width={200}
        height={200}
        className="h-72 drop-shadow-xl rounded-lg"
      />     
    </Link>
  );
}
