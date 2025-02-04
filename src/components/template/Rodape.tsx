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
            href="https://www.instagram.com/ordemdoslivros/"
            alvo="_blank"
          />
        </Menu>

        {/* Coluna para Outras Categorias */}
        <Menu titulo="Outras Categorias" className="flex flex-col items-start">
          <MenuItem texto="Últimas Notícias" href="/blog" />
          <MenuItem texto="Séries Populares" href="/series" />
          <MenuItem texto="Política de Privacidade" href="/politica-privacidade" />
        </Menu>
      </footer>

      {/* Copyright */}
      <div className="flex flex-col items-center justify-center w-full bg-slate-400 py-2">
        <span className="text-sm text-center text-white">
          Todos os direitos reservados &copy; 2025 -{" "}
          <Link href="https://github.com/gabscarlos" className="hover:text-black">
            gabscarlos.dev
          </Link>
        </span>
      <p className="text-white text-xs text-center">Ordem dos Livros é um participante do Programa de Associados da Amazon Services LLC. Ao comprar pelos nossos links, ganhamos uma comissão, mas você não paga nada a mais por isso.</p>
      </div>
    </div>
  );
}
