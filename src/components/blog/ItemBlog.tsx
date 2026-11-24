import Image from "next/image";
import Link from "next/link";
export interface ItemBlogProps {
    id: string;
    data: string;
    titulo: string;
    imagem: string;
    descricao: string;
}
export default function ItemBlog(props: ItemBlogProps) {
    return (
        <Link 
            href={`/blog/${props.id}`} 
            aria-label={`Ver detalhes de ${props.titulo}`}
            className="group flex flex-col min-h-full rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-zinc-100"
        >
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={props.imagem}
                    alt={props.titulo}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="flex flex-col flex-1 p-5 gap-3">
                <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">{props.data}</span>
                <h3 className="text-xl font-serif font-bold text-zinc-900 leading-tight group-hover:text-indigo-600 transition-colors">
                    {props.titulo}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3 flex-1">
                    {props.descricao}
                </p>
                <div className="flex items-center text-indigo-600 font-semibold text-sm mt-2">
                    Ler artigo completo
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </Link>
    )
}