import Link from "next/link";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

export default function Rodape() {
  return (
    <div>
      <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-2 sm:px-7 md:px-10 py-10 border-t-2 border-zinc-200 mt-2 gap-10">
        {/* Coluna para Logo e Frase */}
        <div className="flex flex-col items-center gap-2 mr-12">
          <Logo />
          <p className="text-sm text-zinc-950 text-center sm:text-left">
            O guia perfeito para organizar suas leituras, com a ordem ideal de
            séries, trilogias e mais.
          </p>
        </div>

        {/* Coluna para Menu Descubra */}
        <Menu titulo="Descubra" className="flex flex-col items-start">
          <MenuItem href="/series" texto="Séries" />
          <MenuItem href="/autores" texto="Autores" />
          <MenuItem href="/blog" texto="Blog" />
          <MenuItem href="/mais-vendidos" texto="Mais Vendidos" />
        </Menu>

        {/* Coluna para Menu Social */}
        <Menu titulo="Social" className="flex flex-col items-start">
          <MenuItem texto="Contato" href="/contato" />
          <MenuItem
            texto="Facebook"
            href="https://www.facebook.com/profile.php?id=61569512772060"
            alvo="_blank"
          />
          <MenuItem
            texto="Instagram"
            href="https://www.instagram.com/ordemlivro/"
            alvo="_blank"
          />
        </Menu>

        {/* Coluna para Outras Categorias */}
        <Menu titulo="Gêneros" className="flex flex-col items-start">
          <MenuItem texto="Fantasia" href="/generos/fantasia" />
          <MenuItem texto="Romantasia" href="/generos/romantasia" />
          <MenuItem texto="Infantil" href="/generos/infantil" />
          <MenuItem texto="Juvenil" href="/generos/juvenil" />
          <MenuItem texto="Autores brasileiros" href="/generos/autores-brasileiros" />
          <MenuItem
            texto="Política de Privacidade"
            href="/politica-privacidade"
          />
        </Menu>
      </footer>

      {/* Copyright */}
      <div className="flex flex-col items-center justify-center w-full bg-zinc-900 py-4 px-4 gap-2">
        <span className="text-sm text-center text-zinc-400">
          Todos os direitos reservados &copy; {new Date().getFullYear()} -{" "}
          <Link
            href="https://github.com/gabscarlos"
            className="hover:text-white transition-colors"
          >
            gabscarlos.dev
          </Link>
        </span>
        <p className="text-zinc-500 text-xs text-center max-w-4xl">
          Como Associado da Amazon, o Ordem Livro ganha com compras
          qualificadas. Ao comprar pelos nossos links, você não paga nada a
          mais por isso.
        </p>
      </div>
    </div>
  );
}
