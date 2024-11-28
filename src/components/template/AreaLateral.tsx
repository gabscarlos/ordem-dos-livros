import Menu from "./Menu";
import MenuItem from "./MenuItem";

export default function AreaLateral() {
    return (
        <aside className="flex flex-col self-start border border-zinc-800 p-5 rounded-md gap-10 w-72">
            <Menu titulo="Navegação">
                <MenuItem href="/" texto="Início" />
                <MenuItem href="/autores" texto="Autores" />
            </Menu>
        </aside>
    )
}