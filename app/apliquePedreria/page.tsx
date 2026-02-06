import "./page.css";

export default function ApliquePedreria() {
  return (
    <section className="apliquePedreria">
      <div className="overlay">
        <h1 className="titulo">Aplique con Pedrería</h1>
        <p className="descripcion">
          Impresiones duraderas, colores vivos y acabado profesional que no se
          sienten al tacto.
        </p>

        <div className="acciones">
          <button className="btn info">Más información</button>
          <button className="btn contratar">Contratar</button>
        </div>
      </div>
    </section>
  );
}
