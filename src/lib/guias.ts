import series from "@/constants/series";
import detalhesSeries from "@/constants/detalhes-series";
import type { Guia } from "@/constants/guias";

type Serie = (typeof series)[number];

export interface ItemResolvido {
  serie: Serie;
  motivo: string;
  idade?: string;
}

const primeiraFrase = (texto: string) => {
  const fim = texto.search(/[.!?](\s|$)/);
  const frase = fim > 0 ? texto.slice(0, fim + 1) : texto;
  return frase.length > 220 ? `${frase.slice(0, 220).replace(/\s+\S*$/, "")}…` : frase;
};

const porTitulo = (a: Serie, b: Serie) => a.titulo.localeCompare(b.titulo, "pt-BR");

// Monta a lista de séries de um guia: curada (itens) ou automática.
export function itensDoGuia(guia: Guia): ItemResolvido[] {
  const comIdade = (serie: Serie, motivo: string): ItemResolvido => ({
    serie,
    motivo,
    idade: detalhesSeries[serie.id]?.idade,
  });

  if (guia.itens) {
    return guia.itens
      .map((item) => {
        const serie = series.find((s) => s.id === item.serie);
        return serie ? comIdade(serie, item.motivo) : undefined;
      })
      .filter((x): x is ItemResolvido => Boolean(x));
  }

  if (guia.automatico === "curtas") {
    return [...series]
      .filter((s) => s.livros.length <= 3)
      .sort(porTitulo)
      .map((s) => comIdade(s, primeiraFrase(s.descricao)));
  }

  if (guia.automatico === "adaptadas") {
    // Só adaptações que existem de fato ("Sim. ..."), não as anunciadas ou
    // em desenvolvimento.
    return [...series]
      .filter((s) => detalhesSeries[s.id]?.adaptacao?.startsWith("Sim."))
      .sort(porTitulo)
      .map((s) => comIdade(s, detalhesSeries[s.id]!.adaptacao!.replace(/^Sim\.\s*/, "")));
  }

  return [];
}
