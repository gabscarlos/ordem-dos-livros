"use client";

import { useSearchParams } from "next/navigation";
import series from "@/constants/series";
import Link from "next/link";
import Image from "next/image";

// Função utilitária para remover acentos e normalizar texto
const normalizeText = (text: string) => {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

export default function Resultados() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  // Normaliza o termo de busca
  const normalizedQuery = normalizeText(searchQuery);

  // Filtra as séries com base na busca ignorando acentos
  const resultados = series.filter((serie) =>
    normalizeText(serie.titulo).includes(normalizedQuery)
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {searchQuery
          ? `Resultados para: "${searchQuery}"`
          : "Digite um termo de busca acima"}
      </h1>

      {resultados.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {resultados.map((serie) => (
            <li key={serie.id} className="border p-4 rounded-md shadow-md">
              <Link href={`/series/${serie.id}`} aria-label={`Ver detalhes de ${serie.titulo}`}>
                <div className="block">
                  <Image
                    src={serie.imagem}
                    alt={serie.titulo}
                    width={500}
                    height={300}
                    className="w-full h-36 rounded-md object-cover"
                  />
                  <h2 className="text-lg font-semibold mt-2">{serie.titulo}</h2>
                  <p className="text-sm text-gray-600">{serie.autor.nome}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : searchQuery ? (
        <p className="text-gray-500">Nenhum resultado encontrado.</p>
      ) : (
        <p className="text-gray-500">Insira um termo de busca para começar.</p>
      )}
    </div>
  );
}
