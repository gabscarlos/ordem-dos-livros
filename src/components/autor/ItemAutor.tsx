import Image from "next/image";
import Link from "next/link";

export interface AutorProps {
  id: string;
  nome: string;
  imagem: string;
  descricao?: string;
  /** Quantas séries do autor estão no site. */
  series?: number;
}

export default function ItemAutor(props: AutorProps) {
  return (
    <Link
      href={`/autores/${props.id}`}
      className="group flex flex-col items-center text-center gap-3 w-full h-full rounded-[1.75rem] bg-white/70 border border-areia-200 px-6 py-8 hover:bg-white hover:shadow-estante transition-all"
    >
      <div className="relative h-28 w-28 rounded-full overflow-hidden ring-4 ring-marca-200 group-hover:ring-marca-400 transition-colors">
        <Image
          src={props.imagem}
          alt={`Foto de ${props.nome}`}
          fill
          sizes="112px"
          className="object-cover object-top"
        />
      </div>
      <h3 className="font-serif text-xl leading-tight text-areia-900 group-hover:text-marca-700 transition-colors">
        {props.nome}
      </h3>
      {props.descricao && <p className="text-sm text-areia-500 leading-snug">{props.descricao}</p>}
      {typeof props.series === "number" && props.series > 0 && (
        <span className="mt-auto pt-1 text-xs font-semibold uppercase tracking-wider text-marca-700">
          {props.series} {props.series === 1 ? "série" : "séries"}
        </span>
      )}
    </Link>
  );
}
