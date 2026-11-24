import { notFound } from "next/navigation";

// Envia qualquer URL desconhecida para o not-found.tsx deste grupo,
// que é renderizado dentro do layout com cabeçalho e rodapé.
export default function NaoEncontrado() {
  notFound();
}
