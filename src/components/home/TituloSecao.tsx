import Link from "next/link";

export interface TituloSecaoProps {
  titulo: string;
  subtitulo?: string;
  link?: { href: string; texto: string };
}

export default function TituloSecao({ titulo, subtitulo, link }: TituloSecaoProps) {
  return (
    <div className="flex items-end justify-between gap-4 mb-6">
      <div className="flex flex-col gap-1">
        <h2 className="font-serif text-2xl sm:text-3xl text-areia-900">{titulo}</h2>
        {subtitulo && <p className="text-sm text-areia-600">{subtitulo}</p>}
      </div>
      {link && (
        <Link
          href={link.href}
          className="flex-none text-sm font-semibold text-marca-600 hover:text-marca-800 transition-colors"
        >
          {link.texto} →
        </Link>
      )}
    </div>
  );
}
