import ConteudoAutor from "@/components/autor/ConteudoAutor";
import autores from "@/constants/autores";

export interface AutorPageProps {
  params: Promise<{ id: string }>;
}

export default async function Autor({ params }: AutorPageProps) {
  // Aguarde o objeto params
  const { id } = await params;

  // Encontra o autor com o id correspondente
  const autorEspecifico = autores.find((autor) => autor.id === id);

  if (!autorEspecifico) {
    return <div>Autor não encontrado</div>;
  }

  return (
    <div>
      <ConteudoAutor {...autorEspecifico} />
    </div>
  );
}
