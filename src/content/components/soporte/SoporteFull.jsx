import React from "react";
import "../../styles/home.css";
import Telefono from "../../images/telefono.svg";
import Email from "../../images/email.svg";
function Home() {
  return (
    <div className="contenedor-inicio">
      <div className="contenedor-contenido-inicio">
        <div className="soporte-full-contenedor">
          <h1 className="soporte-titulo">Soporte</h1>
          <small>Contactanos con:</small>
          <hr />
          <div className="contenido-soporte">
            <div className="telefono contacto">
              <img
                src={Telefono}
                alt=""
                srcset=""
                className="contacto-imagen"
              />
              <h1>Nuestro Telefono:</h1>
              <h3>+58424-6732847</h3>
            </div>
            <div className="correo contacto">
              <img src={Email} alt="" className="contacto-imagen" />
              <h1>Nuestro Correo</h1>
              <h3>soporte@dsinegrete.com</h3>
            </div>
          </div>
          {/* <div className="soporte-full-contenido"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
