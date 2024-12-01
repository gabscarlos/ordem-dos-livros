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
        className="flex flex-col rounded-md relative overflow-hidden border border-zinc-800"
      >
        <Image
          src={props.imagem}
          alt="Foto do Autor"
          width={1000}
          height={1000}
          className="h-96 object-cover"
        />
        <div className="absolute bottom-0 w-full flex justify-end px-6 py-4 bg-black/50">
          <span className="text-2xl font-black text-zinc-50">{props.nome}</span>
        </div>
      </Link>
    </div>
  );
}
