import Image from "next/image";

export interface ItemLivroProps {
  link: string;
  titulo: string;
  imagem: string;
  /** Posição do livro na ordem de leitura (1, 2, 3...). */
  ordem: number;
  layout?: "grid" | "list";
}

function Capa({ src, alt, className }: { src: string; alt: string; className: string }) {
  return (
    <div className={`relative aspect-[2/3] flex-none overflow-hidden rounded-l-[3px] rounded-r-md shadow-livro ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 640px) 45vw, 200px" className="object-cover" />
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/25 via-white/10 to-transparent" />
    </div>
  );
}

function BotaoAmazon({ link }: { link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="sponsored nofollow noopener"
      className="inline-flex items-center justify-center rounded-full bg-marca-400 px-4 py-2 text-sm font-semibold text-areia-900 hover:bg-marca-300 transition-colors whitespace-nowrap"
    >
      Ver na Amazon
    </a>
  );
}

export default function ItemLivro(props: ItemLivroProps) {
  const alt = `Capa do livro ${props.titulo}`;

  if (props.layout === "list") {
    return (
      <div className="flex items-center gap-4 sm:gap-6 w-full rounded-2xl bg-white/70 border border-areia-200 p-4">
        <span className="font-serif text-2xl text-marca-500 w-8 text-center flex-none">{props.ordem}</span>
        <a href={props.link} target="_blank" rel="sponsored nofollow noopener" className="flex-none">
          <Capa src={props.imagem} alt={alt} className="w-14 sm:w-16" />
        </a>
        <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <span className="flex-1 min-w-0 font-serif text-lg leading-tight text-areia-900">{props.titulo}</span>
          <div>
            <BotaoAmazon link={props.link} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex flex-col items-center gap-3 w-full">
      <div className="relative">
        <span className="absolute -top-3 -left-3 z-10 rounded-full bg-areia-900 text-marca-300 font-serif text-sm w-8 h-8 flex items-center justify-center shadow">
          {props.ordem}
        </span>
        <a
          href={props.link}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="block transition-transform duration-300 group-hover:-translate-y-1.5"
        >
          <Capa src={props.imagem} alt={alt} className="w-36 sm:w-40" />
        </a>
      </div>
      <span className="font-serif text-center leading-tight min-h-[2.5rem] text-areia-900">{props.titulo}</span>
      <BotaoAmazon link={props.link} />
    </div>
  );
}
