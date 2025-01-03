import ItemBlog from "@/components/blog/ItemBlog";
import Titulo from "@/components/shared/Titulo";
import resenhas from "@/constants/blog/resenhas";
import listasTematicas from "@/constants/blog/listas-tematicas";
import curiosidadesLiterarias from "@/constants/blog/curiosidades-literarias";

export default function Blog() {
  return (
    <div className="flex flex-col gap-5">
      <Titulo
        principal="Blog"
        secundario="Resenhas de Livros, Listas Temáticas, Curiosidades Literárias e Mais"
      />
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-zinc-700">Resenhas de Livros</h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
            {resenhas
            .sort((a, b) => a.titulo.localeCompare(b.titulo))
            .map((resenhas) => (
                <ItemBlog key={resenhas.id} {...resenhas} />
            ))}
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-zinc-700">Curiosidades Literárias</h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
            {curiosidadesLiterarias
            .sort((a, b) => a.titulo.localeCompare(b.titulo))
            .map((curiosidadesLiterarias) => (
                <ItemBlog key={curiosidadesLiterarias.id} {...curiosidadesLiterarias} />
            ))}
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-zinc-700">Listas Temáticas</h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
            {listasTematicas
            .sort((a, b) => a.titulo.localeCompare(b.titulo))
            .map((listasTematicas) => (
                <ItemBlog key={listasTematicas.id} {...listasTematicas} />
            ))}
        </div>
      </div>
    </div>
  );
}
