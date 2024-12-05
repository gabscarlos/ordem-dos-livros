import Link from "next/link";

export interface MenuItemProps {
  href: string;
  texto: string;
  children?: React.ReactNode;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <li>
      <Link
        href={props.href}
        target="_blank"
        className="flex gap-2 items-center cursor-pointer px-4 py-2 text-zinc-800 hover:underline text-sm 
          sm:px-6 sm:py-3"
      >
        <span>{props.children}</span>
        <span>{props.texto}</span>
      </Link>
    </li>
  );
}
