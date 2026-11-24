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
    <Link
      href={props.linkAutor}
      className={`group rounded-xl overflow-hidden ${props.className} 
        flex flex-col items-center sm:items-start p-4 bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-areia-100`}
    >
      <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
        <div className="relative w-32 h-32 flex-shrink-0">
          <Image
            src={props.imagem}
            alt={`Foto de ${props.titulo}`}
            fill
            sizes="128px"
            className="drop-shadow-md rounded-full object-cover border-2 border-white ring-2 ring-marca-50 group-hover:ring-marca-200 transition-all"
          />
        </div>
        <div className="flex flex-col gap-2 items-center sm:items-start text-center sm:text-left flex-1">
          <span className="text-lg font-serif font-bold text-areia-900 group-hover:text-marca-600 transition-colors">{props.titulo}</span>
          <p className="text-sm text-areia-500 leading-relaxed line-clamp-3">{props.descricao}</p>
          <span className="text-xs font-semibold text-marca-600 mt-2 group-hover:underline">Ver perfil do autor &rarr;</span>
        </div>
      </div>
    </Link>
  );
}
