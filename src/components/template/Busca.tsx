"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export interface BuscaProps {
  /** Versão maior, usada no destaque da página inicial. */
  grande?: boolean;
  id?: string;
}

export default function Busca({ grande = false, id = "busca" }: BuscaProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const buscar = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/resultados?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form
      role="search"
      onSubmit={buscar}
      className={`flex items-center w-full bg-white rounded-full border border-areia-200 shadow-sm focus-within:border-marca-400 focus-within:ring-2 focus-within:ring-marca-200 transition-all ${
        grande ? "p-1.5 pl-5" : "p-1 pl-4"
      }`}
    >
      <MagnifyingGlassIcon aria-hidden="true" className={`flex-none text-areia-400 ${grande ? "h-5 w-5" : "h-4 w-4"}`} />
      <label htmlFor={id} className="sr-only">
        Buscar série, livro ou autor
      </label>
      <input
        id={id}
        name="search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Série, livro ou autor"
        className={`flex-grow min-w-0 px-3 bg-transparent text-areia-900 placeholder-areia-400 focus:outline-none ${
          grande ? "py-2.5 text-base" : "py-1.5 text-sm"
        }`}
      />
      <button
        type="submit"
        className={`flex-none rounded-full bg-areia-900 text-areia-50 font-semibold hover:bg-marca-700 transition-colors ${
          grande ? "px-6 py-2.5 text-sm" : "px-4 py-1.5 text-xs"
        }`}
      >
        Buscar
      </button>
    </form>
  );
}
