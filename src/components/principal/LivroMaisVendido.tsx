import CapaLivro from "@/components/home/CapaLivro";

export interface LivroMaisVendidoProps {
  link: string;
  imagem: string;
  titulo: string;
  autor: string;
  posicao: string;
}

export default function LivroMaisVendido(props: LivroMaisVendidoProps) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="sponsored nofollow noopener"
      className="group relative flex flex-col items-center gap-4 w-full h-full rounded-2xl bg-white/70 border border-areia-200 px-5 pt-8 pb-6 hover:bg-white hover:shadow-estante transition-all"
    >
      <span className="absolute top-4 left-4 rounded-full bg-areia-900 text-marca-300 text-sm font-bold min-w-10 h-10 px-2 flex items-center justify-center shadow">
        {props.posicao}
      </span>

      <CapaLivro
        src={props.imagem}
        alt={`Capa do livro ${props.titulo}`}
        className="w-36"
        sizes="144px"
      />

      <div className="flex flex-col items-center gap-1 text-center w-full">
        <span className="font-serif text-lg text-areia-900 leading-tight line-clamp-2 min-h-[2.75rem]">
          {props.titulo}
        </span>
        <span className="text-xs uppercase tracking-wider text-areia-500">{props.autor}</span>
      </div>

      <span className="mt-auto inline-flex items-center rounded-full bg-marca-400 px-5 py-2 text-sm font-semibold text-areia-900 group-hover:bg-marca-300 transition-colors">
        Ver na Amazon
      </span>
    </a>
  );
}
