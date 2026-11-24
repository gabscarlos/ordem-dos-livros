import { Metadata } from "next";
import LivroDestaque from "@/components/principal/LivroDestaque";
import Pagina from "@/components/template/Pagina";
import series from "@/constants/series";
import Categoria from "@/components/principal/Categoria";
import SerieDestaque from "@/components/principal/SerieDestaque";
import LivrosDestaque from "@/components/principal/LivrosDestaque";
import Titulo from "@/components/shared/Titulo";

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Pagina>
        <LivrosDestaque series={series} />

        <div className="flex flex-col gap-8 mt-12">
          <Titulo
            principal="Encontre Mais Categorias"
            secundario="Explore nosso catálogo por temas e interesses"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-5 mx-auto w-full justify-items-center">
            <Categoria
              src="/books.png"
              alt="Imagem de Livros"
              link="/series"
              titulo="Séries"
              className="bg-gradient-to-br from-blue-400 to-purple-700"
            />
            <Categoria
              src="/blogger.png"
              alt="Imagem de Livros"
              link="/autores"
              titulo="Autores"
              className="bg-gradient-to-r from-green-200 to-blue-500"
            />
            <Categoria
              src="/blogging.png"
              alt="Imagem de Livros"
              link="/blog"
              titulo="Blog"
              className="bg-gradient-to-r from-cyan-500 to-teal-500"
            />
            <Categoria
              src="/book.png"
              alt="Imagem de Livros"
              link="/mais-vendidos"
              titulo="Mais Vendidos"
              className="bg-gradient-to-r from-green-200 to-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 mt-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-serif font-bold text-zinc-900 border-b-4 border-amber-400 pb-2 inline-block self-start">
              Audio Books
            </h2>
            <div className="flex flex-col gap-4">
              <iframe
                className="rounded-md w-full max-w-sm mx-auto shadow-md hover:shadow-lg transition-shadow"
                src="https://open.spotify.com/embed/track/4tYOEhXfa3AvD6omJlZmSJ?utm_source=generator"
                width="90%"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                className="rounded-md w-full max-w-sm mx-auto shadow-md hover:shadow-lg transition-shadow"
                src="https://open.spotify.com/embed/track/4ucsFgz6gRWmkZwXCCzcos?utm_source=generator"
                width="90%"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                className="rounded-md w-full max-w-sm mx-auto shadow-md hover:shadow-lg transition-shadow"
                src="https://open.spotify.com/embed/track/38Sy3MN5A9fgwkdiq4oAN5?utm_source=generator"
                width="90%"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                className="rounded-md w-full max-w-sm mx-auto shadow-md hover:shadow-lg transition-shadow"
                src="https://open.spotify.com/embed/track/6NXmgfecGwUzJexoQwen8f?utm_source=generator"
                width="90%"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-serif font-bold text-zinc-900 border-b-4 border-amber-400 pb-2 inline-block self-start">
              Séries Populares
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <SerieDestaque
                link="/series/o-senhor-dos-aneis"
                imagem="https://m.media-amazon.com/images/I/81SM0D5+DwL._SL1500_.jpg"
                className="hover:scale-105 transition-all duration-300 ease-in-out shadow-md hover:shadow-xl"
              />
              <SerieDestaque
                link="/series/maze-runner"
                imagem="https://m.media-amazon.com/images/I/61ILpNSiAuL._SY385_.jpg"
                className="hover:scale-105 transition-all duration-300 ease-in-out shadow-md hover:shadow-xl"
              />
              <SerieDestaque
                link="/series/as-cronicas-de-gelo-e-fogo"
                imagem="https://m.media-amazon.com/images/I/91eHityofNL._SL1500_.jpg"
                className="hover:scale-105 transition-all duration-300 ease-in-out shadow-md hover:shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-12 mb-12">
          <Titulo
            principal="Séries Infanto-juvenis"
            secundario="Aventuras incríveis para jovens leitores"
          />
          <div className="flex flex-col gap-2 items-center">
            <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-2">
              <LivroDestaque
                link="/series/diario-de-um-banana"
                imagem="https://m.media-amazon.com/images/I/71fWaI5myqL._SY385_.jpg"
                titulo="Diário de um Banana"
                autor="Jeff Kinney"
              />
              <LivroDestaque
                link="/series/harry-potter"
                imagem="https://m.media-amazon.com/images/I/81ibfYk4qmL._SY385_.jpg"
                titulo="Harry Potter"
                autor="J.K. Rowling"
              />
              <LivroDestaque
                link="/series/percy-jackson"
                imagem="https://m.media-amazon.com/images/I/81t6a6Cje2L._UF894,1000_QL80_.jpg"
                titulo="Percy Jackson"
                autor="Rick Riordan"
              />
              <LivroDestaque
                link="/series/as-cronicas-de-narnia"
                imagem="https://m.media-amazon.com/images/I/71yJLhQekBL._SY385_.jpg"
                titulo="As Crônicas de Nárnia"
                autor="C.S. Lewis"
              />
              <LivroDestaque
                link="/series/jogos-vorazes"
                imagem="https://m.media-amazon.com/images/I/61I24wOsn8L._SY385_.jpg"
                titulo="Jogos Vorazes"
                autor="Suzanne Collins"
              />
            </div>
          </div>
        </div>
      </Pagina>
    </>
  );
}
