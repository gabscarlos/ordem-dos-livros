import Link from "next/link";

export interface MenuItemProps {
  href: string;
  texto: string;
  children?: React.ReactNode;
  alvo?: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <li>
      <Link
        href={props.href}
        target={props.alvo}
        className="flex gap-2 items-center cursor-pointer py-2 text-zinc-600 hover:text-indigo-600 transition-colors text-sm font-medium"
      >
        <span>{props.children}</span>
        <span>{props.texto}</span>
      </Link>
    </li>
  );
}
