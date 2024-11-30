
import Menu from "./Menu";
import MenuItem from "./MenuItem";

export default function AreaLateral() {
  return (
    <aside className="flex flex-col self-start border border-zinc-800 p-5 rounded-md gap-10 w-72">
      <Menu titulo="Navegação">
        <MenuItem href="/" texto="Início"/>
        <MenuItem href="/series" texto="Séries"/>
        <MenuItem href="/autores" texto="Autores"/>
        <MenuItem href="/" texto="Personagens"/>
      </Menu>
      <Menu titulo="Principais Autores">
        <MenuItem texto="J.K. Rowling" href="/autores/j-k-rowling"/>
        <MenuItem texto="James Dashner" href="/autores/james-dashner"/>
        <MenuItem texto="Jeff Kinney" href="/autores/jeff-kinney"/>
      </Menu>
      <Menu titulo="Outras Categorias">
        <MenuItem texto="Últimas Notícias" href="/"/>
        <MenuItem texto="Séries Populares" href="/"/>
        <MenuItem texto="Facebook" href="/"/>
        <MenuItem texto="Instagram" href="/"/>
    </Menu>
    </aside>
  );
}
