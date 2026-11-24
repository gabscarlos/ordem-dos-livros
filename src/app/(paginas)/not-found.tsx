import Link from "next/link";
import Image from "next/image";
import series from "@/constants/series";
import Titulo from "@/components/shared/Titulo";

const POPULARES = [
  "harry-potter",
  "percy-jackson",
  "corte-de-espinhos-e-rosas",
  "diario-de-pilar",
];

export default function NotFound() {
  const populares = POPULARES.map((id) => series.find((s) => s.id === id)).filter(
    (s): s is (typeof series)[number] => Boolean(s)
  );

  return (
    <div className="flex flex-col gap-8 pb-20">
      <Titulo
        principal="Página não encontrada"
        secundario="O endereço pode ter mudado ou não existe mais."
      />

      <p className="text-zinc-700">
        Use a busca no topo da página ou veja{" "}
        <Link href="/series" className="text-indigo-600 font-semibold hover:underline">
          todas as séries
        </Link>
        . Algumas das mais procuradas:
      </p>

      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {populares.map((s) => (
          <li key={s.id}>
            <Link href={`/series/${s.id}`} className="group flex flex-col gap-2">
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl shadow-md">
                <Image
                  src={s.livros[0].imagem}
                  alt={`Capa de ${s.titulo}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 200px"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-serif font-bold text-zinc-900 group-hover:text-indigo-600 leading-tight">
                {s.titulo}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
