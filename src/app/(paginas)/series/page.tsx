import ItemSerie from "@/components/serie/ItemSerie";
import Titulo from "@/components/shared/Titulo";
import series from "@/constants/series";

export default function Series() {
  return (
    <div className="flex flex-col gap-5">
      <Titulo principal="Séries" secundario="Conheça aas séries das histórias que você ama!" />
      <div className="grid sm: grid-cols-1 lg:grid-cols-2 gap-5">
        {series.map((serie) => (
          <ItemSerie key={serie.id} {...serie} />
        ))}
      </div>
    </div>
  );
}
