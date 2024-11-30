import ConteudoSerie from "@/components/serie/ConteudoSerie";
import series from "@/constants/series";

export interface SeriePageProps {
  params: Promise<{ id: string }>;
}

export default async function Serie({ params }: SeriePageProps) {
  // A variável `id` é obtida de maneira assíncrona
  const { id } = await params; // Extrai o "id" dos parâmetros
  
  // Encontra a série com o id correspondente
  const serieEspecifica = series.find((serie) => serie.id === id);

  if (!serieEspecifica) {
    return <div>Série não encontrada</div>;
  }

  return (
    <div>
      <ConteudoSerie
        id={serieEspecifica.id}
        titulo={serieEspecifica.titulo}
        imagem={serieEspecifica.imagem}
        nome={serieEspecifica.autor.nome}
        descricao={serieEspecifica.descricao}
        autor={serieEspecifica.autor}
        livros={serieEspecifica.livros}
      />
    </div>
  );
}
