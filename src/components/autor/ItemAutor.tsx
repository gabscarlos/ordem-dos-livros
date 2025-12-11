import Image from "next/image";
import Link from "next/link";

export interface Autor {
  id: string;
  nome: string;
  imagem: string;
}

export default function ItemAutor(props: Autor) {
  return (
    <div>
      <Link
        href={`/autores/${props.id}`}
        className="group flex flex-col rounded-xl relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <div className="relative h-96 w-full">
          <Image
            src={props.imagem}
            alt={`Foto de ${props.nome}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity" />
        </div>
        <div className="absolute bottom-0 w-full flex flex-col justify-end px-6 py-6">
          <span className="text-2xl font-serif font-bold text-white drop-shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{props.nome}</span>
          <div className="h-1 w-12 bg-indigo-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
    </div>
  );
}
