import { Metadata } from "next";
import Link from "next/link";
import generos from "@/constants/generos";
import detalhesSeries from "@/constants/detalhes-series";
import Pagina from "@/components/template/Pagina";
import series from "@/constants/series";
import autores from "@/constants/autores";
import maisVendidos from "@/constants/mais-vendidos";
import EstanteDestaque from "@/components/home/EstanteDestaque";
import FileiraSeries, { type SerieNaFileira } from "@/components/home/FileiraSeries";
import MaisVendidosResumo from "@/components/home/MaisVendidosResumo";
import TituloSecao from "@/components/home/TituloSecao";

// Regera a página uma vez por dia para alternar os livros em destaque.
export const revalidate = 86400;

// Escolhe as séries do dia: a primeira vai para o destaque da estante e as
// outras quatro para "Comece por aqui". Muda uma vez por dia.
function selecaoDoDia() {
  const dia = Math.floor(Date.now() / 86_400_000);
  const n = series.length;
  const passo = 7; // espalha a escolha pela lista; repetidos são ignorados
  const escolhidas = new Set<number>();
  for (let i = 0; escolhidas.size < Math.min(5, n); i++) {
    escolhidas.add((dia * 5 + i * passo) % n);
  }
  const [destaque, ...outras] = [...escolhidas].map((idx) => series[idx]);

  // O autor da semana muda a cada 7 dias, entre os autores que têm séries no site.
  const comSeries = autores.filter((a) => series.some((s) => s.autor.id === a.id));
  const autor = comSeries[Math.floor(dia / 7) % comSeries.length];

  return {
    serieDoDia: {
      id: destaque.id,
      titulo: destaque.titulo,
      autor: destaque.autor.nome,
      totalLivros: destaque.livros.length,
      capas: destaque.livros.slice(0, 3).map((l) => ({ titulo: l.titulo, imagem: l.imagem })),
    },
    comecePorAqui: outras.map((s) => ({
      serieId: s.id,
      serie: s.titulo,
      titulo: s.livros[0].titulo,
      imagem: s.livros[0].imagem,
      autor: s.autor.nome,
      totalLivros: s.livros.length,
    })),
    autorDaSemana: {
      id: autor.id,
      nome: autor.nome,
      imagem: autor.imagem,
      series: series.filter((s) => s.autor.id === autor.id).length,
    },
  };
}

const paraFileira = (ids: string[]): SerieNaFileira[] =>
  ids
    .map((id) => series.find((s) => s.id === id))
    .filter((s): s is (typeof series)[number] => Boolean(s))
    .map((s) => ({
      id: s.id,
      titulo: s.titulo,
      autor: s.autor.nome,
      capa: s.livros[0].imagem,
      totalLivros: s.livros.length,
    }));

const MAIS_PROCURADAS = [
  "diario-de-pilar",
  "harry-potter",
  "percy-jackson",
  "corte-de-espinhos-e-rosas",
  "jogos-vorazes",
  "maze-runner",
  "e-assim-que-acaba",
  "the-witcher",
];

const PEQUENOS_LEITORES = [
  "diario-de-um-banana",
  "o-homem-cao",
  "diario-de-uma-garota-nada-popular",
  "os-detetives-do-predio-azul",
  "as-aventuras-do-capitao-cueca",
  "socorro-cai-dentro-do-videogame",
  "mortina",
  "as-cronicas-de-narnia",
];

export const metadata: Metadata = {
  title: { absolute: "Ordem Livro - Séries de Livros em Ordem de Leitura" },
  description: "Explore uma coleção incrível de séries de livros em ordem cronológica e de leitura. Encontre seu próximo livro favorito com autores renomados.",
  keywords: ["séries de livros", "autores", "literatura", "livros populares", "histórias épicas", "ordem de leitura"],
  openGraph: {
    title: "Início - Descubra Séries de Livros Incríveis",
    description: "Explore uma coleção incrível de séries de livros em ordem cronológica e de leitura.",
    images: ["/logo.png"],
    url: "https://ordemlivro.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Início - Descubra Séries de Livros Incríveis",
    description: "Explore uma coleção incrível de séries de livros em ordem cronológica e de leitura.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://ordemlivro.vercel.app/",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ordem Livro",
    description: "Explore uma coleção incrível de séries de livros, com autores renomados e histórias fascinantes.",
    url: "https://ordemlivro.vercel.app/",
    itemListElement: series.map((serie, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://ordemlivro.vercel.app/series/${serie.id}`,
      name: serie.titulo,
      image: serie.imagem,
      author: {
        "@type": "Person",
        name: serie.autor.nome,
      },
    })),
  };

  const selecao = selecaoDoDia();
  const totalLivros = series.reduce((n, s) => n + s.livros.length, 0);
  const generosComSeries = generos
    .map((g) => ({
      ...g,
      total: series.filter((s) => detalhesSeries[s.id]?.generos.includes(g.id)).length,
    }))
    .filter((g) => g.total > 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Pagina>
        <div className="flex flex-col gap-16 sm:gap-20">
          <EstanteDestaque
            totalSeries={series.length}
            totalLivros={totalLivros}
            serieDoDia={selecao.serieDoDia}
            autorDaSemana={selecao.autorDaSemana}
            comecePorAqui={selecao.comecePorAqui}
          />

          <section>
            <TituloSecao
              titulo="Séries mais procuradas"
              subtitulo="As que os leitores mais consultam por aqui"
              link={{ href: "/series", texto: "Ver todas" }}
            />
            <FileiraSeries series={paraFileira(MAIS_PROCURADAS)} />
          </section>

          <nav aria-label="Gêneros">
            <TituloSecao titulo="Séries por gênero" subtitulo="Escolha um estilo e veja as séries em ordem" />
            <ul className="flex flex-wrap gap-3">
              {generosComSeries.map((g) => (
                <li key={g.id}>
                  <Link
                    href={`/generos/${g.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-areia-300 bg-white/70 px-5 py-2.5 font-serif text-areia-900 hover:border-marca-400 hover:bg-marca-50 transition-colors"
                  >
                    {g.nome}
                    <span className="font-sans text-xs text-marca-700">{g.total}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section>
            <TituloSecao
              titulo="Para pequenos leitores"
              subtitulo="Séries infantis e infantojuvenis para ler na ordem"
              link={{ href: "/generos/infantil", texto: "Ver mais" }}
            />
            <FileiraSeries series={paraFileira(PEQUENOS_LEITORES)} />
          </section>

          <section>
            <TituloSecao
              titulo="Mais vendidos na Amazon"
              subtitulo="Os livros que estão no topo do ranking agora"
              link={{ href: "/mais-vendidos", texto: "Ver o top 20" }}
            />
            <MaisVendidosResumo livros={maisVendidos.slice(0, 5)} />
          </section>
        </div>
      </Pagina>
    </>
  );
}
