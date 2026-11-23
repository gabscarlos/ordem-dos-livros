import { marked } from "marked";
import Image from "next/image";
import Breadcrumb from "../shared/Breadcrumb";
import SocialShare from "../shared/SocialShare";


export interface ConteudoBlogProps {
  id: string;  
  conteudo: string;
  imagem: string;
  titulo: string;
}

export default function ConteudoBlog(props: ConteudoBlogProps) {
  const conteudo = marked.parse(props.conteudo);
  const shareUrl = `https://ordemlivro.vercel.app/blog/${props.id}`;

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumb 
        items={[
          { label: "Blog", href: "/blog" },
          { label: props.titulo }
        ]} 
      />

      <div className="relative w-full h-[300px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src={props.imagem}
          alt={`Imagem de destaque: ${props.titulo}`}  
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">{props.titulo}</h1>
          <div className="h-1.5 w-24 bg-indigo-500 rounded-full" />
        </div>
      </div>

      <div className="flex justify-between items-center bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-zinc-100">
         <SocialShare url={shareUrl} title={props.titulo} />
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-zinc-100">
        <article className="prose prose-zinc lg:prose-xl max-w-none text-justify prose-headings:font-serif prose-headings:text-zinc-900 prose-p:text-zinc-700 prose-a:text-indigo-600 hover:prose-a:text-indigo-700 prose-img:rounded-xl prose-img:shadow-lg">
          <div dangerouslySetInnerHTML={{ __html: conteudo }} />
        </article>
      </div>
    </div>
  );
}