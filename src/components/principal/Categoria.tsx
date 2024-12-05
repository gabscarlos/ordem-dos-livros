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
        <Link href={props.link}>
            <div className={`
                flex justify-center items-center w-64 h-32
                rounded-lg p-1 gap-2 ${props.className}`}>
              <Image
                src={props.src}
                alt={props.alt}
                width={80}
                height={100}
              />
              <h1 className="text-xl font-bold text-white uppercase">{props.titulo}</h1>
            </div>
          </Link>
    )
}