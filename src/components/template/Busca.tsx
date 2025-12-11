"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Busca() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/resultados?search=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center w-full bg-white/95 backdrop-blur-sm rounded-full shadow-xl border border-white/20 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-400 transition-all duration-300">
      <input
        id="search"
        name="search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Qual série você procura hoje?"
        className="flex-grow py-3 px-6 text-gray-900 placeholder-gray-500 text-base bg-transparent focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="flex items-center justify-center bg-indigo-600 text-white w-14 h-12 hover:bg-indigo-700 transition-colors"
        aria-label="Buscar"
      >
        <MagnifyingGlassIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
