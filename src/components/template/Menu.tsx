export interface MenuProps {
  children: React.ReactNode;
  titulo: string;
  className?: string;
}

export default function Menu(props: MenuProps) {
  return (
    <div className={`flex flex-col gap-3 ${props.className}`}>
      <span className="text-sm font-bold text-zinc-950">{props.titulo}</span>
      <ul className="flex flex-col">{props.children}</ul>
    </div>
  );
}
