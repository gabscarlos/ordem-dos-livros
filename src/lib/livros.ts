import series from "@/constants/series";

// Séries que já têm uma página para cada livro (/series/<serie>/<livro>).
// Começamos com poucas para ver se o Google indexa e se trazem visitas;
// para liberar outra série, é só incluir o id dela aqui.
export const SERIES_COM_PAGINA_DE_LIVRO = new Set([
  "diario-de-pilar",
  "harry-potter",
  "percy-jackson",
  "jogos-vorazes",
]);

export type Serie = (typeof series)[number];
export type Livro = Serie["livros"][number];

export const slugLivro = (titulo: string) =>
  titulo
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const temPaginaDeLivro = (serieId: string) => SERIES_COM_PAGINA_DE_LIVRO.has(serieId);

export const urlDoLivro = (serieId: string, titulo: string) =>
  `/series/${serieId}/${slugLivro(titulo)}`;

export interface LivroNaSerie {
  serie: Serie;
  livro: Livro;
  slug: string;
  /** Posição na ordem de leitura, começando em 1. */
  posicao: number;
  anterior?: Livro;
  proximo?: Livro;
}

export function livrosComPagina(): LivroNaSerie[] {
  return series
    .filter((s) => temPaginaDeLivro(s.id))
    .flatMap((serie) =>
      serie.livros.map((livro, i) => ({
        serie,
        livro,
        slug: slugLivro(livro.titulo),
        posicao: i + 1,
        anterior: serie.livros[i - 1],
        proximo: serie.livros[i + 1],
      }))
    );
}

export function encontrarLivro(serieId: string, slug: string): LivroNaSerie | undefined {
  return livrosComPagina().find((l) => l.serie.id === serieId && l.slug === slug);
}
