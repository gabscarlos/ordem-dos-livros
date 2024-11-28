export interface TituloProps {
  principal: string;
  secundario: string;
}

export default function Titulo(props: TituloProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-black">{props.principal}</h1>
      <p className="text-sm text-zinc-400">{props.secundario}</p>
    </div>
  );
}
