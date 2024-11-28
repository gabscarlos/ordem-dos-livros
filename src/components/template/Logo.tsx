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
        <span className="font-thin text-zinc-400 mt-4">livro após</span>
        <span className="font-black text-lg tracking-widest">LIVRO</span>
      </div>
    </Link>
  );
}
