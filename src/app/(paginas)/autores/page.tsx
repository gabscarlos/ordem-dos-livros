import { Metadata } from "next";
import ItemAutor from "@/components/autor/ItemAutor";
import Titulo from "@/components/shared/Titulo";
import autores from "@/constants/autores";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Autores - Conheça os Escritores das Histórias que Você Ama",
  description: "Conheça os autores das histórias que você ama! Descubra mais sobre escritores famosos, suas obras e trajetórias.",
  keywords: ["autores", "escritores", "livros", "literatura", "biografias", "obras literárias"],
  openGraph: {
    title: "Autores - Conheça os Escritores das Histórias que Você Ama",
    description: "Explore detalhes sobre escritores famosos, suas obras e contribuições para a literatura.",
    images: ["/logo.png"],
    url: `${SITE_URL}/autores`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autores - Conheça os Escritores das Histórias que Você Ama",
    description: "Descubra mais sobre os autores que criaram suas histórias favoritas e veja suas principais obras.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: `${SITE_URL}/autores`,
  },
};

export default function Autores() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Autores",
    description: "Lista de autores famosos e suas obras.",
    url: `${SITE_URL}/autores`,
    itemListElement: autores.map((autor, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/autores/${autor.id}`,
      name: autor.nome,
      image: autor.imagem,
      description: autor.descricao,
    })),
  };

  return (
    <div className="flex flex-col gap-6 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Breadcrumb items={[{ label: "Autores" }]} />

      <div className="flex flex-col gap-10">
        <Titulo
          principal="Autores Consagrados"
          secundario="Explore os perfis dos grandes nomes da literatura mundial"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
          {autores
            .sort((a, b) => a.nome.localeCompare(b.nome))
            .map((autor) => (
              <ItemAutor key={autor.id} {...autor} />
            ))}
        </div>
      </div>
    </div>
  );
}
