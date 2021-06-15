import "./Tecnicas.css";
import tecnicas from "../../IMG/Imagenes generales/Tecnicas Paleta.jpg";

export default function Tecnicas() {
  return (
    <section>
      <div id="Tecnicas" className="Container">
        <div className="BG-color1 row align-items-center mb-3 border-0 p-3 mx-auto">
          <div className="col-sm-12 col-md-6">
            <article>
              <img src={tecnicas} class="Imagen img-fluid" />
            </article>
          </div>
          <div className="col-sm-12 col-md-6">
            <article>
              <h1 className="Tecnicas fw-bold text-white mt-3">Técnicas</h1>
              <p className="Descripcion text-white">
                En Pinaco utilizamos principalmente dos técnicas de pintura:
                Vinilos y acuarelas ya que las puedes conseguir por precios
                accesibles, son de fácil manejo y versátiles al uso; con estas
                podrás dejar llevar tu imaginación creando cuadros asombrosos..
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
