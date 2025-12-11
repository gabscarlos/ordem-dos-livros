import Image from "next/image";
import Link from "next/link";

export interface ItemLivroProps {
  link: string;
  titulo: string;
  imagem: string;
}

export default function ItemLivro(props: ItemLivroProps) {
  return (
    <Link
      href={props.link}
      target="_blank"
      className="group flex flex-col w-72 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-zinc-100"
    >
      <div className="relative h-96 w-full overflow-hidden">
        <Image
          src={props.imagem}
          alt={`Capa do livro ${props.titulo}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 flex flex-col p-5 gap-4">
        <span className="flex-1 font-serif font-bold text-center text-lg text-zinc-900 leading-tight">{props.titulo}</span>
        <button className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-bold py-2 px-4 rounded-lg transition-colors shadow-sm">
          <Image src="/amazon.png" alt="Amazon" width={24} height={24} />
          <span>Ver na Amazon</span>
        </button>
      </div>
    </Link>
  );
}
