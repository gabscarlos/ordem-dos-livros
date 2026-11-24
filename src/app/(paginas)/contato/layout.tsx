import type { Metadata } from "next";
import { url } from "@/lib/site";

// A página de contato é um componente cliente (formulário), então o
// título e a descrição ficam neste layout.
export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o Ordem Livro: sugira uma série, aponte um erro na ordem dos livros ou mande sua mensagem.",
  alternates: { canonical: url("/contato") },
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
