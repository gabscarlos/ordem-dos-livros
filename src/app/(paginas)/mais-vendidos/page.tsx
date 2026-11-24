import { Metadata } from "next";
import Titulo from "@/components/shared/Titulo";
import LivroMaisVendido from "@/components/principal/LivroMaisVendido";
import maisVendidos, { atualizadoEm } from "@/constants/mais-vendidos";
import { SITE_URL } from "@/lib/site";

const [ano, mes, dia] = atualizadoEm.split("-").map(Number);
const dataAtualizacao = new Date(Date.UTC(ano, mes - 1, dia, 12));
const mesAno = dataAtualizacao.toLocaleDateString("pt-BR", { month: "long", year: "numeric", timeZone: "UTC" });
const dataCompleta = dataAtualizacao.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export const metadata: Metadata = {
  title: `Livros mais vendidos na Amazon em ${mesAno}`,
  description: `Os ${maisVendidos.length} livros mais vendidos na Amazon Brasil em ${mesAno}, com ${maisVendidos[0].titulo}, de ${maisVendidos[0].autor}, em primeiro lugar.`,
  keywords: ["livros mais vendidos", "best sellers", "literatura", "leitura", "livros populares", "amazon"],
  openGraph: {
    title: "Mais Vendidos - Explore os livros mais vendidos",
    description: "Explore os livros mais vendidos do mercado na Amazon.",
    images: ["/logo.png"],
    url: `${SITE_URL}/mais-vendidos`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mais Vendidos - Explore os livros mais vendidos",
    description: "Explore os livros mais vendidos do mercado na Amazon.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: `${SITE_URL}/mais-vendidos`,
  },
};

export default function MaisVendidos() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Livros mais vendidos na Amazon em ${mesAno}`,
    description: `Ranking dos livros mais vendidos na Amazon Brasil, atualizado em ${dataCompleta}.`,
    dateModified: atualizadoEm,
    url: `${SITE_URL}/mais-vendidos`,
    itemListElement: maisVendidos.map((livro, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/mais-vendidos`,
      name: livro.titulo,
      image: livro.imagem,
      author: {
        "@type": "Person",
        name: livro.autor,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col gap-8">
        <Titulo
          principal={`Livros mais vendidos na Amazon em ${mesAno}`}
          secundario={`Ranking da Amazon Brasil, atualizado em ${dataCompleta}. A lista muda com frequência.`}
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center gap-8">
          {[...maisVendidos]
            .sort(
              (a, b) =>
                parseInt(a.posicao.replace("#", "")) -
                parseInt(b.posicao.replace("#", ""))
            )
            .map((livro) => (
              <LivroMaisVendido key={livro.id} {...livro} />
            ))}
        </div>
      </div>
    </>
  );
}
