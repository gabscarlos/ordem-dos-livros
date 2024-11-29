import ItemSerie from "@/components/serie/ItemSerie";
import Pagina from "@/components/template/Pagina";
import series from "@/constants/series";

export default function Home() {
  return (
    <Pagina>
      
      <div className="flex flex-col gap-5">
        {series.map((serie) => (
          <ItemSerie key={serie.id} {...serie} />
        ))}
      </div>
      
    </Pagina>
  );
}
