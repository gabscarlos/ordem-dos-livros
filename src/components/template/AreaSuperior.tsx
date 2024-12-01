import MenuItem from "./MenuItem";

export interface AreaSuperiorProps {
  className?: string;
}

export default function AreaSuperior(props: AreaSuperiorProps) {
  return (
    <div className={`flex justify-around items-center border list-none border-zinc-800 p-2 rounded-md h-20 ${props.className}`}>      
        <MenuItem href="/" texto="Início"/>
        <MenuItem href="/series" texto="Séries"/>
        <MenuItem href="/autores" texto="Autores"/>
        <MenuItem href="/" texto="Personagens"/>        
    </div>
  );
}
