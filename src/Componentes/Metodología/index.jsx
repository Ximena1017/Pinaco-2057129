import "./Metodologia.css";
import Metodologia from "../../IMG/Imagenes generales/Metodología Paleta.jpg";

export default function Metodología() {
  return (
    <section>
      <div id="Metodologia" className="Container">
        <div className="BG-color2 row align-items-center mb-3 mt-5 border-0 mx-auto p-3">
          <div className="col-sm-12 col-md-6">
            <article>
              <h1 className="fw-bold text-white">Metodología</h1>
              <p className="Descripcion text-white mt-3">
                Te acompañamos a expresar y comunicar por medio de la pintura tu
                pasión por el arte; en Pinaco subirás de nivel a medida que vaya
                avanzando el curso, ¡Tú tienes el control!, tu decides en que
                técnica de pintura de las que te proponemos quieres enfocarte
                para desarrollar tus habilidades.
              </p>
            </article>
          </div>
          <div className="col-sm-12 col-md-6">
            <article>
              <img
                src={Metodologia}
                className="Imagen img-fluid"
                width="800px"
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
