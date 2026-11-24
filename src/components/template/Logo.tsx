import Link from "next/link";

export interface LogoProps {
  /** Versão menor, para a barra do topo. */
  compacto?: boolean;
  /** Texto claro, para fundos escuros (rodapé). */
  claro?: boolean;
}

// Ícone de livros em pé, nas cores da marca (dourado e marrom).
function Icone({ tamanho, claro }: { tamanho: number; claro: boolean }) {
  const lombada = claro ? "#F6EEE3" : "#2C1810";
  return (
    <svg width={tamanho} height={tamanho} viewBox="0 0 40 40" aria-hidden="true" className="flex-none">
      <rect x="6" y="9" width="7" height="24" rx="1.5" fill="#DAAA63" />
      <rect x="14.5" y="5" width="7" height="28" rx="1.5" fill={lombada} />
      <rect x="23.5" y="11" width="6" height="22" rx="1.5" fill="#C48F45" transform="rotate(-12 26.5 22)" />
      <rect x="4" y="33" width="32" height="2.5" rx="1.25" fill="#B5A08A" />
    </svg>
  );
}

export default function Logo({ compacto = false, claro = false }: LogoProps) {
  return (
    <Link href="/" className="group flex items-center gap-2 select-none" aria-label="Ordem Livro, página inicial">
      <span className="transition-transform duration-300 group-hover:-rotate-6">
        <Icone tamanho={compacto ? 34 : 44} claro={claro} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-sans font-semibold uppercase tracking-[0.35em] text-marca-500 ${
            compacto ? "text-[10px]" : "text-xs"
          }`}
        >
          Ordem
        </span>
        <span
          className={`font-serif ${compacto ? "text-2xl" : "text-3xl"} ${
            claro ? "text-areia-50" : "text-areia-900"
          } group-hover:text-marca-600 transition-colors`}
        >
          Livro
        </span>
      </span>
    </Link>
  );
}
