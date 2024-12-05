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
    <div className="flex flex-col gap-5">
      <Image
        src={props.imagem}
        alt={`Foto de ${props.nome}`}  
        className="h-96 object-cover rounded-md"
        width={1000}
        height={1000}
      />
      <article className="prose lg:prose-xl dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: biografia }} />
      </article>
    </div>
  );
}