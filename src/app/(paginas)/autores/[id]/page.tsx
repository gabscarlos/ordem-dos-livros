import ConteudoAutor from "@/components/autor/ConteudoAutor";
import autores from "@/constants/autores";

export interface AutorPageProps {
  params: { id: string };
}

export default async function Autor({ params }: AutorPageProps) {
  // A variável `id` é obtida de maneira assíncrona
  const { id } = await params; // Extrai o "id" dos parâmetros
  
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
