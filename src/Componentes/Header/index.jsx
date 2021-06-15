import "./header.css";
import Logo from "../../IMG/Imagenes generales/Logo_header.png";
export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="">
            <img src={Logo} alt="PINACO" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#PINACO"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="PINACO">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <a
                  className="nav-link text-dark"
                  href="#carouselExampleCaptions"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-dark" href="#Cursos">
                  Cursos
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-dark" href="#Tecnicas">
                  Técnicas
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-dark" href="#Metodologia">
                  Metodologia
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-dark" href="#Equipo">
                  Equipo
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-dark" href="#Contactanos">
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
