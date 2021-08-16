import React from "react";
import Soporte from "../soporte/Soporte";
import Perfil from "../dashboard/Perfil";
import Usuario from "../usuarios/Usuario";
import "../../styles/dashboard.css";
function Usuarios() {
  return (
    <div className="contenedor-dashboard">
      <div className="contenedor-info-perfil">
        <Perfil admin={true} />
      </div>
      <div className="contenedor-contenido-dashboard">
        <Usuario />
        <Soporte />
      </div>
    </div>
  );
}

export default Usuarios;
