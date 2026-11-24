import type { Metadata } from "next";
import Link from "next/link";
import { url } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba quais dados o Ordem Livro coleta, como usamos cookies, anúncios do Google AdSense e links de afiliado da Amazon, e quais são os seus direitos pela LGPD.",
  alternates: { canonical: url("/politica-privacidade") },
};

const ATUALIZADA_EM = "23 de novembro de 2026";

export default function PoliticaDePrivacidade() {
  return (
    <div className="bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-areia-100 mb-20">
      <article className="prose prose-stone max-w-3xl mx-auto prose-headings:font-serif prose-a:text-marca-600">
        <h1>Política de Privacidade</h1>
        <p className="text-sm text-areia-500">Última atualização: {ATUALIZADA_EM}</p>

        <p>
          O <strong>Ordem Livro</strong> é um site que mostra a ordem de leitura de séries de
          livros. Esta página explica quais informações coletamos, como elas são usadas e quais
          são os seus direitos, de acordo com a Lei Geral de Proteção de Dados (LGPD, Lei nº
          13.709/2018).
        </p>

        <h2>1. Informações que coletamos</h2>
        <ul>
          <li>
            <strong>Formulário de contato:</strong> se você nos enviar uma mensagem, recebemos o
            nome, o e-mail e o texto que você escrever. O envio é processado pelo serviço
            Web3Forms, e usamos esses dados apenas para responder a você.
          </li>
          <li>
            <strong>Estatísticas de acesso:</strong> usamos o Vercel Web Analytics para saber
            quantas pessoas visitam cada página, de qual país e por qual tipo de dispositivo. Ele
            não usa cookies e não identifica você individualmente.
          </li>
          <li>
            <strong>Livros marcados como lidos:</strong> quando você marca um livro como lido,
            essa informação fica salva apenas no seu navegador (armazenamento local). Ela não é
            enviada para nós e você pode apagá-la limpando os dados do site no navegador.
          </li>
        </ul>
        <p>Não pedimos cadastro e não vendemos nenhuma informação pessoal.</p>

        <h2>2. Anúncios e cookies do Google AdSense</h2>
        <p>
          Este site pode exibir anúncios do Google AdSense. O Google e seus parceiros usam cookies
          para mostrar anúncios com base nas suas visitas anteriores a este e a outros sites.
        </p>
        <ul>
          <li>
            O cookie de publicidade do Google permite que ele e seus parceiros exibam anúncios com
            base nas suas visitas a este site e a outros sites na internet.
          </li>
          <li>
            Você pode desativar a publicidade personalizada nas{" "}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
              Configurações de anúncios do Google
            </a>
            .
          </li>
          <li>
            Para saber mais, veja{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              como o Google usa dados em anúncios
            </a>
            .
          </li>
        </ul>

        <h2>3. Links de afiliado da Amazon</h2>
        <p>
          Como Associado da Amazon, ganhamos com compras qualificadas. Os botões &quot;Ver Menor
          Preço&quot;, &quot;Ver na Amazon&quot; e semelhantes levam ao site da Amazon.com.br.
          Quando você clica, a Amazon pode usar cookies para registrar que a visita veio daqui. Se
          você comprar, recebemos uma comissão, sem nenhum custo a mais para você. O que acontece
          no site da Amazon segue a política de privacidade da própria Amazon.
        </p>

        <h2>4. Conteúdo de outros sites</h2>
        <p>
          Algumas páginas mostram imagens de capas hospedadas pela Amazon, fotos da Wikimedia
          Commons e players do Spotify. Esses serviços podem receber informações técnicas do seu
          navegador, como o endereço IP, ao carregar esse conteúdo.
        </p>

        <h2>5. Seus direitos</h2>
        <p>
          Pela LGPD, você pode pedir para saber quais dados temos sobre você, corrigi-los ou
          excluí-los. Como não mantemos cadastro, normalmente os únicos dados guardados são os de
          mensagens enviadas pelo formulário de contato. Para fazer um pedido, use a página de{" "}
          <Link href="/contato">contato</Link>.
        </p>

        <h2>6. Alterações nesta política</h2>
        <p>
          Podemos atualizar esta política quando o site mudar. A data no topo desta página mostra
          quando foi a última atualização.
        </p>
      </article>
    </div>
  );
}
