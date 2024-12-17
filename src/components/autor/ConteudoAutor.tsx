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
        className="h-96 w-5/6 object-cover object-top rounded-md"
        width={1000}
        height={1000}        
      />
      <article className="prose lg:prose-xl text-justify">
        <div dangerouslySetInnerHTML={{ __html: biografia }} />
      </article>
    </div>
  );
}