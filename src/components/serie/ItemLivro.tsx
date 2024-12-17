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
      className="flex flex-col w-72 rounded-md overflow-hidden bg-slate-300 dark:bg-zinc-800"
    >
      <Image
        src={props.imagem}
        alt="Imagem do Livro"
        width={300}
        height={400}
        className="h-full w-full object-cover"
      />
      <div className="flex-1 flex flex-col p-5 gap-2">
        <span className="flex-1 font-bold text-center text-zinc-950 dark:text-white">{props.titulo}</span>
        <button className="botao azul">
          <Image src="/amazon.png" alt="Amazon" width={30} height={30} />
          <span>Comprar</span>
        </button>
      </div>
    </Link>
  );
}
