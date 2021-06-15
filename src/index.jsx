import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
//styles//
import "./styles/pinaco.css";
//COMPONENTES//
import Header from "./Componentes/Header";
import Inicio from "./Componentes/Inicio";
import Cursos from "./Componentes/Cursos";
import Tecnicas from "./Componentes/Tecnicas";
import Metodología from "./Componentes/Metodología";
import Equipo from "./Componentes/Equipo";
import Contactanos from "./Componentes/Contactanos";
import Footer from "./Componentes/Footer";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Header />
      <Inicio />
      <Cursos />
      <Tecnicas />
      <Metodología />
      <Equipo />
      <Contactanos />
      <Footer />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
