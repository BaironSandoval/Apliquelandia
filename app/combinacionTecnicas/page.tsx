import "./page.css";

export default function CombinacionTecnicas() {
  return (
    <section className="combinacionTecnicas">
      <div className="overlay">
        <h1 className="titulo">Combinación de Técnicas</h1>
        {/* <p className="descripcion">
          Impresiones duraderas, colores vivos y acabado profesional que no se
          sienten al tacto.
        </p> */}

        <div className="acciones">
          <button className="btn info">Más información</button>
          <button className="btn contratar">Contratar</button>
        </div>
      </div>
    </section>
  );
}
