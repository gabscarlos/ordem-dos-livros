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
        
            <div  className="border p-4 rounded-md shadow-md">
              <Link href={`/blog/${props.id}`} aria-label={`Ver detalhes de ${props.titulo}`}>
                <div className="block">
                  <Image
                    src={props.imagem}
                    alt={props.titulo}
                    width={500}
                    height={300}
                    className="w-full h-36 rounded-md object-cover object-top"
                  />
                  <h1 className="text-lg font-semibold mt-2">{props.titulo}</h1>
                  <p className="text-sm text-gray-600">{props.descricao}</p>
                </div>
                <button className="botao roxo mt-4 text-sm">Leia Mais</button>
              </Link>
            </div>
    )
}