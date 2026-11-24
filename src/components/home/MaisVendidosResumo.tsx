import CapaLivro from "./CapaLivro";

export interface LivroVendido {
  id: string;
  titulo: string;
  autor: string;
  posicao: string;
  imagem: string;
  link: string;
}

export default function MaisVendidosResumo({ livros }: { livros: LivroVendido[] }) {
  return (
    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {livros.map((l) => (
        <li key={l.id}>
          <a
            href={l.link}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="group flex lg:flex-col gap-4 h-full rounded-2xl bg-white/70 border border-areia-200 p-4 hover:bg-white hover:shadow-estante transition-all"
          >
            <div className="relative flex-none">
              <CapaLivro src={l.imagem} alt={`Capa de ${l.titulo}`} className="w-20 lg:w-24" sizes="96px" />
              <span className="absolute -top-2 -left-2 rounded-full bg-areia-900 text-marca-300 text-xs font-bold w-8 h-8 flex items-center justify-center shadow">
                {l.posicao}
              </span>
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="font-serif text-areia-900 leading-tight line-clamp-2">{l.titulo}</span>
              <span className="text-xs text-areia-500 truncate">{l.autor}</span>
              <span className="mt-auto pt-2 inline-flex w-fit rounded-full bg-marca-400 px-3 py-1 text-xs font-semibold text-areia-900 group-hover:bg-marca-300 transition-colors">
                Ver na Amazon
              </span>
            </div>
          </a>
        </li>
      ))}
    </ol>
  );
}
