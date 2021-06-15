import "./contactanos.css";
import Logoblanco from "../../IMG/Imagenes generales/Logo blanco.png";
import Whatsapp from "../../IMG/Iconos/WhatsApp.png";
import Facebook from "../../IMG/Iconos/Facebook.png";
import Instagram from "../../IMG/Iconos/Instagram.png";
import Gmail from "../../IMG/Iconos/Gmail.png";
export default function Contactanos() {
  return (
    <section>
      <div id="Contactanos" className="Container2">
        <div className="Contacto2 row mb-3 mt-5 border-0 p-5">
          <div className="col-sm-12 col-md-6">
            <article>
              <img src={Logoblanco} className="imagen-logo" />
              <h2 className="Contactanos fw-bold text-white mt-5">
                Contáctanos
              </h2>
              <img src={Whatsapp} className="Iconos" />
              <img src={Facebook} className="Iconos" />
              <a href="https://instagram.com/pinaco_cursonline?utm_medium=copy_link">
                <img src={Instagram} class="Iconos" />
              </a>
              <img src={Gmail} className="Iconos" />
            </article>
          </div>

          <div className="col-sm-12 col-md-6 mt-5">
            <article className="Sugerencia">
              <h5 className="text-white">Si tienes alguna duda o sugerencia</h5>
              <h5 className="Escribe text-white">¡Escribenos!</h5>
            </article>
            <div className="col-sm-12 col-md-6">
              <article>
                <div className="mt-5">
                  <input
                    type="name"
                    className="form-control"
                    placeholder="Nombres y apellidos"
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="email mt-4"
                    className="form-control"
                    placeholder="Correo eléctronico"
                  />
                </div>
                <div className="mt-3">
                  <textarea
                    className="Mensaje p-2"
                    placeholder="Mensaje"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    className="btn enviar fw-bold text-white"
                  >
                    Enviar
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
