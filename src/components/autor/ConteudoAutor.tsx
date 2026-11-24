import { marked } from "marked";
import Image from "next/image";
import Breadcrumb from "../shared/Breadcrumb";

export interface ConteudoAutorProps {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
  biografia: string;
}

export default function ConteudoAutor(props: ConteudoAutorProps) {
  // A biografia começa com "# Nome", que já aparece no topo da página: esse
  // título sai, e qualquer outro "#" vira "##" para a página ter um único h1.
  const biografia = marked.parse(
    props.biografia.replace(/^\s*# .*\n/, "").replace(/^( {0,3})# /gm, "$1## ")
  );

  return (
    <div className="flex flex-col gap-10">
      <Breadcrumb items={[{ label: "Autores", href: "/autores" }, { label: props.nome }]} />

      <section className="rounded-[2rem] bg-gradient-to-b from-areia-50 to-areia-100 border border-areia-200 shadow-estante px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-10">
        <div className="relative h-40 w-40 sm:h-48 sm:w-48 flex-none rounded-full overflow-hidden ring-4 ring-marca-300 shadow-livro">
          <Image src={props.imagem} alt={`Foto de ${props.nome}`} fill priority sizes="192px" className="object-cover object-top" />
        </div>
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-marca-600">Autor</span>
          <h1 className="font-serif text-4xl sm:text-5xl leading-[1.05] text-areia-900">{props.nome}</h1>
          <p className="text-areia-600">{props.descricao}</p>
        </div>
      </section>

      <article className="prose prose-stone max-w-3xl prose-headings:font-serif prose-headings:font-normal prose-headings:text-areia-900 prose-p:text-areia-700 prose-a:text-marca-700 prose-strong:text-areia-900">
        <div dangerouslySetInnerHTML={{ __html: biografia }} />
      </article>
    </div>
  );
}
