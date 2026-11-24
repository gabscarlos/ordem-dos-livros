import Link from "next/link";
import Logo from "./Logo";

const colunas = [
  {
    titulo: "Descubra",
    links: [
      { texto: "Séries", href: "/series" },
      { texto: "Autores", href: "/autores" },
      { texto: "Mais vendidos", href: "/mais-vendidos" },
      { texto: "Blog", href: "/blog" },
    ],
  },
  {
    titulo: "Gêneros",
    links: [
      { texto: "Fantasia", href: "/generos/fantasia" },
      { texto: "Romantasia", href: "/generos/romantasia" },
      { texto: "Infantil", href: "/generos/infantil" },
      { texto: "Juvenil", href: "/generos/juvenil" },
      { texto: "Autores brasileiros", href: "/generos/autores-brasileiros" },
    ],
  },
  {
    titulo: "Ordem Livro",
    links: [
      { texto: "Contato", href: "/contato" },
      { texto: "Política de Privacidade", href: "/politica-privacidade" },
      { texto: "Facebook", href: "https://www.facebook.com/profile.php?id=61569512772060", externo: true },
      { texto: "Instagram", href: "https://www.instagram.com/ordemlivro/", externo: true },
    ],
  },
];

export default function Rodape() {
  return (
    <footer className="bg-areia-900 text-areia-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <Logo claro />
          <p className="text-sm leading-relaxed text-areia-300 max-w-xs">
            A ordem certa de leitura das suas séries favoritas, livro por livro.
          </p>
        </div>

        {colunas.map((coluna) => (
          <nav key={coluna.titulo} aria-label={coluna.titulo} className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-marca-400">
              {coluna.titulo}
            </span>
            <ul className="flex flex-col gap-2">
              {coluna.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    {...("externo" in l && l.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-areia-200 hover:text-marca-300 transition-colors"
                  >
                    {l.texto}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-areia-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-areia-400">
          <span>
            &copy; {new Date().getFullYear()} Ordem Livro ·{" "}
            <Link href="https://github.com/gabscarlos" className="hover:text-areia-100 transition-colors">
              gabscarlos.dev
            </Link>
          </span>
          <p className="max-w-xl sm:text-right">
            Como Associado da Amazon, o Ordem Livro ganha com compras qualificadas. Ao comprar
            pelos nossos links, você não paga nada a mais por isso.
          </p>
        </div>
      </div>
    </footer>
  );
}
