import { marked } from "marked";
import Image from "next/image";


export interface ConteudoAutorProps {
  id: string;  
  biografia: string;
  imagem: string;
  nome: string;
}

export default function ConteudoAutor(props: ConteudoAutorProps) {
  const biografia = marked.parse(props.biografia);
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Image
        src={props.imagem}
        alt={`Foto de ${props.nome}`}  
        className="h-96 sm:w-5/6 lg:w-3/5 object-cover rounded-md"
        width={500}
        height={500}        
      />
      <article className="prose lg:prose-xl text-justify">
        <div dangerouslySetInnerHTML={{ __html: biografia }} />
      </article>
    </div>
  );
}