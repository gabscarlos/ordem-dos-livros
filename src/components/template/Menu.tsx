export interface MenuProps {
  children: React.ReactNode;
  titulo: string;
}

export default function Menu(props: MenuProps) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-bold text-zinc-500">{props.titulo}</span>
      <ul className="flex flex-col">{props.children}</ul>
    </div>
  );
}
