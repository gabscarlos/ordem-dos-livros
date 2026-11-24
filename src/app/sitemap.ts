import type { MetadataRoute } from "next";
import series from "@/constants/series";
import autores from "@/constants/autores";
import noticias from "@/constants/blog/noticias";
import resenhas from "@/constants/blog/resenhas";
import listasTematicas from "@/constants/blog/listas-tematicas";
import curiosidadesLiterarias from "@/constants/blog/curiosidades-literarias";
import generos from "@/constants/generos";
import detalhesSeries from "@/constants/detalhes-series";
import { url } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const estaticas = ["/", "/series", "/autores", "/blog", "/mais-vendidos"].map(
    (path) => ({
      url: url(path),
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
    })
  );

  const paginasSeries = series.map((serie) => ({
    url: url(`/series/${serie.id}`),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const paginasAutores = autores.map((autor) => ({
    url: url(`/autores/${autor.id}`),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const paginasBlog = [
    ...noticias,
    ...resenhas,
    ...listasTematicas,
    ...curiosidadesLiterarias,
  ].map((post) => ({
    url: url(`/blog/${post.id}`),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const paginasGeneros = generos
    .filter((g) => series.some((s) => detalhesSeries[s.id]?.generos.includes(g.id)))
    .map((g) => ({
      url: url(`/generos/${g.id}`),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  return [
    ...estaticas,
    ...paginasSeries,
    ...paginasGeneros,
    ...paginasAutores,
    ...paginasBlog,
  ];
}
