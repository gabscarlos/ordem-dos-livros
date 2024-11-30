import {
  IconBooks,
  IconBrandFacebook,
  IconBrandInstagram,
  IconFriends,
  IconHome,
  IconRss,
  IconSquare1,
  IconSquare2,
  IconSquare3,
  IconUsers,
} from "@tabler/icons-react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

export default function AreaLateral() {
  return (
    <aside className="flex flex-col self-start border border-zinc-800 p-5 rounded-md gap-10 w-72">
      <Menu titulo="Navegação">
        <MenuItem href="/" texto="Início">
          <IconHome size={20} />
        </MenuItem>
        <MenuItem href="/series" texto="Séries">
          <IconBooks size={20} />
        </MenuItem>
        <MenuItem href="/autores" texto="Autores">
          <IconUsers size={20} />
        </MenuItem>
        <MenuItem href="/" texto="Personagens">
          <IconFriends size={20} />
        </MenuItem>
      </Menu>
      <Menu titulo="Principais Autores">
        <MenuItem texto="J.K. Rowling" href="/autores/j-k-rowling">
          <IconSquare1 size={20} />
        </MenuItem>
        <MenuItem texto="R. L. Stine" href="/autores/r-l-stine">
          <IconSquare2 size={20} />
        </MenuItem>
        <MenuItem texto="Jeff Kinney" href="/autores/jeff-kinney">
          <IconSquare3 size={20} />
        </MenuItem>
      </Menu>
      <Menu titulo="Outras Categorias">
        <MenuItem texto="Últimas Notícias" href="/">
            <IconRss size={20} />
        </MenuItem>
        <MenuItem texto="Séries Populares" href="/">
            <IconBooks size={20} />
        </MenuItem>
        <MenuItem texto="Facebook" href="/">
            <IconBrandFacebook size={20} />
        </MenuItem>
        <MenuItem texto="Instagram" href="/">
            <IconBrandInstagram size={20} />
        </MenuItem>
    </Menu>
    </aside>
  );
}
