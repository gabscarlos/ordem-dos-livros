import Link from "next/link";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

export default function Rodape() {
  return (
    <div>
      <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4 sm:px-10 md:px-20 py-10 border-t-2 border-zinc-200 mt-28 gap-10">
        {/* Coluna para Logo e Frase */}
        <div className="flex flex-col items-center gap-4 sm:items-start">
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
          <MenuItem href="/" texto="Audio Books" />
          <MenuItem href="/" texto="Quadrinhos" />
        </Menu>

        {/* Coluna para Menu Social */}
        <Menu titulo="Social" className="flex flex-col items-start">
          <MenuItem texto="Contato" href="/" />
          <MenuItem
            texto="Facebook"
            href="https://www.facebook.com/profile.php?id=61569512772060"
          />
          <MenuItem
            texto="Instagram"
            href="https://www.instagram.com/ordemdoslivros/"
          />
        </Menu>

        {/* Coluna para Outras Categorias */}
        <Menu titulo="Outras Categorias" className="flex flex-col items-start">
          <MenuItem texto="Últimas Notícias" href="/" />
          <MenuItem texto="Séries Populares" href="/series" />
        </Menu>
      </footer>

      {/* Copyright */}
      <div className=" flex items-center justify-center w-full bg-slate-400 py-2">
        <span className="text-sm text-center text-white">
          Todos os direitos reservados &copy; {new Date().getFullYear()} -{" "}
          <Link href="https://github.com/gabscarlos" className="hover:text-black">
            gabscarlos.dev
          </Link>
        </span>
      </div>
    </div>
  );
}
