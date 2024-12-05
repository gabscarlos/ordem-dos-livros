import LivroDestaque from "@/components/principal/LivroDestaque";
import Pagina from "@/components/template/Pagina";
import series from "@/constants/series";
import Head from "next/head";
import Categoria from "@/components/principal/Categoria";
import SerieDestaque from "@/components/principal/SerieDestaque";
import LivroTop from "@/components/principal/LivroTop";
import AutorTop from "@/components/principal/AutorTop";
import autores from "@/constants/autores";

export default function Home() {
  return (
    <>
      <Head>
        {/* Meta Tags para SEO */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Início - Descubra Séries de Livros Incríveis</title>
        <meta
          name="description"
          content="Explore uma coleção incrível de séries de livros, com autores renomados e histórias fascinantes. Descubra seu próximo livro favorito!"
        />
        <meta
          name="keywords"
          content="séries de livros, autores, literatura, livros populares, histórias épicas"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph para Redes Sociais */}
        <meta
          property="og:title"
          content="Início - Descubra Séries de Livros Incríveis"
        />
        <meta
          property="og:description"
          content="Explore uma coleção incrível de séries de livros, com autores renomados e histórias fascinantes. Descubra seu próximo livro favorito!"
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://aordemdoslivros.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Início - Descubra Séries de Livros Incríveis"
        />
        <meta
          name="twitter:description"
          content="Explore uma coleção incrível de séries de livros, com autores renomados e histórias fascinantes. Descubra seu próximo livro favorito!"
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* Link Canonical */}
        <link rel="canonical" href="https://aordemdoslivros.vercel.app/" />

        {/* Dados Estruturados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Séries de Livros",
              description:
                "Explore uma coleção incrível de séries de livros, com autores renomados e histórias fascinantes.",
              url: "https://aordemdoslivros.vercel.app/",
              itemListElement: series.map((serie, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://aordemdoslivros.vercel.app/series/${serie.id}`,
                name: serie.titulo,
                image: serie.imagem,
                author: {
                  "@type": "Person",
                  name: serie.autor.nome,
                },
              })),
            }),
          }}
        />
      </Head>

      <Pagina>
        <div className="flex flex-row justify-evenly mb-14">
          <LivroDestaque
            link="/series/harry-potter"
            imagem="https://m.media-amazon.com/images/I/81pB+joKL4L._SL1500_.jpg"
            titulo="Série Harry Potter"
          />
          <LivroDestaque
            link="/series/diario-de-um-banana"
            imagem="https://m.media-amazon.com/images/I/71fWaI5myqL._SY385_.jpg"
            titulo="Série Diário de um Banana"
          />
          <LivroDestaque
            link="/series/duna"
            imagem="https://m.media-amazon.com/images/I/81zN7udGRUL._SY385_.jpg"
            titulo="Série Duna"
          />
          <LivroDestaque
            link="/series/outlander"
            imagem="https://m.media-amazon.com/images/I/61C4rFG-oYL._SY385_.jpg"
            titulo="Série Outlander"
          />
        </div>
        <h1 className="text-3xl font-bold">Encontre Mais Categorias</h1>
        <div className="flex justify-evenly gap-5 py-8 mb-5">
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
            src="/audio-book.png"
            alt="Imagem de Livros"
            link="/"
            titulo="Audio Books"
            className="bg-gradient-to-r from-cyan-500 to-teal-500"
          />
          <Categoria
            src="/comic-book.png"
            alt="Imagem de Livros"
            link="/"
            titulo="Quadrinhos"
            className="bg-gradient-to-r from-green-200 to-blue-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-5 mb-16">
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold">Audio Books</span>
            <iframe
              className="rounded-md"
              src="https://open.spotify.com/embed/track/4tYOEhXfa3AvD6omJlZmSJ?utm_source=generator"
              width="90%"
              height="80"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              className="rounded-md"
              src="https://open.spotify.com/embed/track/4ucsFgz6gRWmkZwXCCzcos?utm_source=generator"
              width="90%"
              height="80"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              className="rounded-md"
              src="https://open.spotify.com/embed/track/38Sy3MN5A9fgwkdiq4oAN5?utm_source=generator"
              width="90%"
              height="80"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              className="rounded-md"
              src="https://open.spotify.com/embed/track/6NXmgfecGwUzJexoQwen8f?utm_source=generator"
              width="90%"
              height="80"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-3xl font-bold">Séries Populares</span>
            <div className="flex gap-2">
              <SerieDestaque
                link="/series/o-senhor-dos-aneis"
                imagem="https://m.media-amazon.com/images/I/81SM0D5+DwL._SL1500_.jpg"
              />
              <SerieDestaque
                link="/series/maze-runner"
                imagem="https://m.media-amazon.com/images/I/61ILpNSiAuL._SY385_.jpg"
              />
              <SerieDestaque
                link="/series/as-cronicas-de-gelo-e-fogo"
                imagem="https://m.media-amazon.com/images/I/91eHityofNL._SL1500_.jpg"
              />
            </div>
          </div>
        </div>
        
        <span className="text-3xl font-bold">Séries Infanto-juvenis</span>
        <div className="grid grid-rows-2 grid-flow-col">
          <div className="row-span-3 col-span-5 flex flex-1 items-center justify-center">
            <LivroDestaque
              link="/series/diario-de-um-banana"
              imagem="https://m.media-amazon.com/images/I/71fWaI5myqL._SY385_.jpg"
              titulo="Diário de um Banana"
              className="scale-[1.5] transform"
            />
          </div>
          <div className="col-span-2 flex justify-between gap-4 scale-[0.9] transform">
            <LivroDestaque
              link="/series/diario-de-pilar"
              imagem="https://m.media-amazon.com/images/I/91K6PTWRdLL._SY385_.jpg"
              titulo="Série Diário de Pilar"
            />
            <LivroDestaque
              link="/series/os-detetives-do-predio-azul"
              imagem="https://m.media-amazon.com/images/I/91AkpDJouPL._SY385_.jpg"
              titulo="Série d.p.a."
            />
            <LivroDestaque
              link="/series/socorro-cai-dentro-do-videogame"
              imagem="https://m.media-amazon.com/images/I/813qC-wJ-VL._SY385_.jpg"
              titulo="Socorro, caí dentro do videogame"
            />
          </div>
          <div className="col-span-2 flex justify-between gap-4 scale-[0.9] transform">
            <LivroDestaque
              link="/series/as-aventuras-do-capitao-cueca "
              imagem="https://m.media-amazon.com/images/I/81efZ9kHKGL._SY385_.jpg"
              titulo="Série As Aventuras do Capitão Cueca"
            />
            <LivroDestaque
              link="/series/o-homem-cao"
              imagem="https://m.media-amazon.com/images/I/81DW1gZuEfL._SY425_.jpg"
              titulo="Série O Homem-Cão"
            />
            <LivroDestaque
              link="/series/mortina"
              imagem="https://m.media-amazon.com/images/I/A1hFhgISH9L._SY425_.jpg"
              titulo="Série Mortina"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10">
          <span className="text-3xl font-bold uppercase">Top 6 Livros</span>
          <span className="text-3xl font-bold uppercase">Top 3 Autores</span>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-10">
          <div className="flex flex-col gap-4">
            <div className="flex justify-start gap-2">
              {series
                .flatMap((serie) => serie.livros) // Extrai todos os livros
                .sort(() => Math.random() - 0.5) // Embaralha os livros
                .slice(0, 2) // Opcional: limita o número de livros exibidos (exemplo: 6)
                .map((livro) => (
                  <LivroTop
                    key={livro.id} // Cada livro deve ter uma `key` única
                    imagem={livro.imagem}
                    titulo={livro.titulo}
                    autor={livro.autor.nome}
                    linkAutor={`/autores/${livro.autor.id}`} // Link dinâmico do autor
                    linkAmazon={livro.link} // Link dinâmico do Amazon
                  />
                ))}
            </div>

            <div className="flex justify-start gap-2">
              {series
                .flatMap((serie) => serie.livros) // Extrai todos os livros
                .sort(() => Math.random() - 0.7) // Embaralha os livros
                .slice(0, 2) // Opcional: limita o número de livros exibidos (exemplo: 6)
                .map((livro) => (
                  <LivroTop
                    key={livro.id} // Cada livro deve ter uma `key` única
                    imagem={livro.imagem}
                    titulo={livro.titulo}
                    autor={livro.autor.nome}
                    linkAutor={`/autores/${livro.autor.id}`} // Link dinâmico do autor
                    linkAmazon={livro.link} // Link dinâmico do Amazon
                  />
                ))}
            </div>

            <div className="flex justify-start gap-2">
              {series
                .flatMap((serie) => serie.livros) // Extrai todos os livros
                .sort(() => Math.random() - 0.6) // Embaralha os livros
                .slice(0, 2) // Opcional: limita o número de livros exibidos (exemplo: 6)
                .map((livro) => (
                  <LivroTop
                    key={livro.id} // Cada livro deve ter uma `key` única
                    imagem={livro.imagem}
                    titulo={livro.titulo}
                    autor={livro.autor.nome}
                    linkAutor={`/autores/${livro.autor.id}`} // Link dinâmico do autor
                    linkAmazon={livro.link} // Link dinâmico do Amazon
                  />
                ))}
            </div>
          </div>
          <div className="flex flex-col items-start justify-center bg-pink-50 rounded-l-xl p-2 gap-2">
            <div className="flex flex-col gap-8 mx-4">
              {autores
                .sort(() => Math.random() - 0.5) // Embaralha o array
                .slice(0, 3) // Pega os primeiros 3 itens
                .map((autores) => (
                  <AutorTop
                    key={autores.id}
                    {...autores}
                    imagem={autores.imagem}
                    titulo={autores.nome}
                    descricao={autores.descricao}
                    linkAutor={`autores/${autores.id}`}
                  />
                ))}
            </div>
          </div>
        </div>        
      </Pagina>
    </>
  );
}
