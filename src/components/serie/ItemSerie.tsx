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
    <Link
      href={`/series/${props.id}`}
      className="group flex flex-col w-full max-w-sm rounded-[32px] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-zinc-100 hover:-translate-y-2"
    >
      <div className="relative h-64 sm:h-72 w-full overflow-hidden">
        <Image
          src={props.imagem}
          alt={`Capa da série ${props.titulo}`}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest">
           Série Completa
        </div>
      </div>

      <div className="flex flex-col gap-3 p-8">
        <h3 className="text-2xl font-serif font-black text-zinc-900 leading-tight group-hover:text-indigo-600 transition-colors">
          {props.titulo}
        </h3>
        
        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 text-justify italic">
          "{props.descricao}"
        </p>

        <div className="flex items-center gap-2 mt-2 text-indigo-600 font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
           Explorar Ordem de Leitura
           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
           </svg>
        </div>
      </div>
    </Link>
  );
}
