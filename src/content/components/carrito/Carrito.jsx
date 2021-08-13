import React from "react";
import Soporte from "../soporte/Soporte";
import Perfil from "../dashboard/Perfil";
import Productos from "./ProductoCarrito";
import "../../styles/tienda.css";
function Carrito() {
  return (
    <>
      <div className="contenedor-dashboard">
        <div className="contenedor-info-perfil">
          <Perfil />
        </div>
        <div className="contenedor-contenido-dashboard">
          <h1>Carrito</h1>
          <small className="tienda-lorem">
            Aqui podras ver los productos que tienes actualmente en tu carrito!
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

export default Carrito;