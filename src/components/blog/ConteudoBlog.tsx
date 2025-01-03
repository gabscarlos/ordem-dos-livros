import { marked } from "marked";
import Image from "next/image";


export interface ConteudoBlogProps {
  id: string;  
  conteudo: string;
  imagem: string;
  titulo: string;
}

export default function ConteudoBlog(props: ConteudoBlogProps) {
  const conteudo = marked.parse(props.conteudo);
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Image
        src={props.imagem}
        alt={`Foto de ${props.titulo}`}  
        className="h-96 w-5/6 object-cover object-top rounded-md"
        width={1000}
        height={1000}        
      />
      <article className="prose lg:prose-xl text-justify">
        <div dangerouslySetInnerHTML={{ __html: conteudo }} />
      </article>
    </div>
  );
}