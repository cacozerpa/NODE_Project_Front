import React from "react";
import Soporte from "../soporte/Soporte";
import Perfil from "../dashboard/Perfil";
import Productos from "./Producto";
import "../../styles/tienda.css";
function Tienda() {
  return (
    <>
      <div className="contenedor-dashboard">
        <div className="contenedor-info-perfil">
          <Perfil />
        </div>
        <div className="contenedor-contenido-dashboard">
          <h1>Tienda</h1>
          <small className="tienda-lorem">
            En nuestra tienda podras encontrar todos los productos disponibles para la venta...!
          </small>
          <hr className="tienda-hr" />
          <div className="tienda">
            <Productos />
          </div>
          <Soporte />
        </div>
      </div>
    </>
  );
}

export default Tienda;
