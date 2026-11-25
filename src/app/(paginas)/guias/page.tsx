import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Titulo from "@/components/shared/Titulo";
import guias from "@/constants/guias";
import { itensDoGuia } from "@/lib/guias";
import { url } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guias de séries de livros",
  description:
    "Guias para escolher a próxima série: parecidas com Harry Potter, para adolescentes, séries curtas para maratonar e séries que viraram filme ou série.",
  alternates: { canonical: url("/guias") },
};

export default function Guias() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      <Breadcrumb items={[{ label: "Guias" }]} />
      <Titulo
        principal="Guias de séries de livros"
        secundario="Listas para ajudar a escolher a próxima série, cada uma com a ordem certa de leitura"
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {guias.map((guia) => {
          const itens = itensDoGuia(guia);
          return (
            <li key={guia.id}>
              <Link
                href={`/guias/${guia.id}`}
                className="group flex flex-col gap-4 h-full rounded-[1.75rem] bg-white/70 border border-areia-200 p-6 hover:bg-white hover:shadow-estante transition-all"
              >
                <div className="flex items-end gap-2 h-28">
                  {itens.slice(0, 5).map(({ serie }) => (
                    <div key={serie.id} className="relative aspect-[2/3] w-[4.5rem] overflow-hidden rounded-l-[3px] rounded-r-md shadow-livro">
                      <Image src={serie.livros[0].imagem} alt="" fill sizes="72px" className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-serif text-2xl text-areia-900 group-hover:text-marca-700">{guia.titulo}</h2>
                  <p className="text-sm text-areia-600">{guia.descricao}</p>
                  <span className="text-xs font-semibold uppercase tracking-wider text-marca-700 mt-2">{itens.length} séries →</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
