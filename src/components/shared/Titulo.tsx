export interface TituloProps {
  principal: string;
  secundario: string;
  nivel?: 1 | 2;
}

export default function Titulo(props: TituloProps) {
  const Tag = props.nivel === 2 ? "h2" : "h1";
  return (
    <div className="flex flex-col mb-6">
      <Tag className="text-3xl font-serif font-black text-zinc-900">{props.principal}</Tag>
      <p className="text-sm text-zinc-500 font-medium mt-1">{props.secundario}</p>
      <div className="h-1 w-20 bg-indigo-500 rounded-full mt-3" />
    </div>
  );
}
