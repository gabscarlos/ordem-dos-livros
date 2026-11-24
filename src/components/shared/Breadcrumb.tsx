import Link from "next/link";

export interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex mb-6 text-sm text-areia-500 font-medium overflow-x-auto whitespace-nowrap pb-2 sm:pb-0">
      <ul className="flex items-center gap-2">
        <li>
          <Link href="/" className="hover:text-marca-600 transition-colors">
            Início
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span>/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-marca-600 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-areia-900 font-bold">{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
