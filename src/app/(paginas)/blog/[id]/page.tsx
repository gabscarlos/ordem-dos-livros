import resenhas from "@/constants/blog/resenhas";
import Link from "next/link";
import ConteudoBlog from "@/components/blog/ConteudoBlog";
import listasTematicas from "@/constants/blog/listas-tematicas";
import curiosidadesLiterarias from "@/constants/blog/curiosidades-literarias";

export interface ConteudoPageProps {
  params: Promise<{ id: string }>;
}

export default async function Conteudo({ params }: ConteudoPageProps) {
  // Aguarde o objeto params
  const { id } = await params;

  // Encontra o conteudo com o id correspondente
  const conteudoEspecifico =
    resenhas.find((resenha) => resenha.id === id) ||
    listasTematicas.find((lista) => lista.id === id) ||
    curiosidadesLiterarias.find((curiosidade) => curiosidade.id === id);

  if (!conteudoEspecifico) {
    return <div>Conteudo não encontrado</div>;
  }

  return (
    <div>
      {/* Conteúdo */}
      <ConteudoBlog {...conteudoEspecifico} />
      <Link href={`/blog`} className="flex justify-end mt-10">
        <button className="botao roxo">Voltar ao Blog</button>
      </Link>
    </div>
  );
}
