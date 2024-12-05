import Link from "next/link";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

export default function Rodape() {
  return (
    <div>
      <footer className="grid grid-cols-4 px-20 h-56 border-t-4 border-zinc-900 mt-16 gap-5">
        <div className="grid-flow-row gap-2 p-2 m-auto">
          <Logo />
          <p className="text-sm fon text-zinc-950 text">
            O guia perfeito para organizar suas leituras, com a ordem ideal de
            séries, trilogias e mais.
          </p>
        </div>
        <Menu titulo="Descubra" className="mt-4 m-auto">
          <MenuItem href="/series" texto="Séries" />
          <MenuItem href="/autores" texto="Autores" />
          <MenuItem href="/" texto="Audio Books" />
          <MenuItem href="/" texto="Quadrinhos" />
        </Menu>
        <Menu titulo="Social" className="mt-4 m-auto">
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
        <Menu titulo="Outras Categorias" className="mt-4 m-auto">
          <MenuItem texto="Últimas Notícias" href="/" />
          <MenuItem texto="Séries Populares" href="/series" />
        </Menu>
      </footer>
      <div className="flex w-full h-12 bg-slate-400">
        <span className="font-thin text-center text-white mx-auto p-1">
          Todos os direitos reservados &copy; {new Date().getFullYear()} - {" "}
          <Link href="https://github.com/gabscarlos" className="hover:text-black">gabscarlos.dev</Link>
        </span>
      </div>
    </div>
  );
}
