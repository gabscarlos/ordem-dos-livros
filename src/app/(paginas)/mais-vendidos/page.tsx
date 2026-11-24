import { Metadata } from "next";
import Titulo from "@/components/shared/Titulo";
import LivroMaisVendido from "@/components/principal/LivroMaisVendido";
import maisVendidos from "@/constants/mais-vendidos";

export const metadata: Metadata = {
  title: "Livros mais vendidos na Amazon",
  description: "Explore uma lista completa com os livros mais vendidos do mercado na Amazon. Fique por dentro dos lançamentos e best-sellers.",
  keywords: ["livros mais vendidos", "best sellers", "literatura", "leitura", "livros populares", "amazon"],
  openGraph: {
    title: "Mais Vendidos - Explore os livros mais vendidos",
    description: "Explore os livros mais vendidos do mercado na Amazon.",
    images: ["/logo.png"],
    url: "https://ordemlivro.vercel.app/mais-vendidos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mais Vendidos - Explore os livros mais vendidos",
    description: "Explore os livros mais vendidos do mercado na Amazon.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://ordemlivro.vercel.app/mais-vendidos",
  },
};

export default function MaisVendidos() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Livros Mais Vendidos",
    description: "Explore uma lista dos livros mais vendidos do mercado.",
    url: "https://ordemlivro.vercel.app/mais-vendidos",
    itemListElement: maisVendidos.map((livro, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://ordemlivro.vercel.app/mais-vendidos`,
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
          principal="Mais Vendidos Amazon"
          secundario="Explore os livros mais vendidos do mercado"
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
