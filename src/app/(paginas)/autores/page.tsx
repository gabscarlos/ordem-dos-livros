import ItemAutor from "@/components/autor/ItemAutor";
import Titulo from "@/components/shared/Titulo";
import autores from "@/constants/autores";

export default function Autores() {
  return (
    <div className="flex flex-col gap-10">
      <Titulo principal="Autores" secundario="Conheça os autores que escrevem as histórias que você ama!" />
      <div className="grid grid-cols-2 gap-5">
        {autores.map((autor) => (
          <ItemAutor key={autor.id} {...autor} />
        ))}
      </div>
    </div>
  );
}
