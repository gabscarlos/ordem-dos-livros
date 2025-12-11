import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3 select-none">
      <div className="relative transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
        <Image
          src="/logo.png"
          width={65}
          height={65}
          alt="Logo Ordem Livro"
          className="drop-shadow-sm"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-zinc-400 text-2xl font-bold tracking-[0.3em] uppercase translate-y-1 ml-0.5 transition-colors group-hover:text-indigo-500">
          Ordem
        </span>
        <span className="font-serif font-black text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-700 group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-500">
          LIVRO
        </span>
      </div>
    </Link>
  );
}
