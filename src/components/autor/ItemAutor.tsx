import Image from "next/image";
import Link from "next/link";

export interface AutorProps {
  id: string;
  nome: string;
  imagem: string;
}

export default function ItemAutor(props: AutorProps) {
  return (
    <Link
      href={`/autores/${props.id}`}
      className="group relative flex flex-col h-[400px] w-full max-w-sm rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-zinc-100 hover:-translate-y-2"
    >
      <Image
        src={props.imagem}
        alt={`Foto do autor ${props.nome}`}
        fill
        sizes="(max-width: 640px) 100vw, 384px"
        className="object-cover object-top transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
      />
      
      {/* Overlay com gradiente premium */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent group-hover:from-indigo-950/90 transition-all duration-700" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-sm font-bold text-amber-400 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
           Autor em Destaque
        </span>
        <h3 className="text-3xl font-serif font-black text-white leading-tight drop-shadow-lg">
          {props.nome}
        </h3>
        <div className="h-1.5 w-16 bg-indigo-500 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 delay-100" />
      </div>

      {/* Botão flutuante sutil */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
         <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
         </div>
      </div>
    </Link>
  );
}
