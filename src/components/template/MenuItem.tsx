import Link from "next/link";

export interface MenuItemProps {
  href: string;
  texto: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <li>
      <Link
        href={props.href}
        className="flex gap-2 items-center cursor-pointer px-4 py-2
        text-zinc-300 hover:underline hover:text-white
        hover:bg-white/10"
      >
        <span>{props.texto}</span>
      </Link>
    </li>
  );
}
