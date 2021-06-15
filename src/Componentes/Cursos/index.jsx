import "./Cursos.css";
import video from "../../IMG/Usuarios/Videointro2.png";

export default function Cursos() {
  return (
    <section>
      <div className="Container">
        <div
          id="Cursos"
          className="row align-items-center mb-3 mt-5 border-0 mx-auto p-5"
        >
          <div className="col-sm-12 col-md-6">
            <article>
              <h1 className="fw-bold">Aprende sobre nosotros</h1>
              <p className="Descripcion">
                En Pinaco utilizamos principalmente dos técnicas de pintura:
                Vinilos y acuarelas ya que las puedes conseguir por precios
                accesibles, son de fácil manejo y versátiles al uso; con estas
                podrás dejar llevar tu imaginación creando cuadros asombrosos.
              </p>
            </article>
          </div>
          <div className="col-sm-12 col-md-6">
            <article>
              <img src={video} className="img-fluid" width="800px" />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
