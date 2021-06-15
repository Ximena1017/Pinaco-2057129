import "./Equipo.css";
import Ximena from "../../IMG/Imagenes generales/FotoXimena.png";
import Mariana from "../../IMG/Imagenes generales/FotoMariana.png";
import Jenifer from "../../IMG/Imagenes generales/FotoJenifer.png";
export default function Equipo() {
  return (
    <section>
      <div id="Equipo" className="Container">
        <article>
          <h1 className="las-profes text-center text-dark mt-5 mb-3 fw-bold p-3">
            Equipo de trabajo
          </h1>
        </article>

        <div className="row row-cols-md-3 p-4">
          <div className="col-sm-12 col-md-4 mt-3 d-flex justify-content-center">
            <article>
              <div className="card-section-border-0">
                <img src={Ximena} class="card-img-top" />
                <div className="card-body">
                  <h2 className="card-titulo text-dark text-center">
                    Ximena Sofia Estrada Martinez
                  </h2>
                  <h2 className="Contacto text-dark text-center">
                    Desarrolladora Web
                  </h2>
                  <h2 className="Contacto text-dark text-center">
                    Contacto: +57 3207087733
                  </h2>
                </div>
              </div>
            </article>
          </div>
          <div className="col-sm-12 col-md-4 mt-3 d-flex justify-content-center">
            <article>
              <div className="card-section-border-0">
                <img src={Mariana} class="card-img-top" />
                <div className="card-body">
                  <h2 className="card-titulo text-dark text-center">
                    Mariana Quintero López
                  </h2>
                  <h2 className="Contacto text-dark text-center">
                    Editora de videos
                  </h2>
                  <h2 className="Contacto text-dark text-center">
                    Contacto: +57 3005394452
                  </h2>
                </div>
              </div>
            </article>
          </div>
          <div className="col-sm-12 col-md-4 mt-3 d-flex justify-content-center">
            <article>
              <div class="card-section-border-0">
                <img src={Jenifer} className="card-img-top" />
                <div className="card-body">
                  <h2 className="card-titulo text-dark text-center">
                    Jenifer Jaramillo López
                  </h2>
                  <h2 className="Contacto text-dark text-center">
                    Diseñadora e ilustradora
                  </h2>
                  <h2 className="Contacto text-dark text-center">
                    Contacto: +57 3193203825
                  </h2>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
