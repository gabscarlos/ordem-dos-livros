import Image from "next/image";

export interface CapaLivroProps {
  src: string;
  alt: string;
  /** Classes de largura (a altura segue a proporção 2:3). */
  className?: string;
  sizes: string;
  priority?: boolean;
}

// Capa com sombra e "lombada", para parecer um livro em pé na estante.
export default function CapaLivro({ src, alt, className = "w-28", sizes, priority }: CapaLivroProps) {
  return (
    <div
      className={`relative aspect-[2/3] flex-none overflow-hidden rounded-l-[3px] rounded-r-md shadow-livro transition-transform duration-300 group-hover:-translate-y-1.5 ${className}`}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/25 via-white/10 to-transparent"
      />
    </div>
  );
}
