import Link from "next/link";
import Image from "next/image";

export interface Categoria{
    link: string;
    titulo: string;
    src: string;
    alt: string;
    className?: string;
}

export default function Categoria(props:Categoria){
    return(
        <Link href={props.link} className="block group">
            <div className={`
                flex items-center w-full sm:w-64 h-24
                rounded-xl p-4 gap-4 shadow-md transition-all duration-300
                hover:shadow-lg hover:-translate-y-1 ${props.className}
            `}>
              <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={props.src}
                    alt={props.alt}
                    fill
                    sizes="48px"
                    className="object-contain drop-shadow-md"
                  />
              </div>
              <span className="text-lg font-bold text-white tracking-wide">{props.titulo}</span>
            </div>
          </Link>
    )
}