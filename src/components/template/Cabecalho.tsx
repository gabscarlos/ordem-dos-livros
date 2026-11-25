import Link from "next/link";
import Logo from "./Logo";
import FlyoutMenu from "./FlyoutMenu";
import Busca from "./Busca";

const links = [
  { href: "/series", texto: "Séries" },
  { href: "/autores", texto: "Autores" },
  { href: "/guias", texto: "Guias" },
  { href: "/mais-vendidos", texto: "Mais vendidos" },
  { href: "/blog", texto: "Blog" },
];

export default function Cabecalho() {
  return (
    <header className="sticky top-0 z-40 bg-areia-100/90 backdrop-blur border-b border-areia-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <FlyoutMenu />
          </div>
          <Logo compacto />

          <nav aria-label="Principal" className="hidden md:flex items-center gap-1 ml-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-full text-sm font-medium text-areia-700 hover:text-areia-900 hover:bg-areia-200/60 transition-colors"
              >
                {l.texto}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:block ml-auto w-full max-w-xs">
            <Busca id="busca-topo" />
          </div>
        </div>

        {/* No celular a busca fica numa linha própria, com a largura toda. */}
        <div className="sm:hidden">
          <Busca id="busca-topo-celular" />
        </div>
      </div>
    </header>
  );
}
