import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Busca() {
  return (
    <div className="flex items-center w-full max-w-lg mx-auto bg-white rounded-md border border-gray-300">
      {/* Campo de entrada */}
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Busque Séries"
        className="flex-grow py-2 px-4 text-gray-900 placeholder-gray-400 text-sm focus:outline-none"
      />
      {/* Botão */}
      <button
        className="flex items-center justify-center bg-blue-500 text-white w-12 h-12 rounded-r-md hover:bg-blue-600 transition-all"
        aria-label="Buscar"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
