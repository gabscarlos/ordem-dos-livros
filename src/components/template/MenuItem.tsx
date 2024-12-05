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
        className="flex gap-2 items-center cursor-pointer md:px-4 md:py-2
        text-zinc-800 dark:text-zinc-300 hover:underline text-sm"
      >
        <span>{props.children}</span>
        <span>{props.texto}</span>
      </Link>
    </li>
  );
}
