import Image from "next/image";
import Link from "next/link";


export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <Image
        src={"/logo.png"}
        width={50}
        height={50}
        alt="Logo"
      />
      <div className="flex flex-col leading-3">
        <span className="font-light text-lg text-zinc-900 dark:text-zinc-400 mt-2">ordem dos</span>
        <span className="font-black text-2xl tracking-widest -mt-2">LIVRO</span>
      </div>
    </Link>
  );
}
