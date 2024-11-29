import Image from "next/image";
import Link from "next/link";

export interface ItemSerieProps {
  id: string;
  titulo: string;
  imagem: string;
  descricao: string;
}

export default function ItemSerie(props: ItemSerieProps) {
    return (
        <Link href={`/series/${props.id}`} className="flex flex-col rounded-md overflow-hidden border border-zinc-800">
            <Image src={props.imagem} alt="Imagem da Série" width={1000} height={1000} className="h-96 object-cover" />
            <div className="flex flex-col gap-2 p-5">
                <span className="text-2xl font-black">{props.titulo}</span>
                <span className="text-sm text-zinc-400 text-justify">{props.descricao}</span>
                <button className="botao azul self-end">Leia Mais</button>
            </div>
        </Link>
    )
}