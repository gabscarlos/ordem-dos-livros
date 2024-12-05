import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Busca() {
  return (
    <div className="
      flex items-center w-1/2 rounded-md bg-white pl-3 outline outline-1
      -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline 
      has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 
      has-[input:focus-within]:outline-zinc-400"
    >
      <input
        id="price"
        name="price"
        type="text"
        placeholder="Busque Séries"
        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
      />
      <div className="botao roxo w-20">
        <MagnifyingGlassIcon className="size-10" />
      </div>
    </div>
  );
}
