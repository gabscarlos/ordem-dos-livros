import ItemBlog from "@/components/blog/ItemBlog";
import Titulo from "@/components/shared/Titulo";
import noticias from "@/constants/blog/noticias";
import resenhas from "@/constants/blog/resenhas";
import listasTematicas from "@/constants/blog/listas-tematicas";
import curiosidadesLiterarias from "@/constants/blog/curiosidades-literarias";

export const metadata = {
  title: "Blog | Ordem dos Livros",
  description: "Explore resenhas de livros, listas temáticas, curiosidades literárias e notícias sobre o universo literário. Tudo em um só lugar!",
  openGraph: {
    title: "Blog | Ordem dos Livros",
    description:
      "Descubra resenhas de livros, listas temáticas, curiosidades literárias e muito mais. Mergulhe no mundo da literatura com a Ordem dos Livros.",
    url: "https://aordemdoslivros.vercel.app/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Ordem dos Livros",
    description:
      "Resenhas de livros, listas temáticas e curiosidades literárias. O blog ideal para apaixonados por leitura.",
    site: "@ordemdoslivros",
  },
};

export default function Blog() {
  return (
    <div className="flex flex-col gap-5">
      {/* Título principal */}
      <Titulo
        principal="Blog"
        secundario="Resenhas de Livros, Listas Temáticas, Curiosidades Literárias e Mais"
      />

      {/* Notícias */}
      <section className="mt-4">
        <h1 className="text-2xl font-bold text-zinc-700">Notícias</h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
          {noticias
            .sort((a, b) => a.titulo.localeCompare(b.titulo))
            .map((noticia) => (
              <article key={noticia.id}>
                <ItemBlog {...noticia} />
              </article>
            ))}
        </div>
      </section>

      {/* Resenhas */}
      <section className="mt-4">
        <h1 className="text-2xl font-bold text-zinc-700">Resenhas de Livros</h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
          {resenhas
            .sort((a, b) => a.titulo.localeCompare(b.titulo))
            .map((resenha) => (
              <article key={resenha.id}>
                <ItemBlog {...resenha} />
              </article>
            ))}
        </div>
      </section>

      {/* Curiosidades Literárias */}
      <section className="mt-4">
        <h1 className="text-2xl font-bold text-zinc-700">Curiosidades Literárias</h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
          {curiosidadesLiterarias
            .sort((a, b) => a.titulo.localeCompare(b.titulo))
            .map((curiosidade) => (
              <article key={curiosidade.id}>
                <ItemBlog {...curiosidade} />
              </article>
            ))}
        </div>
      </section>

      {/* Listas Temáticas */}
      <section className="mt-4">
        <h1 className="text-2xl font-bold text-zinc-700">Listas Temáticas</h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
          {listasTematicas
            .sort((a, b) => a.titulo.localeCompare(b.titulo))
            .map((lista) => (
              <article key={lista.id}>
                <ItemBlog {...lista} />
              </article>
            ))}
        </div>
      </section>
    </div>
  );
}
