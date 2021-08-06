import React from "react";
import "../../styles/soporte.css";
import Telefono from "../../images/telefono-blanco.svg";
import Email from "../../images/email-blanco.svg";
function Soporte() {
  return (
    <>
      <div className="contenedor-soporte">
        <h1>Soporte:</h1>
        <hr />
        <div className="contenido-soporte">
          <div className="telefono">
            <img src={Telefono} alt="" className="contacto-imagen" />
            <h1>Nuestro Telefono:</h1>
            <h3>+58424-6732847</h3>
          </div>
          <div className="correo">
            <img src={Email} alt="" className="contacto-imagen" />
            <h1>Nuestro Correo</h1>
            <h3>soporte@disnegrete.com</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Soporte;
