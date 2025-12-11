export interface TituloProps {
  principal: string;
  secundario: string;
}

export default function Titulo(props: TituloProps) {
  return (
    <div className="flex flex-col mb-6">
      <h1 className="text-3xl font-serif font-black text-zinc-900">{props.principal}</h1>
      <p className="text-sm text-zinc-500 font-medium mt-1">{props.secundario}</p>
      <div className="h-1 w-20 bg-indigo-500 rounded-full mt-3" />
    </div>
  );
}
